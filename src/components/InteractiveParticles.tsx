import { useEffect, useRef } from 'react';

export default function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.8;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle system config
    const config = {
      particleCount: 80,
      particleSize: 2,
      particleColor: '#ffffff',
      connectionDistance: 150,
      connectionStrength: 0.2,
      mouseInfluenceRadius: 200,
      mouseInfluenceStrength: 0.05,
    };

    // Particles array
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;
    let mouseActive = false;

    // Initialize particles
    for (let i = 0; i < config.particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: config.particleSize + Math.random() * 2,
        color: config.particleColor,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseActive = true;
    };

    const handleMouseLeave = () => {
      mouseActive = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        // Apply mouse influence
        if (mouseActive) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < config.mouseInfluenceRadius) {
            const force = (1 - distance / config.mouseInfluenceRadius) * config.mouseInfluenceStrength;
            p.vx += (dx / distance) * force;
            p.vy += (dy / distance) * force;
          }
        }
        
        // Apply velocity with damping
        p.vx *= 0.95;
        p.vy *= 0.95;
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Boundary bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -0.8;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -0.8;
        
        // Keep particles in bounds
        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));
        
        // Draw connections to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < config.connectionDistance) {
            const opacity = 1 - distance / config.connectionDistance;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.1})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      aria-hidden="true"
    />
  );
}