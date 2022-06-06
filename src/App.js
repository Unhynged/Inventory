import './App.css';
import Info from "./Info.js";
import { PropTypes } from "prop-types"

function App() { // Whenever you pass a number you need to put it in {} curly braces. As you can see in AddItem, we've added properties to the tag, as we can pass them to our own components. We just write the name of our property e.g. text="Tim" number={2} These are now properties of this tag. How do we access these properties? You need to go to AddItem() and define a parameter called props.
  return (
    <div className="App">
      <Info/>
      <AddItem text="Tim" number={2}/> 
      <AddItem text="Joe" />
      <AddItem></AddItem>
    </div>
  );
}

function AddItem(props) { // Looking at the input tag here we can see what a prop might look like. We have "type", we have "value" and we have "id" and all these things change the behaviour or what the input tag looks like. We can use this props variable here to access all of the properties that are passed through and this by default is going to be a javascript object.
//function AddItem({ text, number }) { // This is decomposing or deconstructing the javascript. This is going to look in that javascript object and assign any object or any field that's called text to this text variable and any field called number to this number variable. You'd only want to do this if you only have a few props, it can get kind of messy if you are writing out hundreds of differen properties and decomposing all of them but this is a good way to extract the ones that you want, especially if you only have a few that you're looking for.
  const value = props.text;
  //const value = text;

  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={props.text} id="text-form"/> 
      <p>{props.number}</p>
    </form>
  );
}

AddItem.defaultProps = {
  number: 2,
  text: "default",
};

AddItem.propTypes = { // When using PropTypes need to import { PropTypes } from "prop-types" up top. 
  number: PropTypes.number,
  text: PropTypes.string,
}

export default App;

// props are read only values. That means you cannot change a property from inside a component that it is being passed to. 
// Sometimes you need to ensure there is a value for some prop. We can give a default value for this property so that if it is not passed we will use the default instead. E.g. function AddItem({ text, number = 4 }) { that's a way that you can do a default prop. Can also do AddItem.defaultProps = { number: 1,  };
// If we want to enforce or at least tell our user what type we are looking for for a specific prop, we can do that. 