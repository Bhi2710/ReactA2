import './App.css'
import dp from '../src/airbnb.png';

function App() {
  return (
    <div className="App">
      <div className="main">
        <p>The Evolution of</p> 
        <p>Airbnb's Frontend</p>
        <span>@spikebrehm</span>
        <div className="image">
          <img src={dp} alt=""></img>
        </div>
        <div className="botoom">
          <span>airbnb</span>
        </div> 
      </div>
    </div>
  );
}

export default App;
