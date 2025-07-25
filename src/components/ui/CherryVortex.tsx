import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CherryVortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
}

export const CherryVortex: React.FC<CherryVortexProps> = ({
  children,
  className,
  containerClassName,
  particleCount = 1000, // Reduced from 200
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const noise3D = useRef(createNoise3D());
  
  // Performance optimized parameters
  const PARTICLE_PROPS_COUNT = 9;
  const RANGE_Y = 80;
  const BASE_TTL = 70;
  const RANGE_TTL = 130;
  const BASE_SPEED = 0.1;
  const RANGE_SPEED = 0.8;
  const BASE_RADIUS = 1;
  const RANGE_RADIUS = 1.5;
  const BASE_HUE = 330; // Cherry red hue (330-340 is cherry red)
  const RANGE_HUE = 15; // Narrower color range
  const NOISE_STEPS = 3; // Reduced from 3
  const X_OFF = 0.001;
  const Y_OFF = 0.001;
  const Z_OFF = 0.0003;

//   const HALF_PI = 0.5 * Math.PI;
  const TAU = 2 * Math.PI;
//   const TO_RAD = Math.PI / 180;

  const rand = (n: number): number => n * Math.random();
  const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let centerX = canvas.width / 2;
    console.log(centerX)
    let centerY = canvas.height / 2;
    let particleProps = new Float32Array(particleCount * PARTICLE_PROPS_COUNT);
    let tick = 0;

    // Initialize particles
    const initParticles = () => {
      for (let i = 0; i < particleProps.length; i += PARTICLE_PROPS_COUNT) {
        const x = rand(canvas.width);
        const y = centerY + (Math.random() * 2 - 1) * RANGE_Y;
        particleProps.set(
          [
            x,
            y,
            0, // vx
            0, // vy
            0, // life
            BASE_TTL + rand(RANGE_TTL), // ttl
            BASE_SPEED + rand(RANGE_SPEED), // speed
            BASE_RADIUS + rand(RANGE_RADIUS), // radius
            BASE_HUE + rand(RANGE_HUE), // hue
          ],
          i
        );
      }
    };

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      initParticles();
    };

    const drawParticle = (
      x: number,
      y: number,
      x2: number,
      y2: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number,
      ctx: CanvasRenderingContext2D
    ) => {
      const alpha = fadeInOut(life, ttl);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `hsla(${hue}, 95%, 65%, ${alpha})`;
      ctx.lineWidth = radius;
      ctx.lineCap = "round";
      ctx.stroke();
    };

    const updateParticle = (i: number) => {
      const p = i * PARTICLE_PROPS_COUNT;
      const n = noise3D.current(
        particleProps[p] * X_OFF,
        particleProps[p + 1] * Y_OFF,
        tick * Z_OFF
      ) * NOISE_STEPS * TAU;
      
      const cos = Math.cos(n);
      const sin = Math.sin(n);
      const speed = particleProps[p + 6];
      
      // Update velocity with lerping
      particleProps[p + 2] = 0.5 * particleProps[p + 2] + 0.5 * cos;
      particleProps[p + 3] = 0.5 * particleProps[p + 3] + 0.5 * sin;
      
      // Update position
      particleProps[p] += particleProps[p + 2] * speed;
      particleProps[p + 1] += particleProps[p + 3] * speed;
      
      // Update life
      particleProps[p + 4]++;
    };

    const render = () => {
      if (!ctx) return;
      
      // Clear with transparent instead of fill for performance
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      for (let i = 0; i < particleCount; i++) {
        const p = i * PARTICLE_PROPS_COUNT;
        updateParticle(i);
        
        drawParticle(
          particleProps[p] - particleProps[p + 2] * particleProps[p + 6],
          particleProps[p + 1] - particleProps[p + 3] * particleProps[p + 6],
          particleProps[p],
          particleProps[p + 1],
          particleProps[p + 4],
          particleProps[p + 5],
          particleProps[p + 7],
          particleProps[p + 8],
          ctx
        );
        
        // Reset particles that are out of bounds or expired
        if (
          particleProps[p + 4] > particleProps[p + 5] ||
          particleProps[p] < 0 ||
          particleProps[p] > canvas.width ||
          particleProps[p + 1] < 0 ||
          particleProps[p + 1] > canvas.height
        ) {
          particleProps[p] = rand(canvas.width);
          particleProps[p + 1] = centerY + (Math.random() * 2 - 1) * RANGE_Y;
          particleProps[p + 4] = 0; // Reset life
        }
      }
      
      tick++;
      animationFrameId.current = requestAnimationFrame(render);
    };

    // Initial setup
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    
    animationFrameId.current = requestAnimationFrame(render);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [particleCount]);

  return (
    <div className={cn("relative h-full w-full overflow-hidden", containerClassName)}>
      <motion.div
        ref={containerRef}
        className="absolute inset-0 z-0 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <canvas ref={canvasRef} className="h-full w-full" />
      </motion.div>
      
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
};