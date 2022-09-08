import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import PopularMovies from './pages/PopularMovies';
import NowPlaying from './pages/NowPlaying';
import Upcoming from './pages/Upcoming';
import TopRatedMovies from './pages/TopRatedMovies';
import OnTv from './pages/OnTv';
import TopRatedTv from './pages/TopRatedTv';
import PopularTv from './pages/PopularTv';
import AiringToday from './pages/AiringToday';
import PopularPeople from './pages/PopularPeople'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='movies/popular' element={<PopularMovies/>} />
        <Route path='movies/now-playing' element={<NowPlaying/>} />
        <Route path='movies/upcoming' element={<Upcoming/>} />
        <Route path='movies/top-rated' element={<TopRatedMovies/>} />
        <Route path='tv/on-tv' element={<OnTv/>} />
        <Route path='tv/top-rated' element={<TopRatedTv/>} />
        <Route path='tv/popular' element={<PopularTv/>} />
        <Route path='tv/airing-today' element={<AiringToday/>} />
        <Route path='popular-people' element={<PopularPeople/>} />
      </Routes>
      

    </div>
  );
}

export default App;
