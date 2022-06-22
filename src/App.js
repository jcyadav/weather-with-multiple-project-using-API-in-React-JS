import './App.css';
import WeatherPage from './components/WeatherPage';
import Showprofile from './components/Showprofile';
import SearchImage from './components/SearchImage';
import Todo from './components/Todo';
import Home from './components/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="weatherpage" element={<WeatherPage />} />
      <Route path="showprofile" element={<Showprofile />} />
      <Route path="todolist" element={<Todo/>}/>
      <Route path="searchImage" element={<SearchImage/>}/>
    </Routes>
    <div><Footer/></div>
    </div>
  );
}

export default App;
