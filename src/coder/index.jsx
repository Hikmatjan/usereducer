import React, { useEffect, useReducer } from "react";
import { Table, Form, Input, Button } from "antd";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Data remove",
    dataIndex: "",
    key: "x",
    render: () => <a onClick={() => onremove(id)}>Delete</a>,
    // render: (completed) => (completed ? "Yes" : "No"),
  },
  {
    title: "Data Edit",
    dataIndex: "",
    key: "x",
    render: () => <a>Edit</a>,
  },
];
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

const TASK = () => {
  const [state, dispatch] = useReducer(action, { data: [] });
  useEffect(() => {
    const getItem = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      dispatch({ type: "DATACHANGE", payload: { data: data } });
    };
    getItem();
  }, []);
  const onremove = async (id) => {
    dispatch({ type: "DELETE", payload: { id } });

    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
      headers: { "Context-type": "application/json" },
    });
  };
  return (
    <div className="p-[20px] mb-[10px]">
      <h1>Data Table</h1>
      <Table dataSource={state.data} columns={columns} rowKey="id" />
    </div>
  );
};

export default TASK;
