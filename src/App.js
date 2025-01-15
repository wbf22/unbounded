import './App.css';
import Button from './util/Button';
import imageSrc from './util/Monet_-_Impression,_Sunrise.jpg';

function App() {
  return (
    <div class="App">

        <div class="Main-Page-Content">

          <b class="Big-Title">
            Welcome to Monet tools!
          </b>

          <div class="tool-button paint-button" >
              <b>Paint</b>
          </div>

          <div class="tool-button pallete-button" >
              <b>Color Pallete Generator</b>
          </div>

        </div>

        <img class="monet_impression" src={imageSrc}  alt="logo" />
        
    </div>
  );
}

export default App;
