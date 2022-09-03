import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const initialAuthState = {
  isAuthenticated: false,
};
//This authentication state will be sent to the necessary components.
//Once the components receive the data with useSelector...
//...it will be determined whether the component will be rendered or not according to the value isAuthenticated currently has.

//For instance, when clicked on the 'login' button, the state will be 'true'...
//...which will help render some other content conditionally.
//Check Auth, Header, and App components.

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//Creating a second slice.
//Irrelavent data should be separated.
//That's why, user login authentication has its own initial state and slice:
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  //Merging multiple slices together:
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    //Declaring multiple slices like this changes the way the data is retrieved in components while using useSelector().
    //Check the Counter, Auth or Header components...
    //...to see the difference and the notes about useSelector() and how it's used.
  },
});

//The methods of the slices that are to be used among components should be exported for further use:
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
