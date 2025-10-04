"use client"
import { Button } from '@/components/ui/button';
import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Line configuration
    const lines = [
      { y: 0.2, speed: 0.3, amplitude: 50, color: 'rgba(0, 0, 0,)' },
      { y: 0.35, speed: 0.25, amplitude: 70, color: 'rgba(0, 0, 0, 0.3)' },
      { y: 0.5, speed: 0.35, amplitude: 60, color: 'rgba(0, 0, 0, 0.35)' },
      { y: 0.65, speed: 0.28, amplitude: 80, color: 'rgba(0, 0, 0, 0.25)' },
      { y: 0.8, speed: 0.32, amplitude: 65, color: 'rgba(0, 0, 0, 0.3)' },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 2;

        for (let x = 0; x <= canvas.width; x += 5) {
          const y = 
            canvas.height * line.y +
            Math.sin((x * 0.005) + (time * line.speed)) * line.amplitude +
            Math.cos((x * 0.003) + (time * line.speed * 0.5)) * (line.amplitude * 0.5);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br  overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
         <Button className="bg-slate-200 dark:bg-slate-600 rounded-full">About Us</Button>
        <h1 className="text-6xl font-bold mb-6">
          Hyper Nexium Technologies
        </h1>
        <p className="text-xl  max-w-2xl mb-8">
          Smooth, flowing animated lines that create a dynamic background effect
        </p>
       
      </div>
    </div>
  );
}