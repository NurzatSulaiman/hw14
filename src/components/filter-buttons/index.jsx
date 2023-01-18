import React from 'react';
import {useDispatch} from "react-redux";
import {TYPE_OF_FILTER} from "../redux/filter/reducers";
import {filterTodoActionCreator} from "../redux/filter/actions";
import {Button} from "@mui/material";


const FilterButtons = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Button variant="contained"
              color="success" size="small" style={{marginRight: '20px'}} onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ALL)) }>Show all</Button>
      <Button variant="contained"
              color="success" size="small" style={{marginRight: '20px'}} onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ACTIVE))}>Show Active</Button>
      <Button  variant="contained"
               color="success" size="small" onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_COMPLETED))}>Show completed</Button>
    </div>
  );
};

export default FilterButtons;