import './App.css';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MovieList } from './MovieList';

import { Routes, Route,  useNavigate, Navigate } from "react-router-dom";
import { NotFound } from './NotFound';
import { Home } from './Home';
import { AddMovie } from './AddMovie';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from './MovieDetails';
import { EditMovie } from './EditMovie';

export default function App() {

  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgstyles = {
    borderRadius: "0px",
    minHeight: "100vh"
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={bgstyles} elevation={4} >

        <div className='App'>
          <AppBar position="static">
            <Toolbar>
              <Button onClick={() => navigate("/")} color="inherit">Home</Button>
              <Button onClick={() => navigate("/movies")} color="inherit">Movies</Button>


              <Button onClick={() => navigate("/movies/add")} color="inherit">AddMovie</Button>
              {/* <Button onClick={() => navigate("/basic-form")} color="inherit">BasicForm</Button> */}

              <Button sx={{ marginLeft: 'auto' }} onClick={() => setMode(mode == "light" ? "dark" : "light")} color="inherit"
                startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              >{mode === "light" ? "dark" : "light"} Mode</Button>


            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filims" element={<Navigate replace to="/movies" />} />

            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/edit/:id" element={<EditMovie />} />
            <Route path="/movies/add" element={<AddMovie />} />
           <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

