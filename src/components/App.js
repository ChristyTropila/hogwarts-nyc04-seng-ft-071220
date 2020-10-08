import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from './HogContainer'

class App extends Component {

state={
  pigData: hogs
}


  render() {
    console.log(hogs)
    return (
      <div className="App">
        <Nav />
        {/* <HelloWorld /> */}
        <HogContainer pigData={this.state.pigData}/>
      </div>
    );
  }
}

export default App;
