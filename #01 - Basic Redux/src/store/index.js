import { createStore } from "redux";

export const COUNTER = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREASE: "increase",
  TOGGLE: "toggle",
};

const initialState = {
  counter: 0,
  showCounter: true,
};

//Reducer function receives 2 arguments: state and the action that will accordingly update the state.
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER.INCREMENT:
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter, //unchanged value is still specified.
      };
      break;
    case COUNTER.DECREMENT:
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter, //unchanged value is still specified.
      };
      break;
    case COUNTER.INCREASE:
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter, //unchanged value is still specified.
      };
    case COUNTER.TOGGLE:
      return {
        showCounter: !state.showCounter,
        counter: state.counter, //unchanged value is still specified.
        //instead of specifying each unchanged value singularly,
        //spread operator can be used:
        //...state,
        //showCounter: !.state.showCounter,
      };
    default:
      return state;
  }
};
//Redux doesn't merge the returned value from a reducer function.
//It updates and replaces the previous state with the new state that returns from the reducer.
//That's why, even in cases where a property in the state doesn't change, it needs to be also stated inside the object as it is while returning.
//Spread operator can be used for this.

//IMPORTANT: A current state value should NEVER be mutated. Instead, it should always be updated by returning a new state object.

//The reducer function is sent to createStore() as an argument.
//createStore() always expects a reducer function as an argument.
//configureStore() method of the @reduxjs-toolkit is recommended instead of createStore():
const store = createStore(counterReducer);

export default store;
