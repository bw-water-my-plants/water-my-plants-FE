import React from "react";
import SignupPage from "./components/SignupPage";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import "./App.css";
import './styling/reset.css';
import Plant from './components/PlantList/PlantCard';
import combinedReducers from './reducers';




/* const store = createStore(
  combinedReducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
); */

// Phone testing: Redux Devtools break mobile views
const store = createStore(
  combinedReducers,
  {},
  applyMiddleware(thunk),
);

function App() {

  return (
    <Provider store={store}>
      <SignupPage />
      <div className="App">
        <h1>HELLO WORLD</h1>
        <Plant/>
      </div>
    </Provider>
  );
}

export default App;
