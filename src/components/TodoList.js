import React, { useState } from "react";
import ListItem from "./ListItem";

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return <ListItem
          todo={todo}
          key={todo.id}
          index={index + 1}
          onChange={props.onToggle} />
      })}
    </ul>
  )
}