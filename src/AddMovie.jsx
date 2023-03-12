import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setmovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  return (
    <div className='add-movie'>
      <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
      <TextField onChange={(event) => setPoster(event.target.value)} label='Poster' variant="outlined" />
      <TextField onChange={(event) => setRating(event.target.value)} label='Rating' variant="outlined" />
      <TextField onChange={(event) => setSummary(event.target.value)} label='Summary' variant="outlined" />
      <TextField onChange={(event) => setTrailer(event.target.value)} label='Trailer' variant="outlined" />


      <Button onClick={() => {
        const newMovie = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary,
          trailer:trailer,
        };
        setmovieList([...movieList, newMovie]);
      }} variant="contained">Add Movie</Button>
    </div>
  );
}
