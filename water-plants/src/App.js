import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import  store  from "./store"

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <h1>HELLO WORLD</h1>
      </div>
    </Provider>
  );
}

export default App;
