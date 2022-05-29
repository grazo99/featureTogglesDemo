import React from "react";
import {
  createInstance,
  OptimizelyProvider,
  OptimizelyFeature,
} from "@optimizely/react-sdk";
import './styles.css';
import { optimizelyC } from './toggles/development';


const optimizely = createInstance({
  sdkKey: optimizelyC.sdkKey,
});

class App extends React.Component {
  render() {
    
    return (
      <OptimizelyProvider
        optimizely={optimizely}
        user={{
          id: "user123",
          attributes: {
            customerId: 123,
            isVip: true,
          },
        }}
      >
        <h1 className="title">Feature Toggles Demo :)</h1>
        <OptimizelyFeature feature="hello-world" >
          {(isEnabled) => (isEnabled ? <h2 className="feature on"> Hello world! </h2> : <h2 className="feature off" >You don't get: Hello World!</h2>)}
        </OptimizelyFeature>

        <OptimizelyFeature feature="goodbye-world" >
          
          {(isEnabled) => (isEnabled ? <h2 className="feature on"> Goodbye world! </h2> : <h2 className="feature off" >You don't get Goodbye World!</h2>)}
        </OptimizelyFeature>

        <OptimizelyFeature feature="howareyou-world">
          
          {(isEnabled) => (isEnabled ? <h2 className="feature on"> How are you world? </h2> : <h2 className="feature off" >You don't get: How are you World?</h2>)}
        </OptimizelyFeature>
      </OptimizelyProvider>
    );
  }
}

export default App;
