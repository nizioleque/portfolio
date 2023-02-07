import { useRef, useEffect, useCallback } from 'react';

const DRAW_RADIUS = 20;
const BLUR_RADIUS = 100;
const DRAW_OPACITY = 1;
const DRAW_LIGHTNESS = 65;
const HUE_CHANGE_SPEED = 1 / 20;

function getHue() {
  const t = Date.now() * HUE_CHANGE_SPEED;
  return t % 360;
}

function CanvasBackground() {
  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    console.log('a');
    if (!ctx.current) return;

    ctx.current.fillStyle = `hsl(${getHue()},100%,${DRAW_LIGHTNESS}%,${DRAW_OPACITY})`;
    ctx.current.beginPath();
    ctx.current.arc(event.clientX, event.clientY, DRAW_RADIUS, 0, 2 * Math.PI);
    ctx.current.fill();
  }, []);

  useEffect(() => {
    if (!ctx.current) return;
    ctx.current.canvas.height = document.body.clientHeight;
    ctx.current.canvas.width = document.body.clientWidth;

    document.body.addEventListener('mousemove', handleMouseMove);
    return () =>
      document.body.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <canvas
      ref={(node) => {
        if (!node) return;
        ctx.current = node?.getContext('2d');
      }}
      style={{
        filter: `blur(${BLUR_RADIUS}px)`,
      }}
    />
  );
}

export default CanvasBackground;
