import React, { useState, createContext } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Profile, Navbar } from './index';
import Drawers from './Drawers/Drawers';

const drawerWidth = 240;

export const UserContext = createContext();
function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <UserContext.Provider value={{ drawerWidth, mobileOpen, setMobileOpen }}>
        <Navbar />
        <Drawers />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` }
          }}
        >
          <Toolbar />
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route exact path="/movies/:id" element={<MovieInformation />} />
            <Route exact path="/actors/:id" element={<Actors />} />
            <Route exact path="/profile/:id" element={<Profile />} />
          </Routes>
        </Box>
      </UserContext.Provider>
    </Box>
  );
}

export default App;
