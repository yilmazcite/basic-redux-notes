//import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { COUNTER } from "../store";

const Counter = () => {
  //useSelector is a Redux hook.
  //It receives a function as an argument.
  //Specified data within the function argument is retrieved from the Redux store.
  //This hook is used to slice a part of the Redux store data and retrieve only that specific part.
  //So that it won't be necessary to retrieve the whole Redux store.
  const counter = useSelector((store) => store.counter);
  //When useSelector is used, Redux automatically sends and sets up a subscription to the Redux store for this component.
  //This way, whenever the state inside the Redux store changes...
  //...it also triggers a re-render on the related components and immediately updates the data there as well.

  //useSelector can be used multiple times in order to extract different types of data from the Redux store.
  const toggle = useSelector((store) => store.showCounter);

  //useDispatch is another Redux hook.
  //It receives no arguments.
  //It is used as a function with the variable it is stored into:
  const dispatch = useDispatch();
  //dispatch() function then is used to dispatch actions like action.type or action.payload.

  const incrementHandler = () => {
    //action type here should match the specified action types inside the reducer in the Redux store.
    dispatch({ type: COUNTER.INCREMENT });
  };
  const decrementHandler = () => {
    dispatch({ type: COUNTER.DECREMENT });
  };
  const increaseHandler = () => {
    dispatch({ type: COUNTER.INCREASE, amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: COUNTER.TOGGLE });
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      {toggle && <div>-- {counter} --</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
