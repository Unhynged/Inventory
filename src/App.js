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
  const [title, setTitle] = useState(""); // You could name these whatever you want but it's good practice to have set followed by the name of the state variable you're going to be updating. 
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("We now have a title!");
  }

  const updateCounterClicked = () => {
    setCount(count + 1);
  }

  return ( // This component <--- v
    <div>
      <p>Title: {title}</p>
      <p>Counter: {count}</p>
      <button onClick={updateTitleClicked}>Update Title</button> 
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  ); // This component <--- ^
} // Whenever you want to call a JavaScript function, when a button is clicked is you need to use onClick={}. What you need to do is pass a function that you want to be called when this button is clicked. So in this case, the function that I want to be called is setTitle and setCount but these functions need to be called with arguments and those arguments are going to be what I want to set the title to or set the count to. 

// We want to have some state, this state is going to pertain to this title and this counter and when we press these buttons we want to update the state, we want to change the state. In React, we use hooks. A hook is a function thats provided by react that you can use to hook into and modify it's behaviour. To do this we have to import something that allow us to use state. import { useState } from "react"; 
// Whenever you want to setup a state in a functional component is you create a constant e.g. const [] and you define two values. First you define the actual variable thats going to store your state and then you define the name of the function you're going to use to update this state or update this variable. In this case, title then setTitle < const [title, setTitle] = useState("") > and this'll be equal to useState. inside of useState you define the default state. If I want to modify title I use the setTitle function. 
// Whenever you update the state of a component, it tells that component to rerender itself on the screen. So only that component and any children components its rendering but not the entire application. The idea here is that inside of that button state, as soon as either of these states are modified, this entire component will rerender itself. Only the individual component is going to rerender everything that gets returned. If you have any children components inside of here, all of those will be rerendered. 
// This gets into performance, e.g. if all of your state is being stored in say an upper level component like "App" then that means whenever that state is changed, its going to rerender the entire application, which is obviously going to take longer than just re rendering one component at a time. 

export default App;