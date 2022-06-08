import React from "react";
import Button from "./Button";

import "./AddBtn.css";

//componente
const AddBtn = () => {
  return (
    <div className="add-task-container">
      <input className="add-task-input" type="text" />;
      <div className="add-task-button-container">
        <Button>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddBtn;
