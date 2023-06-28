import { useMediaQuery, useTheme } from '@mui/material';

export default function useResponsiveLayout() {
  const theme = useTheme();

  const mobileQuery = theme.breakpoints.down('tablet');
  const isMobile = useMediaQuery(mobileQuery);

  const tabletQuery = theme.breakpoints.down('desktop');
  const isTablet = useMediaQuery(tabletQuery);

  const desktopQuery = theme.breakpoints.up('desktop');
  const isDesktop = useMediaQuery(desktopQuery);

  return {
    mobileQuery,
    tabletQuery,
    desktopQuery,

    isMobile,
    isTablet,
    isDesktop,
  };
}
