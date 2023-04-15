// export function EditMovie() {
//   return (
//     <div>
//       <h1>Editing Movie...</h1>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./global";

export function EditMovie() {
  const { id } = useParams();
  // const movie = movieList[id];
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, []);
  console.log(movie);
  return movie ? <EditMovieForm movie={movie} /> : <h2>Loading...</h2>;

  function EditMovieForm({ movie }) {
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");
    const navigate = useNavigate();
    const addMovie = () => {
      const newMovie = {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      };
      console.log(newMovie);
      fetch(`${API}/movies`, {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: { "Content-Type": "application/json" },
      });
      navigate("/movies");
    };
    return (
      <div className="add-movie">
        <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="outlined"
        />
        {movie.name}
        <TextField
          onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          variant="outlined"
        />
        {movie.poster}
        <TextField
          onChange={(event) => setRating(event.target.value)}
          label="Rating"
          variant="outlined"
        />
        {movie.rating}
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="outlined"
        />
        {movie.summary}
        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          label="Trailer"
          variant="outlined"
        />
        {movie.trailer}
        <Button onClick={addMovie} variant="contained">
          Edit Movie
        </Button>
      </div>
    );
  }
}
