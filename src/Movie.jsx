import { useState } from 'react';
import { Counter } from "./Counter";

export function Movie({ movie }) {
  const styles = {
    color: movie.rating > 8.5 ? "crimson" : "green",
  };
  const [show, setShow] = useState(true);
  // const summaryStyles={
  //   display: show? "block":"none",
  // }
  return (
    <div className="movie-container">
      <img className='movie-poster' src={movie.poster} alt={movie.name} />
      <div className='name-rating'>
        <h2 className="movie-name">{movie.name}</h2>
        <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle summary</button>
      {/* <p  style ={summaryStyles}className='movie-summary'>{movie.summary}</p> */}
      {show ? <p className='movie-summary'>{movie.summary}</p> : null}

      <Counter />
    </div>
  );
}
