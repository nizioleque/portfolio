import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface LinkButtonProps {
  children: ReactNode;
  icon: ReactNode;
  href: string;
}

function LinkButton({ children, icon, href }: LinkButtonProps) {
  return (
    <Button
      component='a'
      href={href}
      target='_blank'
      variant='text'
      startIcon={icon}
      sx={{
        borderWidth: '3px !important',
        textTransform: 'none',
        fontSize: '1.25rem',
        fontWeight: 400,
        color: 'text.primary',
        borderRadius: 20,
        paddingX: 2,
        '& .MuiSvgIcon-root': {
          marginRight: 0.5,
          color: 'primary.main',
          fontSize: '2rem !important',
        },
      }}
    >
      {children}
    </Button>
  );
}

export default LinkButton;
