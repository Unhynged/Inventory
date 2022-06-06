import React from "react";
import { PropTypes } from "prop-types";

class Info extends React.Component {
  // Inside info here, going to start by defining what I want held in my state.

  constructor(props) {
    super(props);
    this.state = {
      // make this equal to a JavaScript object. Inside you define your keys, your state values and then what their default values are going to be.
      count: 0,
    }; // this is the only thing that we're going to be storing in our state and the reason we know that is because we defined that in the constructor.
    // this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    this.setState({ // any of the fields that you pass in here are kind of merged with the existing state. Thus if you just pass count, it will just update count. Any of the other state values will stay the same.
        count: this.state.count + 1
    });
  } // What happens by default when I define this function here inside of the class is it does not have access to the "this" keyword. To give it access to the "this" keyword you need to actually bind it into this class because right now this is just a function as defined insidef of this class. Doesn't mean it's actually a part of this kind of class instance, and so it can't access this. Two ways to fix this. First way is to define an arrow function inside <button onClick={() => this.buttonPressed()}> . The alternative is to go up to the constructor and you can say this.buttonPressed = this.buttonPressed.bind(this);

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.buttonPressed()}>Click Me!</button>
      </div>
    );
  }
} // Recommended to use the arrow function, the reason why the arrow function works is because since this is a function defined inside of the render method which is already attached to this class, it has access to this keyword.

export default Info;

// Classed based component state.
