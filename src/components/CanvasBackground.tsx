import { useRef, useEffect, useCallback } from 'react';

const DRAW_RADIUS = 20;
const BLUR_RADIUS = 100;
const DRAW_OPACITY = 1;
const DRAW_LIGHTNESS = 50;
const HUE_CHANGE_SPEED = 1 / 20;

const SUPPORTS_CANVAS_FILTER =
  typeof document.createElement('canvas').getContext('2d')!.filter !==
  'undefined';

function getHue() {
  const t = Date.now() * HUE_CHANGE_SPEED;
  return t % 360;
}

function setCanvasSize(ctx: CanvasRenderingContext2D, document: Document) {
  ctx.canvas.width = document.body.clientWidth * window.devicePixelRatio;
  ctx.canvas.height = document.body.clientHeight * window.devicePixelRatio;
}

function setCanvasBlur(ctx: CanvasRenderingContext2D) {
  if (SUPPORTS_CANVAS_FILTER) ctx.filter = `blur(${BLUR_RADIUS}px)`;
  else ctx.canvas.style.filter = `blur(${BLUR_RADIUS}px)`;
}

function CanvasBackground() {
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const offscreenCtx = useRef<CanvasRenderingContext2D | null>(null);

  const redrawCanvas = useRef<boolean>(false);
  const rafHandle = useRef<number | null>(null);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!ctx.current || !offscreenCtx.current) return;

    offscreenCtx.current.fillStyle = `hsl(${getHue()},100%,${DRAW_LIGHTNESS}%,${DRAW_OPACITY})`;
    offscreenCtx.current.beginPath();
    offscreenCtx.current.arc(
      event.clientX * window.devicePixelRatio,
      event.clientY * window.devicePixelRatio,
      DRAW_RADIUS * window.devicePixelRatio,
      0,
      2 * Math.PI
    );
    offscreenCtx.current.fill();

    redrawCanvas.current = true;
  }, []);

  const handleRedraw = useCallback(() => {
    if (redrawCanvas.current && ctx.current && offscreenCtx.current) {
      ctx.current.clearRect(
        0,
        0,
        ctx.current.canvas.width,
        ctx.current.canvas.height
      );
      ctx.current.drawImage(offscreenCtx.current.canvas, 0, 0);

      redrawCanvas.current = false;
    }

    rafHandle.current = requestAnimationFrame(handleRedraw);
  }, []);

  const handleResize = useCallback(() => {
    if (!ctx.current || !offscreenCtx.current) return;

    const imageData = offscreenCtx.current.getImageData(
      0,
      0,
      ctx.current.canvas.width,
      ctx.current.canvas.height
    );

    setCanvasSize(offscreenCtx.current, document);
    setCanvasSize(ctx.current, document);
    setCanvasBlur(ctx.current);

    offscreenCtx.current.putImageData(imageData, 0, 0);
    ctx.current.drawImage(offscreenCtx.current.canvas, 0, 0);
  }, []);

  useEffect(() => {
    if (!ctx.current) return;

    const offscreenCanvas = document.createElement('canvas');
    offscreenCtx.current = offscreenCanvas.getContext('2d');
    if (!offscreenCtx.current) return;

    setCanvasSize(offscreenCtx.current, document);
    setCanvasSize(ctx.current, document);
    setCanvasBlur(ctx.current);

    document.body.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    rafHandle.current = requestAnimationFrame(handleRedraw);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      rafHandle.current && cancelAnimationFrame(rafHandle.current);
    };
  }, [handleMouseMove, handleResize, handleRedraw]);

  return (
    <canvas
      ref={(node) => {
        if (!node) return;
        ctx.current = node?.getContext('2d');
      }}
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}

export default CanvasBackground;
