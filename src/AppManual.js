import React from "react";
import {isEnabled} from "./FeatureManagement";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Feature Toggles Demo</h1> 
        <div>
              {(isEnabled("hello-world")) ? <h2> Hello world! </h2> : <p>You don't get Hello World</p> }
        </div>
        <div>
              {(isEnabled("goodbye-world")) ? <h2> Goodbye world! </h2> : <p>You don't get Goodbye World</p> }
        </div>
        <div>
              {(isEnabled("howAreYou-world")) ? <h2> How are you world? </h2> : <p>You don't get How Are you World</p> }
        </div>
      </div>
    );
  }
}

export default App;
