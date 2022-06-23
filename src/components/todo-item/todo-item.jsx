import React from 'react';
import "./index.css";

export default class TodoItem extends React.Component {
  static defaultProps = {
    item: { id: 0, label: "test", important: false, done: false },
    handlerImportant: () => { }
  };

  render() {
    return (
      <div className="todo-item" onClick={this.props.handlerImportant} >
        <span className={this.props.item.done ? 'isDone' : ''}>{this.props.item.label}</span>
        <div className="nav">
          {this.props.item.important && <div className="red" />}
          <div
            className="check"
            onClick={this.props.handlerIsDone}>✓</div>
          <div
            className="rem"
            onClick={this.props.handlerRemove}>❌</div>
        </div>
      </div>
    )
  }
}