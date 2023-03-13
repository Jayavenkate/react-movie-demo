import { Movie } from "./Movie";
import { AddMovie } from './AddMovie';
import { useState,useEffect} from 'react';
import { buttonBaseClasses } from "@mui/material";




export function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const getMovies=()=>{
    fetch("https://63dfc41859bccf35dab93fd4.mockapi.io/movies",{
      method:"GET"
    })
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs));
  }
  useEffect(()=>getMovies(),[]);

  const deleteMovie= async(id)=>{
    console.log("Deleting movies...",id);
    // fetch(`https://63dfc41859bccf35dab93fd4.mockapi.io/movies/${id}`,{
    //   method:"DELETE"
    // }).then(()=>getMovies());
    await fetch(`https://63dfc41859bccf35dab93fd4.mockapi.io/movies/${id}`,{
      method:"DELETE"
    })
    getMovies();
  }
   return (
    <div>
      <div className='movie-list'>
        {movieList.map((mv) => (
          <Movie key={mv.id} movie={mv} id={mv.id}
          deleteButton={<button onClick={()=>deleteMovie(mv.id)}>Delete</button>} />))}
      </div>
    </div>

  );
}
