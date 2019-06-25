import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import  store  from "./store"
import Plant from './components/PlantList/PlantCard';
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <h1>HELLO WORLD</h1>
        <Plant/>
      </div>
    </Provider>
  );
}

export default App;
