import React from 'react';
import {useDispatch} from "react-redux";
import {TYPE_OF_FILTER} from "../redux/filter/reducers";
import {filterTodoActionCreator} from "../redux/filter/actions";

const FilterButtons = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ALL)) }>Show all</button>
      <button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ACTIVE))}>Show Active</button>
      <button onClick={() => dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_COMPLETED))}>Show completed</button>
    </div>
  );
};

export default FilterButtons;