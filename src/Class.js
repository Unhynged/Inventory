import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("mounted!");
  }

  componentDidUpdate() {
    console.log("updated!");
  }

  componentWillUnmount() {
    console.log("cleanup");
  }

  clickedButton() {
    this.setState({ count: this.state.count + 1 });
    console.log("Clicked!");
    this.props.destroy(false);
  }

  render() {
    return (
      <div>
        <p>Clicked: {this.state.count}</p>
        <button
          className="btn btn-primary"
          onClick={() => this.clickedButton()}
        >
          Click Me!
        </button>
      </div>
    );
  }
}
