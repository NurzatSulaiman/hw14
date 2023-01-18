import React from "react";

const Input = (props) => {
  const {
    value,
    onChange,
    type ='text'
  } = props

  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  )
}

export default Input