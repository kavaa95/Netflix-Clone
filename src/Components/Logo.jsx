import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <img src={SmLogo} style={{ height: '40px' }} alt="new" />
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <Link to="/">
          <img src={LgLogo} style={{ height: '40px' }} alt="new" />
        </Link>
      </Box>
    </div>
  );
}

export default Logo;
