import React, { useEffect, useRef } from 'react';

class Node {
  constructor(canvasWidth, canvasHeight, layer = 0) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 0.2;
    this.vy = (Math.random() - 0.5) * 0.2;
    this.radius = Math.random() * 2 + 1.5;
    this.pulsePhase = Math.random() * Math.PI * 2;
    this.layer = layer; // 0 = background, 1 = foreground
    this.opacity = layer === 0 ? 0.35 : 0.6;
  }

  update(canvasWidth, canvasHeight) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;

    this.x = Math.max(20, Math.min(canvasWidth - 20, this.x));
    this.y = Math.max(20, Math.min(canvasHeight - 20, this.y));

    this.pulsePhase += 0.012;
  }
}

export default function NeuralNetworkBackground() {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // More nodes for better visibility
      const bgNodeCount = Math.min(35, Math.floor((width * height) / 40000));
      const fgNodeCount = Math.min(25, Math.floor((width * height) / 60000));
      
      const bgNodes = Array.from({ length: bgNodeCount }, () => new Node(width, height, 0));
      const fgNodes = Array.from({ length: fgNodeCount }, () => new Node(width, height, 1));
      
      nodesRef.current = [...bgNodes, ...fgNodes];
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let frameCount = 0;
    const animate = () => {
      frameCount++;
      // Render every 2nd frame for performance (30fps)
      if (frameCount % 2 === 0) {
        ctx.clearRect(0, 0, width, height);

        const nodes = nodesRef.current;
        const mouse = mouseRef.current;

        // Sort by layer so background renders first
        nodes.sort((a, b) => a.layer - b.layer);

        // Update and draw nodes
        nodes.forEach((node) => {
          node.update(width, height);

          // Very subtle mouse interaction
          if (mouse.x !== null && mouse.y !== null && node.layer === 1) {
            const dx = node.x - mouse.x;
            const dy = node.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100 && dist > 0) {
              const force = (100 - dist) / 100;
              node.vx += (dx / dist) * force * 0.2;
              node.vy += (dy / dist) * force * 0.2;
              node.vx *= 0.95;
              node.vy *= 0.95;
            }
          }

          // Brighter node with pulse
          const pulse = Math.sin(node.pulsePhase) * 0.25 + 0.75;
          const alpha = node.opacity * pulse;
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(106, 166, 255, ${alpha})`;
          ctx.fill();

          // Soft glow - only for foreground nodes
          if (node.layer === 1) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(106, 166, 255, ${alpha * 0.3})`;
            ctx.fill();
          }
        });

        // Draw connections - more visible
        const maxDistance = node => node.layer === 0 ? 120 : 160;
        const maxConnections = 3;

        for (let i = 0; i < nodes.length; i++) {
          let connections = 0;
          const nodeA = nodes[i];
          
          for (let j = i + 1; j < nodes.length && connections < maxConnections; j++) {
            const nodeB = nodes[j];
            
            // Only connect nodes of same layer or adjacent layers
            if (Math.abs(nodeA.layer - nodeB.layer) > 1) continue;
            
            const dx = nodeA.x - nodeB.x;
            const dy = nodeA.y - nodeB.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = Math.max(maxDistance(nodeA), maxDistance(nodeB));

            if (dist < maxDist) {
              connections++;
              const opacity = (1 - dist / maxDist) * 0.35 * (nodeA.layer === 0 ? 0.6 : 1);
              
              // More defined gradient line
              const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
              gradient.addColorStop(0, `rgba(106, 166, 255, ${opacity * 0.3})`);
              gradient.addColorStop(0.5, `rgba(106, 166, 255, ${opacity})`);
              gradient.addColorStop(1, `rgba(106, 166, 255, ${opacity * 0.3})`);

              ctx.beginPath();
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeB.y);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1.2;
              ctx.stroke();

              // Subtle glow under the line
              ctx.beginPath();
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeB.y);
              ctx.strokeStyle = `rgba(106, 166, 255, ${opacity * 0.2})`;
              ctx.lineWidth = 3;
              ctx.stroke();

              // Occasional subtle pulse along connection (only for foreground)
              if (nodeA.layer === 1 && frameCount % 120 === 0) {
                const pulsePos = (Date.now() / 3000) % 1;
                const pulseX = nodeA.x + dx * pulsePos;
                const pulseY = nodeA.y + dy * pulsePos;
                
                ctx.beginPath();
                ctx.arc(pulseX, pulseY, 1, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(179, 136, 255, ${opacity * 2})`;
                ctx.fill();
              }
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 0,
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(106, 166, 255, 0.025) 0%, transparent 40%),
          radial-gradient(ellipse at 80% 80%, rgba(179, 136, 255, 0.02) 0%, transparent 40%),
          radial-gradient(ellipse at 50% 50%, rgba(106, 166, 255, 0.015) 0%, transparent 70%)
        `
      }}
    />
  );
}
