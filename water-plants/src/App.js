import React from "react";
import SignupPage from "./components/SignupPage";
import { Provider } from "react-redux";
import { store } from './store'

function App() {

  return (
    <Provider store={store}>
      <SignupPage />
    </Provider>
  );
}

export default App;
