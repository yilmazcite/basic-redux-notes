import { createSlice, configureStore } from "@reduxjs/toolkit";

//createSlice() is a hook that comes with Redux Toolkit.
//It receives an object as an argument.
//What it does is slices down the data and takes the specified data from the overall Redux store.
//Multiple slices can be created depending on the relevance of the data.

//Every slice object requires a 'name' property to identify the sliced piece of data.
//Secondly, an initial state is specified.
//Then, reducers need to be specified.

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //Within the reducers, the methods are specified:
    //Every method receives the latest state automatically with state argument.
    //Methods will be called by Redux automatically and will receive the current state.
    //An 'action' argument is not necessary all the time because the functions...
    //...will already be automatically triggered depending on which action was triggered.
    //so that multiple if statements or switch cases like in the counterReducer won't be necessary.
    increment(state) {
      //With Redux Toolkit, it's possible to mutate the current state on its own although it's still not highly encouraged.
      //A new object is not required.
      //This is because Redux Toolkit uses an external package called Immer with some hooks like createSlice().
      //https://immerjs.github.io/immer/
      //Immer detects the code like 'state.counter++' and updates the current state...
      //...overriding the states that haven't been mutated.
      //And finally updates the overall state without omitting any data, changed or unchanged.
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //It is still possible to listen to data and receive extra payload while working with Redux Toolkit:
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//Without using configureStore(), to get the reducers from a slice,
//const store = createStore(counterSlice.reducer); > '.reducer' is required.
//if there are multiple slices and multiple reducers that are expected to be pulled out from these slices...
//...then there would be multiple 'sliceName.reducer'.
//combineReducer() is a Redux function which can be used in these situations to merge all the reducers.

//However, with Redux Toolkit comes configureStore().
//It makes merging multiple reducers into one reducer easier.
//configureStore() doesn't receive a reducer function as an argument but receives an object with a 'reducer' property.
//The key name 'reducer' is expected from Redux Toolkit and it can't be changed.
const store = configureStore({
  //When there's only one reducer, it can be directly assigned to the reducer of the configureStore() like below:
  reducer: counterSlice.reducer,
  //When there are multiple slices and reducers to be used...
  //...'reducer' key can receive an object with all the reducers included:
  //reducer: {
  //counter: counterSlice.reducer,
  //second: secondSlice.reducer,
  //}
});

//The methods declared inside the slice is retrieved via '.actions' and stored inside counterActions.
//Now counterActions is an object with the methods inside which is ready to be dispatched.
export const counterActions = counterSlice.actions;

export default store;
