import React from "react";

export default class SearchTodo extends React.Component{
  render(){
    return(
      <div>
        <input placeholder="Search" type="text" value={this.props.value} onChange={this.props.handlerChange}/>
      </div>
    )
  }
}