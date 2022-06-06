import React from "react"; // this makes and the class Info helps make a class based component. We use class Info and extend the React.Component. Since we're extending react we need to say import React from "react". This is the default export and so that means we can import it this way, if it wasn't, we would need to surround it in our { curly braces }.
import { PropTypes } from "prop-types";

class Info extends React.Component {
  // we then define a render method and inside the method we write what we want to be returned to render on the screen. By default the return statement from a functional component is just this render method, whereas when you create a class, you need to define manually the render method.
  constructor(props) {
      super(props); // To do default props for our class-based components, involves defining a constructor(props) { super(props);} It's very important that you call this super constructor here. What this is doing is calling the constructor of the class that you are inheriting from, in this case, react.component ; the reason you need to do this is because React.Component has it's own constructor. That constructor is going to set up the actual component and need to manually call it when you go ahead and override the constructor inside the of the child class and you need to make sure you pass through the same props that are accepted in the constructor(props) to the super(props) so that it will do everything properly. Inside of the class based component, it's recommended you do not decompose your props. 
      console.log(props);
  }
  
  render() {
    const title = this.props.title; // Whenever you are not inside of the constructor and you want to access the props you need to use the "this" keyword. These work the exact same as they do in the functional components, they are read only, you cannot modify them. 
    const showTitle = true;

    if (showTitle) {
      return (
        <div>
          <h1>{title}</h1>
          <p>Manage your stuff.</p>
        </div>
      );
    } else {
      return <p>empty</p>;
    }
  }
}

Info.defaultProps = {
    title: "Default",
}

Info.propTypes = {
    title: PropTypes.string,
}
export default Info;

// This has made a class-based component. You can see that it works the exact same as a functional component, except we have to write more. We say class info, extends react.component, we have to define a render method and then it's just a little bit different syntax. That's really the main difference between a functional and class-based component, A little bit of a different syntax. If you're getting into professional react development, then you can make the argument, which is better. React at the moment is recommending using functional components. Unless you have a ton of state in which they are saying you should use class-based component.
