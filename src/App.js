import './App.css';
import Info from "./Info.js";
import { PropTypes } from "prop-types";
import { useState } from "react";

function App() { 
  return (
    <div className="App">
      <Info/>
      <ButtonState/>
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState(""); 
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("We now have a title!");
  }

  const updateCounterClicked = () => {
    setCount(count + 1);
  }

  return ( // title and count in "Data" are both state, they are then passed in the props to this component and what happens is whenever you have the state updating it's rerendering this entire thing. The props here are going to change based on what the state is and that means we're going to show that in the components, it's going to have those updated values. 
    <div>
      <Data title={title} count={count} /> 
      <button onClick={updateTitleClicked}>Update Title</button> 
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  ); 
} 

function Data(props) { // This will take in some props. Remember, if we want to pass information down to components from one of the upper level components we can pass that through the props. 
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>)
}

export default App;

// What happens when we want to pass this state down to components that are different components. 