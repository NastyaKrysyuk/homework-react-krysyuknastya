import React from "react";

export default class AddTodo extends React.Component {
  state = {
    value: ""
  };
  handlerChange = (e) => {
    this.setState({ ...this.state, value: e.target.value })
  }

  render() {
    return (
      <div>
        <input value={this.state.value} type="text" placeholder="Add todo" onChange={this.handlerChange} />
        <button onClick={(_e) => {
          this.props.handlerAddTodo(this.state.value)
          this.setState({  value: " " })
        }}>Add</button>
      </div>
    )
  }
}