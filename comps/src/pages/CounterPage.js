import Button from "../components/Button";
import Panel from "../components/Panel";
import { useDispatch, useSelector } from "react-redux";
import {
  setInitialCount,
  increment,
  decrement,
  setValueToAdd,
  addValueToCount,
} from "../store";
import { useEffect } from "react";

function CounterPage({ initialCount }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialCount(initialCount));
  }, [dispatch, initialCount]);

  const count = useSelector((state) => {
    return state.counter.count;
  });

  const valueToAdd = useSelector((state) => {
    return state.counter.valueToAdd;
  });

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleChange = (evant) => {
    const value = parseInt(evant.target.value) || 0;

    dispatch(setValueToAdd(value));
  };

  const handleSubmit = (evant) => {
    evant.preventDefault();

    dispatch(addValueToCount());
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
