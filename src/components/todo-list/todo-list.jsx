import React from "react";
import TodoItem from "../todo-item";


export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todoList.map((el) => (
          <TodoItem
            key={el.id}
            item={el}
            handlerImportant={this.props.handlerImportant(el.id)}
            handlerRemove={this.props.handlerRemove(el.id)}
            handlerIsDone={this.props.handlerIsDone(el.id)}
          />
        ))}
      </div>
    )
  }
}