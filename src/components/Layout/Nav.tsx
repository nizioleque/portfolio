import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { links } from '../../constants';
import { responsiveSize } from '../../theme/responsiveSize';
import Logo from './Logo';
import NavButton from './NavButton';

function Nav() {
  const router = useRouter();

  return (
    <Stack
      sx={{
        alignItems: 'center',
        ...responsiveSize(4, 0.65, 'gap'),
        '& #logo-container': responsiveSize(2, undefined, 'marginBottom'),
        paddingX: 3,
      }}
    >
      <Box id='logo-container'>
        <Link href='/' legacyBehavior passHref>
          <Logo active={router.pathname === '/'} />
        </Link>
      </Box>

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
  );
}

export default Nav;
