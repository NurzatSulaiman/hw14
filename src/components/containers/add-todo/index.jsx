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
    <form style={{display: 'flex', marginBottom: '20px', justifyContent: 'space-around'}}>
      <Input
        value={inputValue}
        onChange={handleInputValue}
      />
      <Buttons
        onClick={handleAddTodo}
      >Add todo</Buttons>
    </form>
  );
};

export default AddTodoContainer;