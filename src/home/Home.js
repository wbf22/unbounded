import './Home.css';
import Button from '../util/Button';
import imageSrc from '../util/Monet_-_Impression,_Sunrise.jpg';
import Paint from '../paint/Paint';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div class="App">

            <div class="Main-Page-Content">

                <b class="Big-Title">
                    Welcome to Monet tools!
                </b>

                <Link  to="/paint" class="tool-button paint-button">
                    <b>Paint</b>
                </Link>

                <div class="tool-button pallete-button" >
                    <b>Color Pallete Generator</b>
                </div>

            </div>

            <img class="monet_impression" src={imageSrc}  alt="logo" />
            
        </div>
    );
}

export default Home;
