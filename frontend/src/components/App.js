import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import Registration from "./Registration"
export default class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        <HomePage/>
        <Registration/>
      </>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);