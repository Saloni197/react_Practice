import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import { MovieContext } from './components/MovieContext';

function App() {

  
  return (
    <MovieContext>
    <div className="App">
     <Nav/>
     <MovieList/>
     
    
    </div>
    </MovieContext>
  );
}

export default App;
