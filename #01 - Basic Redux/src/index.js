import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/index";

//import Provider from 'react-redux' and wrap the components that will need the state inside the Redux store.
//Only the components that are wrapped between a Provider component and their further children components will be affected.

//Other components that are not related at all on any level to any of those components wrapped around a Provider component...
//...will not be able to reach the state data stored inside Redux.
//If most components will need the state within Redux, it's best practice to simply wrap <App /> component around a Provider...
//...because so that the state will be reached app-wide.
//This way, many wrapper Provider components will not be needed.

//Provider component receives a certain prop named 'store'.
//Inside this prop goes the stored Redux state.
//For that, the stored Redux state should also be imported on that file.
//import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
