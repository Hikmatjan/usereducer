import { Button } from "antd";
import React from "react";

const Local = () => {
  const onchange = (name) => {
    localStorage.setItem("name", name);
  };
  const ondelete = () => {
    localStorage.removeItem("name");
  };
  const onclear = () => {
    localStorage.clear();
  };
  return (
    <div className="flex items-center  flex-col gap-5 justify-center w-full h-[100vh]">
      Local storage{localStorage.getItem("name")}
      <Button onClick={() => onchange("Coder")}>Hikmat</Button>
      <Button onClick={() => onchange("HAkimchik")}>Hakim</Button>
      <Button
        onClick={() => {
          onchange("Sadir");
        }}
      >
        Muqaddas
      </Button>
      <Button onClick={() => onchange("Djanbiy")}>Samira</Button>
      <Button onClick={ondelete}>DELETE</Button>
      <Button onClick={onclear}>CLEAR</Button>
    </div>
  );
};

export default Local;
