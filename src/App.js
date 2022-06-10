import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import { useState } from "react";
import ItemsDisplay from "./ItemsDisplay";

function App() {
  const [filters, setFilters] = useState({}); // We already have our filters here, We've set this up already such that when you press the search button,it passes the filters back to app.js, so the hard part is already done. What we need to do here is use these filters to actually filter our data. We would prefer to not have to pass the filters to this component (ItemsDisplay.js) and to instead filter the data inside of this app component and only pass the data that I want displayed to the ItemDisplay component. It can be preferred not to have a ton of prompts being passed around because it gets confusing and instead use the prompt where we have it. E.g. Here we have filters, which is a state and so what we can do is use it to filter the data and then can pass my filter data as items. So rather than passing all of the items then filtering it, we're just passing the items we actually want to display. 
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);  
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  const filterData = (data) => {
    const filteredData = []; // defining our empty list

    if (!filters.name) {
      return data;
    } // We're checking if we've called or set our filters already.

    for (const item of data) {
        if (filters.name !== "" && item.name !== filters.name) {
          continue;
        }

        if (filters.price !== 0 && item.price > filters.price) {
          continue;
        }

        if (filters.type !== "" && item.type !== filters.type) {
          continue;
        }

        if (filters.brand !== "" && item.brand !== filters.brand) {
          continue;
        }

        filteredData.push(item);
      }

    return filteredData;
  } // What this is going to return will be an array with all of my filter data, so all the items that I actually want to display. Before we apply the filter, we want to make sure its not its default value because we don't want to filter based on an empty string. Data will just be a list. What we'll do here is we'll call <ItemsDisplay items={filterData(data["items"])} /> and we'll pass a list of the items we want to filter. So we'll pass data and the key items because we're holding an actual object here as the key items and the key items has an array. Thus we pass the array to filterData and then we're going to loop through it, so go through all of the items. Then we check if the field in our filter is not the default value, and if it's not then we'll apply that filter. !== does not equal. So we're going to check all of the filters, the first thing we're checking for is to make sure they're not equal to their default value, if they're not equal to their default value, then we'll actually check if this filter applies to the object that we are on, and if it does not, then that means we'll continue. Only if we get down to the very bottom do we actually push this item into the filter data, so it has to pass all four of these checks before it gets in. If any one of these checks does come up true, that means we won't add this item into the filter data. 

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}

export default App;
