import { Box, BoxProps } from '@mui/material';
import React from 'react';

function BoxFlex(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={{ display: 'flex', alignItems: 'center', gap: 2, ...props.sx }}
    />
  );
}

export default BoxFlex;
