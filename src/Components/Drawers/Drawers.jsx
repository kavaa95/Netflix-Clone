import React, { useContext } from 'react';
import { Box, Drawer } from '@mui/material';
import { SideBar } from '../index';
import { UserContext } from '../App';

function Drawers() {
  const value = useContext(UserContext);
  const { drawerWidth, mobileOpen, setMobileOpen } = value;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(!mobileOpen)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <SideBar />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        <SideBar />
      </Drawer>
    </Box>
  );
}

export default Drawers;
