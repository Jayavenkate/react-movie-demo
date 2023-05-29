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

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);
  console.log(movie);
  return movie ? <EditMovieForm movie={movie} /> : <h2>Loading...</h2>;

  function EditMovieForm({ movie }) {
    const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);
    const [trailer, setTrailer] = useState(movie.trailer);
    const navigate = useNavigate();
    const addMovie = () => {
      const newMovie = {
        name: name,
        poster: poster,
        rating: rating,
        summary: summary,
        trailer: trailer,
      };
      console.log(newMovie);
      fetch(`${API}/movies/${movie.id}`, {
        method: "PUT",
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
          value={name}
        />

        <TextField
          onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          variant="outlined"
          value={poster}
        />

        <TextField
          onChange={(event) => setRating(event.target.value)}
          label="Rating"
          variant="outlined"
          value={rating}
        />

        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="outlined"
          value={summary}
        />

        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          label="Trailer"
          variant="outlined"
          value={trailer}
        />

        <Button onClick={addMovie} variant="contained">
          Edit Movie
        </Button>
      </div>
    );
  }
}
