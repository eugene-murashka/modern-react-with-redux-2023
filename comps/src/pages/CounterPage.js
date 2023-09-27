import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";
import { useReducer } from "react";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";
const SET_VALUE_TO_ADD = "change_value_to_add";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      ++state.count;
      return;
    case DECREMENT_COUNT:
      --state.count;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    default:
      throw new Error("unexpected action type: " + action.type);
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (evant) => {
    const value = parseInt(evant.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (evant) => {
    evant.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
      payload: state.valueToAdd,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
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
