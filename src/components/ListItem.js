import React, {useContext} from "react";
import Context from "./context";

export default function ListItem(props) {
   let {removeTodo}=useContext(Context)
  return (
    <li className={props.todo.complited ? "isdone" : ""}>
      <span>
        {/*На измениение чекбокаса вызываем событие с id на кого кликнули */}
        <input type="checkbox" onChange={() => props.onChange(props.todo.id)} checked={props.todo.complited} />
        <span className="index">{props.index}</span>
        {props.todo.title}</span>
      <button className="btn-del" onClick={()=>removeTodo(props.todo.id)}>x</button>
    </li>

  )
}