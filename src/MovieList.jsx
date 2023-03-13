import { Movie } from "./Movie";
import { AddMovie } from './AddMovie';
import { useState,useEffect} from 'react';
import { buttonBaseClasses } from "@mui/material";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



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
          // <button onClick={()=>deleteMovie(mv.id)}>Delete</button>
          deleteButton={<IconButton  sx={{marginLeft:"auto"}}color="error" onClick={()=>deleteMovie(mv.id)} aria-label="delete" >
             <DeleteIcon   />
           </IconButton>} 
          />))}
      </div>
    </div>
//   <IconButton aria-label="delete" size="small">
//   <DeleteIcon fontSize="inherit" />
// </IconButton>
  );
}
