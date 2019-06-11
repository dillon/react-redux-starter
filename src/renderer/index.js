import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Login from "./components/Login";

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>

  );
}

export default App;
