import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { PopularPage } from './pages/PopularPage';
import { SearchPage } from './pages/SearchPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { MovieDetails } from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={<PopularPage />} />
            <Route path='/popular' element={<PopularPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path="/:movieId" element={<MovieDetails />} />
          </Route>
        </Routes>
      <Footer />
    </div>
  );

}

export default App;
