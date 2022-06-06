import './App.css';
import SearchBar from "./SearchBar";
import { useState } from "react";

function App() { 
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  }

  return (
    <div className="App">
      <SearchBar callback={updateData}/>
      <p>{ "data" in data ? data["data"] : "No Data to display"}</p>
    </div>
  );
} // Now in the search bar, we can access from the props this parameter called callback. We can call that function and what that function will do is then update the data, so we will change the state in the component, and didn't need to change any of the props in SearchBar.js; we just called a function that then change the state on the component that rendered us. 

export default App;
