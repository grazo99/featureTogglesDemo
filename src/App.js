import React from "react";
import {isEnabled} from "./FeatureManagement";
import './styles.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Feature Toggles Demo :)</h1> 
        <div>
              {(isEnabled("hello-world")) ? <h2 className="feature on" >Hello world! </h2> : <h2 className="feature off" >You don't get: Hello World!</h2>}
        </div>
        <div>
              {(isEnabled("goodbye-world")) ? <h2 className="feature on" > Goodbye world! </h2> : <h2 className="feature off" >You don't get Goodbye World!</h2> }
        </div>
        <div>
              {(isEnabled("howAreYou-world")) ? <h2 className="feature on" > How are you world? </h2> :<h2 className="feature off" >You don't get: How are you World?</h2> }
        </div>
      </div>
    );
  }
}

export default App;
