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

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item) // must convert to string
    };
    fetch("http://localhost:3000/items", requestOptions); // what fetch does is allow you to send a request to a URL. This is the most basic way to do this in react. Inside the parentheses you type the URL you want to send the request to. The reason typed "http://localhost:3000/items" is because by default, what will happen is when we run the json-server we want to access the items or resource, as the key here is items. GET POST PUT DELETE . 

    items.push(item);
    setData({ items: items });
    console.log(data);
  }; // Fetch and HTTP Requests: this function here addItemToData is add the item to our memory, computers RAM. This is temporary, as soon as we turn off the computer or we stop the web server, all these items go away. To make this persistant we need to send a request to our server and to tell the server to store this item to our db.json . What we want to send here is the item that we want to add to the database. 

  const filterData = (data) => {
    const filteredData = []; 

    if (!filters.name) {
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
  } 

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

// We want to create a database as the items we're creating are just being stored by react and the items are disappearing on a refresh.
//
// HTTP - Hypertext transfer protocol
//
// Usually when you're going to have a database and you're going to have your front-end adding something to the databased, looking at stuff in the database, you create an API, an application programming interface. You'll usually create a restful API; rest stands for Representational State Transfer. In this case we don't want to create our own API, make our own separate server, we don't want to write the back end of this application, thats not the point of this tutorial. 
//
// Instead we're going to us a JSON server. NPM package, allows us to create a mock rest api with simply one file, a json file. 
//
// npm install -g json-server
//
// The reason you need to do this (-g , global) is so that you can run this server from anywhere, you don't have to be necessarily be inside this inventory folder.
//
// JSON stands for Javascript Object Notation,so whatever you would do in javascript you could write here in terms of creating an object. You'll have to make sure you have double quotations surrounding all your strings or key bouts.
//
// {
//    "items": []
// }
//
// Running the JSON Server
//
// Go to Terminal, in the directory where you have this db.json file located.
// > json-server db.json
//
// Now we have a rest api running that is going to allow
//
// Fetch and HTTP Requests
//
// Fetch and HTTP Requests: this function here addItemToData is add the item to our memory, computers RAM. This is temporary, as soon as we turn off the computer or we stop the web server, all these items go away. To make this persistant we need to send a request to our server and to tell the server to store this item to our db.json . What we want to send here is the item that we want to add to the database. 
//
// what fetch does is allow you to send a request to a URL. This is the most basic way to do this in react. Inside the parentheses you type the URL you want to send the request to. The reason typed "http://localhost:3000/items" is because by default, what will happen is when we run the json-server we want to access the items or resource, as the key here is items.
//
// HTTP Methods
//
// Whenever you're accessing a web resource, website, you're having an http request sent to the server running that website and then that server is going to send you a response that contains the data that you asked for. Most often the data you're getting is the html that makes up a page. Sending a GET request to the servers to get the html that makes up that webpage (90% of the time). 
//
// GET POST PUT DELETE
//
// Adding items to the database
// headers: {
//    "Content-Type": "application/json" 
// },
// body: JSON.stringify(item)
//
//
//
//
// A header is essentially extra information that you're passing along to the server, we're telling the server hey the data we're going to pass here is going to be in the application/json, so get ready for it, we're giving it to you. You need to have this header, you can have more than one header. 
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