'use client';

import { useEffect, useRef } from 'react';

export default function BrainScene({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx = canvas.getContext('2d');
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;
      time += 0.01;

      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.28;

      // Glow
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 2.5);
      glow.addColorStop(0, 'rgba(124, 77, 255, 0.1)');
      glow.addColorStop(0.4, 'rgba(68, 138, 255, 0.05)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Concentric brain-like rings with organic deformation
      const layers = 14;
      const pulse = 0.92 + 0.08 * Math.sin(time * 0.5);

      for (let l = 0; l < layers; l++) {
        const layerR = radius * (0.4 + (l / layers) * 0.6) * pulse;
        const alpha = 0.06 + (1 - l / layers) * 0.1;
        const hue = 260 + l * 4 + Math.sin(time * 0.2 + l * 0.7) * 12;
        const rot = time * 0.08 + l * 0.25;

        ctx.beginPath();
        const pts = 40;
        for (let i = 0; i <= pts; i++) {
          const a = (i / pts) * Math.PI * 2 + rot;
          const fold = Math.sin(a * 4 + time * 0.4 + l * 0.5) * 0.18;
          const fold2 = Math.cos(a * 6 - time * 0.3 + l * 0.6) * 0.08;
          const r = layerR * (1 + fold + fold2);
          const x = cx + r * Math.cos(a);
          const y = cy + r * Math.sin(a) * 0.82;
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = `hsla(${hue}, 80%, 65%, ${alpha})`;
        ctx.lineWidth = 1.5 - l * 0.08;
        ctx.stroke();
        ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha * 0.2})`;
        ctx.fill();
      }

      // Particles
      for (let i = 0; i < 90; i++) {
        const t = (i / 90) * Math.PI * 2 + time * 0.04;
        const p = Math.acos(2 * ((i * 0.19) % 1) - 1);
        const pr = radius * (1.2 + 0.35 * Math.sin(i * 0.6 + time));
        const px = cx + pr * Math.sin(p) * Math.cos(t);
        const py = cy + pr * Math.cos(p) * 0.82;
        const s = 1.2 + Math.sin(time * 2 + i * 0.5) * 0.8;
        const a = 0.3 + 0.5 * Math.sin(time * 1.3 + i * 0.6);
        ctx.beginPath();
        ctx.arc(px, py, s, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(280, 90%, 75%, ${a})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
