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
      <p>Name: {"name" in data ? data["name"] : "No Data to display"}</p>
      <p>Max Price: {"price" in data ? data["price"] : "No Data to display"}</p>
      <p>Type: {"type" in data ? data["name"] : "No Data to display"}</p>
      <p>Brand: {"brand" in data ? data["name"] : "No Data to display"}</p>
    </div>
  );
} // Now in the search bar, we can access from the props this parameter called callback. We can call that function and what that function will do is then update the data, so we will change the state in the component, and didn't need to change any of the props in SearchBar.js; we just called a function that then change the state on the component that rendered us. 

//So what we do is we pass a callback function so we can actually modify the state of a parent component from a child component. We pass the data as a parameter to this callback function and then this callback function use that data to update the state in this component and that caused this component to rerender and then display everything that is here. 

export default App;
