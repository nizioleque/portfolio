import { Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import NavButton from './NavButton';

const links = [
  { href: '/all-projects', label: 'All projects' },
  { href: '/about', label: 'About' },
  { href: '/playground', label: 'Playground' },
  { href: '/contact', label: 'Contact' },
];

function Nav() {
  const router = useRouter();

  return (
    <Stack alignItems='center' spacing={8}>
      <Link href='/' legacyBehavior passHref>
        <Logo active={router.pathname === '/'} />
      </Link>

      <Stack alignItems='center' spacing={4}>
        {links.map((link) => (
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
