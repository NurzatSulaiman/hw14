import React from "react";
import {TextField} from "@mui/material";

const Input = (props) => {
  const {
    value,
    onChange,
    type ='text'
  } = props

  return (
    <div>
      {/*<input*/}
      {/*  value={value}*/}
      {/*  onChange={onChange}*/}
      {/*  type={type}*/}
      {/*/>*/}
      <TextField id="outlined-basic" label="enter task" variant="outlined" value={value}
                 onChange={onChange}
                 type={type} />
    </div>
  )
}

export default Input