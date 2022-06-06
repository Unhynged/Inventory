import './App.css';
import Info from "./Info.js";

function App() { // Whenever you pass a number you need to put it in {} curly braces. As you can see in AddItem, we've added properties to the tag, as we can pass them to our own components. We just write the name of our property e.g. text="Tim" number={2} These are now properties of this tag. How do we access these properties? You need to go to AddItem() and define a parameter called props.
  return (
    <div className="App">
      <Info />
      <AddItem text="Tim" number={2}/> 
      <AddItem text="Joe" />
      <AddItem text="Test"></AddItem>
    </div>
  );
}

//function AddItem(props) { // Looking at the input tag here we can see what a prop might look like. We have "type", we have "value" and we have "id" and all these things change the behaviour or what the input tag looks like. We can use this props variable here to access all of the properties that are passed through and this by default is going to be a javascript object.
function AddItem({ text, number }) { // This is decomposing or deconstructing the javascript. This is going to look in that javascript object and assign any object or any field that's called text to this text variable and any field called number to this number variable. 
  //const value = props.text;
  const value = text;

  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={value} id="text-form"/> 
      <p>{number}</p>
    </form>
  );
}

export default App;
