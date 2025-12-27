
import Autocomplete from "./autocomplete"; 
import './App.css';
import bg from './assets/background.png';
function App() {
  const locations = [ "New York", "London", "Tokyo", "Paris", "Sydney", "Dubai", "Toronto", "Berlin", "Singapore", "Los Angeles" ]; 
  return (
    <div className="App">
      <div className="Home">
        <div id="catchPhrase">
          <h1>Find the Right </h1>
          <h1>Home for Your Family</h1>
          <p>We have more than 745,000 apartments, place & plot.</p>
        </div>
        <div className="searchClass">
          <div>
            <label>I'm looking to...</label>
            <Autocomplete data = {locations}/>
          </div>
          <div>
            <label>Location</label>
            <Autocomplete data = {locations}/>
          </div>
          <div>
            <label>Price Range</label>
            <Autocomplete data = {locations}/>
          </div>
          <div id="searchButton"><button >Search</button></div>
      
        </div>
      </div>
    </div>
  );
}

export default App;
