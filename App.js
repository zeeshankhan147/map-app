import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";

// local imports
import Loader from "./src/components/Loader";
import Splash from "./src/screens/Splash";
import RouteStack from "./src/navigation/RouteStack";

const App = () => {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 3000);
  }, []);

  return (
    <>
      {isSplash ? (
        <Splash />
      ) : (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Loader />
            <NavigationContainer>
              <RouteStack />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      )}
    </>
  );
};

export default App;
