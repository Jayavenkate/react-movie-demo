import './App.css';
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import { TicTacToe } from './TicTacToe';
import { Routes, Route, Link } from "react-router-dom";
import { NotFound } from './NotFound';
import { Home } from './Home';

export default function App(){
  return(
    <div>
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/movies">MovieList</Link>
          </li>
          <li>
          <Link to="/color-game">AddColor</Link>
          </li>
          <li>
          <Link to="/tic-tac-toe">TicTacToe</Link>
          </li>

        </ul>
      </nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}


