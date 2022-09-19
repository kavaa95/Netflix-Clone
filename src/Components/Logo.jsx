import React from 'react';
import { Box } from '@mui/material';
import SmLogo from './Assets/netflix.png';
import LgLogo from './Assets/Netflix-logo-red-black.png';
function Logo() {
  return (
    <div>
      <Box
        sx={{
          display: { xs: 'block', sm: 'none', md: 'none' },
        }}
      >
        <img src={SmLogo} style={{ height: '40px' }} alt="new" />
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <img src={LgLogo} style={{ height: '40px' }} alt="new" />
      </Box>
    </div>
  );
}

export default Logo;
