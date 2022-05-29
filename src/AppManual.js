import React from "react";
import {isEnabled} from "./FeatureManagement";
import './styles.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Feature Toggles Demo :)</h1> 
        <div>
              {(isEnabled("hello-world")) ? <h2 className="feature off" >Hello world! </h2> : <h2 className="feature off" >You don't get: Hello World!</h2>}
        </div>
        <div>
              {(isEnabled("goodbye-world")) ? <h2 className="feature off" > Goodbye world! </h2> : <h2 className="feature off" >You don't get Goodbye World!</h2> }
        </div>
        <div>
              {(isEnabled("howAreYou-world")) ? <h2 className="feature off" > How are you world? </h2> :<h2 className="feature off" >You don't get: How are you World?</h2>) }
        </div>
      </div>
    );
  }
}

export default App;
