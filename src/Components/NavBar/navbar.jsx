import React, { useContext } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext } from '../App';
import Logo from '../Logo';

function Navbar() {
  const value = useContext(UserContext);
  const { drawerWidth, mobileOpen, setMobileOpen } = value;

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon size="large" />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Logo />
          </Box>
          <Button variant="solid" size="lg">
            <Typography variant="h6" component="div">
              LOGIN
            </Typography>
          </Button>

          <AccountCircle fontSize="large" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
