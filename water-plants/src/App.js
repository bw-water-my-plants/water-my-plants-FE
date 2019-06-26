import React from "react";
import SignupPage from "./components/Signup/SignupPage";
import LoginPage from './components/Login/LoginPage';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import "./App.css";
import './styling/reset.css';
import MainView from './views/MainView';

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
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Route path='/signup' component={SignupPage} />
        <Route path='/login' component={LoginPage} />
        <PrivateRoute exact path='/' component={MainView} />
      </Router>
    </Provider>
  );
}

export default App;
