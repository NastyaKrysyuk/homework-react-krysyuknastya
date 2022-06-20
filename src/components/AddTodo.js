import React, { useState } from "react";

export default function AddTodo(props) {
  const [value, setValue] = React.useState("");

  function onChange(e) {
    setValue(e.target.value)
  }

  function hendlerClick(e) {
    e.preventDefault();
    props.onCreate(value);
    setValue('')
  }

  return (
    <div>
      <input type="text" value={value} onChange={onChange} /><button type="submit" onClick={hendlerClick}>Добавить задание</button>
    </div>
  )
}