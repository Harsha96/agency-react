import { useEffect, useRef } from 'react';

export default function GradientMesh() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const animateMesh = () => {
      const now = Date.now() / 1000;
      
      // Animate gradient stops
      const stops = svg.querySelectorAll('stop');
      stops.forEach((stop, i) => {
        const offset = Math.sin(now * 0.5 + i) * 0.3 + 0.5;
        (stop as SVGStopElement).setAttribute('stop-color', 
          i === 0 ? '#667eea' : 
          i === 1 ? '#764ba2' : 
          i === 2 ? '#f093fb' : '#4facfe'
        );
      });
      
      requestAnimationFrame(animateMesh);
    };
    
    animateMesh();
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="33%" stopColor="#764ba2" />
          <stop offset="66%" stopColor="#f093fb" />
          <stop offset="100%" stopColor="#4facfe" />
        </linearGradient>
      </defs>
      
      {/* Mesh pattern */}
      <pattern id="mesh" width="40" height="40" patternUnits="userSpaceOnUse">
        <path 
          d="M 40 0 L 0 0 0 40" 
          fill="none" 
          stroke="url(#meshGradient)" 
          strokeWidth="0.5"
          opacity="0.15"
        />
      </pattern>
      
      <rect width="100%" height="100%" fill="url(#mesh)" />
      
      {/* Animated wave shapes */}
      <path
        d="M0,0 L0,100 L100,100 L100,0 Z"
        fill="url(#meshGradient)"
        opacity="0.05"
        className="animate-wave"
      />
    </svg>
  );
}