import useResponsiveLayout from './useResponsiveLayout';

export default function useCardSize() {
  const { isDesktop } = useResponsiveLayout();

  return isDesktop ? 250 : 250 * 0.82;
}
