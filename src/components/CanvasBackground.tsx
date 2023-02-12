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
  const offscreenCtx = useRef<CanvasRenderingContext2D | null>(null);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!ctx.current || !offscreenCtx.current) return;

    offscreenCtx.current.fillStyle = `hsl(${getHue()},100%,${DRAW_LIGHTNESS}%,${DRAW_OPACITY})`;
    offscreenCtx.current.beginPath();
    offscreenCtx.current.arc(
      event.clientX,
      event.clientY,
      DRAW_RADIUS,
      0,
      2 * Math.PI
    );
    offscreenCtx.current.fill();

    ctx.current.clearRect(
      0,
      0,
      ctx.current.canvas.width,
      ctx.current.canvas.height
    );
    ctx.current.drawImage(offscreenCtx.current.canvas, 0, 0);
  }, []);

  const handleResize = useCallback(() => {
    if (!ctx.current || !offscreenCtx.current) return;

    console.log(document.body.clientHeight, document.body.clientWidth);
    const imageData = offscreenCtx.current.getImageData(
      0,
      0,
      ctx.current.canvas.width,
      ctx.current.canvas.height
    );

    offscreenCtx.current.canvas.width = document.body.clientWidth;
    offscreenCtx.current.canvas.height = document.body.clientHeight;

    ctx.current.canvas.width = document.body.clientWidth;
    ctx.current.canvas.height = document.body.clientHeight;
    ctx.current.filter = `blur(${BLUR_RADIUS}px)`;

    offscreenCtx.current.putImageData(imageData, 0, 0);
    ctx.current.drawImage(offscreenCtx.current.canvas, 0, 0);
  }, []);

  useEffect(() => {
    if (!ctx.current) return;

    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = document.body.clientWidth;
    offscreenCanvas.height = document.body.clientHeight;
    offscreenCtx.current = offscreenCanvas.getContext('2d');

    ctx.current.canvas.width = document.body.clientWidth;
    ctx.current.canvas.height = document.body.clientHeight;
    ctx.current.filter = `blur(${BLUR_RADIUS}px)`;

    document.body.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMouseMove, handleResize]);

  return (
    <canvas
      ref={(node) => {
        if (!node) return;
        ctx.current = node?.getContext('2d');
      }}
    />
  );
}

export default CanvasBackground;
