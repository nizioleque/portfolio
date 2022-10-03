import * as convert from 'color-convert';

export function easeInOutGradient(direction: string, color: string): string {
  const colorRgb = convert.hex.rgb(color);
  return `linear-gradient(
    ${direction}, 
    rgb(${colorRgb.join(' ')} / 1) 0%,
    rgb(${colorRgb.join(' ')} / 0.978) 9.5%,
    rgb(${colorRgb.join(' ')} / 0.925) 17.7%,
    rgb(${colorRgb.join(' ')} / 0.857) 24.7%,
    rgb(${colorRgb.join(' ')} / 0.781) 31%,
    rgb(${colorRgb.join(' ')} / 0.701) 36.8%,
    rgb(${colorRgb.join(' ')} / 0.62) 42.3%,
    rgb(${colorRgb.join(' ')} / 0.538) 47.6%,
    rgb(${colorRgb.join(' ')} / 0.455) 52.9%,
    rgb(${colorRgb.join(' ')} / 0.373) 58.2%,
    rgb(${colorRgb.join(' ')} / 0.291) 63.7%,
    rgb(${colorRgb.join(' ')} / 0.212) 69.5%,
    rgb(${colorRgb.join(' ')} / 0.138) 75.8%,
    rgb(${colorRgb.join(' ')} / 0.07) 82.9%,
    rgb(${colorRgb.join(' ')} / 0.019) 91.2%,
    rgb(${colorRgb.join(' ')} / 0) 100%) `;
}
