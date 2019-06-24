import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import rootReducer from "./reducers"

const intialStae = {};

const middleware = [thunk];
const store = createStore(
  // rootReducer,
  () => {
    
  },
  intialStae,
  applyMiddleware(...middleware)
);

export default store;
