import {
  Box,
  CssBaseline,
  Theme,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Logo from './Logo';

interface ProjectLayoutProps {
  children: ReactNode;
  hue: number;
}

function ProjectLayout({ children, hue }: ProjectLayoutProps) {
  const { pathname } = useRouter();

  if (pathname === '/') return <Box>{children}</Box>;

  const extendTheme = (theme: Theme) =>
    createTheme({
      ...theme,
      palette: {
        ...theme.palette,
        background: {
          default: `hsl(${hue}deg 16% 8%)`,
        },
      },
    });

  return (
    <ThemeProvider theme={extendTheme}>
      <CssBaseline enableColorScheme />
      <Box
        component='header'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingY: 3,
          backgroundColor: `hsl(${hue}deg 24% 14%)`,
        }}
      >
        <Link href='/' legacyBehavior passHref>
          <Logo fontSize='3rem' />
        </Link>
      </Box>
      <Box
        component='main'
        sx={{
          flex: 1,
          padding: 2,
          color: `hsl(${hue}deg 100% 96%)`,
          paddingTop: 5,

          '& > *': {
            width: '100%',
            maxWidth: 800,
            margin: '0 auto',
            marginBottom: 4,
          },
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default ProjectLayout;
