import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import ShowComponent from "./component/ShowComponent"



const initialState = {
  count: 0
}
const counterReducer = (state = initialState, action) => {
    switch(action.type){
      case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      } 
      case "DECREMENT": 
      return {
        ...state,
        count: state.count - 1
      }
      default:
      return state;
    }
}

const store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>HELLO WORLD</h1>
        <ShowComponent />
      </div>
    </Provider>
  );
}

export default App;
