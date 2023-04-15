import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import { useState, useEffect } from "react";
import { buttonBaseClasses } from "@mui/material";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  useEffect(() => getMovies(), []);

  const deleteMovie = async (id) => {
    console.log("Deleting movies...", id);
    // fetch(`${API}/movies/${id}`,{
    //   method:"DELETE"
    // }).then(()=>getMovies());
    await fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    });
    getMovies();
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            // <button onClick={()=>deleteMovie(mv.id)}>Delete</button>
            deleteButton={
              <IconButton
                sx={{ marginLeft: "auto" }}
                color="error"
                onClick={() => deleteMovie(mv.id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                sx={{ marginLeft: "auto" }}
                color="secondary"
                onClick={() => navigate(`/movies/edit/${mv.id}`)}
                aria-label="delete"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
