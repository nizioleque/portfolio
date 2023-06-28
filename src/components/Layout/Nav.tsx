import { Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { links } from '../../constants';
import useResponsiveLayout from '../../hooks/useResponsiveLayout';
import Logo from './Logo';
import NavButton from './NavButton';

function Nav() {
  const router = useRouter();

  const { isTablet } = useResponsiveLayout();

  return (
    <Stack
      sx={{
        alignItems: 'center',
        gap: 8,
        paddingX: 5,
      }}
    >
      <Link href='/' legacyBehavior passHref>
        <Logo
          active={router.pathname === '/'}
          fontSize={isTablet ? '4rem' : undefined}
        />
      </Link>

      <Stack
        sx={{
          alignItems: 'center',
          gap: 4,
        }}
      >
        {links
          .filter((link) => !link.hidden)
          .map((link) => (
            <Link key={link.href} href={link.href} legacyBehavior passHref>
              <NavButton active={router.pathname === link.href}>
                {link.label}
              </NavButton>
            </Link>
          ))}
      </Stack>
    </Stack>
  );
}

export default Nav;
