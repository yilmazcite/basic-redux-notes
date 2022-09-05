import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";
//Since these slice exports are 'default', they can also be named differently different than the original export name.
//The exact same name must be used while importing a named export. > import { authAction } from...

const store = configureStore({
  //Merging multiple slices together:
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
