import { Button } from "antd";
import React, { useReducer } from "react";

const action = (state, { type, payload }) => {
  // if (reducer.type === "INCREMENT") {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }
  // if (reducer.type === "DECREMENT") {
  //   return {
  //     ...state,
  //     count: state.count - 1,
  //   };
  // }
  // if (reducer.type === "CHANGE") {
  //   return {
  //     ...state,
  //     value: reducer.payload.value, // not understanding
  //   };
  // }
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "CHANGE":
      return {
        ...state,
        value: payload.value,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(action, {
    count: 0,
    value: "",
  });

  return (
    <div className="flex justify-center mt-6 items-center w-100% h-100%">
      <Button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="text-white"
        danger
      >
        +
      </Button>
      <p className="p-[10px]">{state.count}</p>
      <Button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="text-white bg-blue-500"
      >
        -
      </Button>
      <div>
        <input
          onChange={(e) => {
            dispatch({ type: "CHANGE", payload: { value: e.target.value } }); // not understanding
          }}
          type="text"
        />
        <h3>value: {state.value}</h3>
      </div>
    </div>
  );
};

export default App;
