
import './App.css';
import {Routes} from 'react-router-dom'
import {Route} from "react-router-dom"
import Header from './Components/Header';
import Menu from './Components/Menu';
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      {/* header will display on all pages */}
      <Header />
      <Routes>
        {/* linking to different routes */}
      <Route path="/" exact={true} element={<Menu />}/>
      <Route path="/game" element={<Game />}/>
      </Routes>
    </div>
  );
}

export default App;
