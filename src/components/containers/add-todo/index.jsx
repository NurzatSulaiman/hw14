import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodoActionCreator} from "../../redux/todo/actions";
import Input from "../../input";
import Buttons from "../../button";

const AddTodoContainer = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch()

  const handleInputValue =(e) => {
    setInputValue(e.target.value)
  }

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTodoActionCreator(inputValue))
      setInputValue('')
    }
  }
  return (
    <div>
      <Input
        value={inputValue}
        onChange={handleInputValue}
      />
      <Buttons
        onClick={handleAddTodo}
      >Add todo</Buttons>
    </div>
  );
};

export default AddTodoContainer;