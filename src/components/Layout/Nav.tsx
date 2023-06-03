import { Stack } from '@mui/material';
import Link from 'next/link';
import Logo from '../Logo';

function Nav() {
  return (
    <Stack justifyContent='space-evenly' alignItems='center' height='100%'>
      <Link href='/all-projects'>All projects</Link>
      <Link href='/about'>About</Link>

      <Link href='/' legacyBehavior passHref>
        <Logo />
      </Link>

      <Link href='/playground'>Playground</Link>
      <Link href='/contact'>Contact</Link>
    </Stack>
  );
}

export default Nav;
