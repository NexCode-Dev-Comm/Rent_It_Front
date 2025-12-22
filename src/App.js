
import Autocomplete from "./autocomplete"; 
import './App.css';
function App() {
  const locations = [ "New York", "London", "Tokyo", "Paris", "Sydney", "Dubai", "Toronto", "Berlin", "Singapore", "Los Angeles" ]; 
  return (
    <div className="App">
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
        <label>I'm looking to...</label>
        <Autocomplete data = {locations}/>
      </div>
      <div>
        <label>I'm looking to...</label>
        <Autocomplete data = {locations}/>
      </div>
      <div><button>Search</button></div>
      
      </div>
    </div>
  );
}

export default App;
