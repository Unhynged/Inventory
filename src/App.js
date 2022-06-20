import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import { useState, useEffect } from "react";
import ItemsDisplay from "./ItemsDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          const idx = items.indexOf(item); // this is going to look in the items array and find the index of the item that was passed and that index will be used to delete the item.
          items.splice(idx, 1);
          setData({ items: items });
        }
      }
    );
  }; // this response is not going to give us any data, it's not going to give anything to us. All we want to do here is check if this request that we sent was successful. We will get a response back that has a status code on it and we want to check that this status code is ok. If the status code is ok, that means we deleted the item successfully, if it's not ok, it means the item was not deleted.

  const addItemToData = (item) => {
    let items = data["items"];

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    items.push(item);
    setData({ items: items });
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name && !filters.price && !filters.type && !filters.brand) {
      return data;
    }

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
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay
          deleteItem={deleteItem}
          items={filterData(data["items"])}
        />
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

// DELETING ITEMS
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
