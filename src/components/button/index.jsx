import React from "react";
import {Button} from "@mui/material";

const Buttons = (props) => {
  const {
    onClick,
    children
  } = props

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  )
}
export default Buttons