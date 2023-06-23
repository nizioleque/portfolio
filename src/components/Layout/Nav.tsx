import { Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { links } from '../../constants';
import Logo from './Logo';
import NavButton from './NavButton';

function Nav() {
  const router = useRouter();

  return (
    <Stack alignItems='center' spacing={8}>
      <Link href='/' legacyBehavior passHref>
        <Logo active={router.pathname === '/'} />
      </Link>

      <Stack alignItems='center' spacing={4}>
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
