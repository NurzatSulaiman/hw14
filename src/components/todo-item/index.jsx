import React from "react";
import {Button} from "@mui/material";

const TodoItem = (props) => {
  const {
    text,
    onClick,
    onDelete,
    isComplete
  } = props

  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: isComplete ? 'line-through' : 'none'
      }}
    >
      {text}
      <Button onClick={onDelete} variant="outlined" color="error" size='small' style={{marginLeft: '20px'}}>
        delete
      </Button>
    </li>
  );
};

export default TodoItem;