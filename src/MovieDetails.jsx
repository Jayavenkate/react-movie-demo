import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { API } from "./global";

export function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  // const movie = movieList[id];
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, []);
  console.log(movie);
  const styles = {
    color: movie.rating > 8.5 ? "crimson" : "green",
  };
  return (
    <div>
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="Varisu Movie Review Canada | Thalapathy Vijay | Rashmika | Sarathkumar | Prakash Raj|வாரிசு |Vamshi"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div className="movie-detail-container">
        <div className="name-rating">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
