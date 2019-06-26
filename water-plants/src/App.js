import React from "react";
import SignupPage from "./components/SignupPage";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import "./App.css";
import './styling/reset.css';
import PlantList from './components/PlantList/PlantList';
import combinedReducers from './reducers';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

// Phone testing: Redux Devtools break mobile views
const store = createStore(
  combinedReducers,
  {},
  applyMiddleware(thunk),
);

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Route path='/signup' component={SignupPage} />
        <PrivateRoute exact path='/' component={PlantList} />
      </Router>
    </Provider>
  );
}

export default App;
