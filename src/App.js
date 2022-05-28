import React from "react";
import {
  createInstance,
  OptimizelyProvider,
  OptimizelyFeature,
} from "@optimizely/react-sdk";

const optimizely = createInstance({
  sdkKey: "8ho1QR1cs57BtwUbu1c1T",
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
        <h1>Feature Toggles Demo</h1>
        <OptimizelyFeature feature="hello-world">
          {(isEnabled) => (isEnabled ? <h2> Hello world! </h2> : <p>You don't get Hello World</p>)}
        </OptimizelyFeature>

        <OptimizelyFeature feature="goodbye-world">
          
          {(isEnabled) => (isEnabled ? <h2> Goodbye world! </h2> : <p>You don't get Goodbye World</p>)}
        </OptimizelyFeature>

        <OptimizelyFeature feature="howareyou-world">
          
          {(isEnabled) => (isEnabled ? <h2> How are you world! </h2> : <p>You don't get how are you World</p>)}
        </OptimizelyFeature>
      </OptimizelyProvider>
    );
  }
}

export default App;
