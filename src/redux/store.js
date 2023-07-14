import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

// local imp
import globalState from "./reducer/globalState";

// config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  //   whitelist: ["globalState"],
};

//  root reducer
const rootReducer = combineReducers({
  globalState: globalState,
});

const persiReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persiReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
