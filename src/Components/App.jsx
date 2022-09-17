import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <CssBaseline />

      <main>
        <Routes>
          <Route exact path="/" element={<h1>Movies</h1>} />
          <Route
            exact
            path="/movies/:id"
            element={<h1>Movies Imformation</h1>}
          />
          <Route exact path="/actors/:id" element={<h1>Actors</h1>} />
          <Route exact path="/profile/:id" element={<h1>Profile</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
