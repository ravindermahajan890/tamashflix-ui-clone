import { Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

const Logo = () => (
  <Box display="flex" alignItems="center" gap="12px">
    <Avatar alt="TAMASHFLIXH" src="/tamashflix.svg" />
    <Typography variant="h5" color="accent.main">
      TAMASHFLIX
    </Typography>
  </Box>
);

export default Logo;
