import './App.css';
import Button from './util/Button';
import imageSrc from './util/Monet_-_Impression,_Sunrise.jpg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Paint from './paint/Paint';
import Home from './home/Home';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/paint" element={<Paint />} />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;

