import './App.css';
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import { useState } from "react";
import ItemsDisplay from "./ItemsDisplay";

function App() { 
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({items: items });
    console.log(data);
  };

  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilters}/>
      <ItemsDisplay items={ data["items"]} />
      <AddItem addItem={addItemToData} />
    </div>
  );
} 

export default App;

// Look at how we can display data, specifically inventory items and how we can add inventory items to our inventory management system.
//
// Creating the Add Item Component
// Simple input field, thats going to have a name, price, type and brand.
//
// Summary
// Inside of items display we're taking one prop, that prop is items. We return or render using map a bunch of separate components or divs to display this item.
// {props.items.map((item) => { })}
// This means now run whatever function we put inside of this map here and whatever it returns we're going to show that on the screen.
//
//
//
//
