import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux/es/exports";

import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    //counterActions is imported.
    //Before, the dispatch function would receive an object with the type and extra payload like this:
    //dispatch({type: COUNTER.INCREMENT, payload: ... etc.});
    //Since the methods are already declared inside the slice, the corresponding method can directly be used to dispatch.
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    //This action triggers the dispatch that is stated here and executes the code inside this specified method.
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>-- {counter} --</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
