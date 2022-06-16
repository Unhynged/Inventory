import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import { useState } from "react";
import ItemsDisplay from "./ItemsDisplay";
import Test from "./Class";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });
  const [showTest, setShowTest] = useState(true);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

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
  };

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
      {showTest ? <Test destroy={setShowTest}/> : null}
    </div>
  );
}

export default App;

// Lifecycle methods are what you're going to use for class-based components.
//
// Hooks specifically, the use effect hook, what you're going to use for functional components.
//
// The point of these is to allow some more advanced behaviour for your components; so essentially right when your component loads can you run something. Or when your component is being destroyed so longer rendered on the screen, can you run a clean up operation. 
//
// CLASS-BASED COMPONENT SETUP
//------------------------------- 
// Created class.js to make the class-based component. Import React from "react";
//------------------------------
// export default class TEST extends React.Component {
//    constructor(props) {
//        this.state = {
//            count: 0
//        };
//    }
//-------------------------------------------------
//  clickedButton() {
//      this.setState({ count: this.state.count + 1});
//      console.log("clicked!");
//  }
//
//    render() {
//        <div>
//            <p>Clicked: {this.state.count}</p>
//            <button className="btn btn-primary" onCick={() => this.   clickedButton()}>Click Me!</button>
//        </div>;
//    }  
// 
//----------------------------------
//
// LIFE CYCLE METHODS
//
// componentDidMount() {
//    conosle.log("mounted!")
// }
//
// MOUNT
// Mounting is the process of outputting the virtual representation of a component into the final UI representation. In a browser that would mean ouputting a React Element into an actual DOM element. 
//
// Essentially this allows you to have an operation that you can perform right away once your component is rendered to the screen. 
//
// componentDidUpdate() {
//     console.log("updated!")
// }
//
// Called immediately after updating occurs.. Not called for the initial render. 
//
// componentWillUnmount() {
//      console.log("unmounted!")
// }
//
// This is before a component is to be destroyed or go away, this is a cleanup operation. 
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
//
//
//
//
//
//
//
//
//
