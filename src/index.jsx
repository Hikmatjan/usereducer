import { Button } from "antd";
import React, { useEffect, useReducer } from "react";
const action = (state, { type, payload }) => {
  switch (type) {
    case "DATACHANGE":
      return {
        ...state,
        data: payload.data,
      };
    case "DELETE":
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== payload.id),
      };
  }
};

const Coder = () => {
  const [state, dispatch] = useReducer(action, {
    data: [],
  });
  useEffect(() => {
    const getData = async () => {
      const respone = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await respone.json();
      dispatch({ type: "DATACHANGE", payload: { data: data } });
    };
    getData();
  }, []);
  const ondelete = async (id) => {
    dispatch({ type: "DELETE", payload: { id } });

    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "aplication/json" },
    });
  };
  return (
    <div className="flex  flex-col items-center justify-center mt-4 w-full h-[100vh] gap-5">
      1322
      {state.data.map(({ id, title }) => (
        <div key={id}>
          {title}
          <Button onClick={() => ondelete(id)}>DELETE</Button>
        </div>
      ))}
    </div>
  );
};

export default Coder;
