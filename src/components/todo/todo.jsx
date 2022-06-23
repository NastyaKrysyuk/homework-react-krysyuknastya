import React from "react";
import TodoList from "../todo-list";
import AddTodo from "../add-todo";
import SearchTodo from "../search-todo";
import './index.css'

let initialTodoList = [
  { id: 0, label: "Lern React", important: false, done: false },
  { id: 1, label: "Lern JS", important: false, done: false },
  { id: 2, label: "Lern HTML", important: false, done: false },
  { id: 3, label: "Lern CSS", important: false, done: false }
];

export default class Todo extends React.Component {
  //первоначальное состояние 
  state = {
    todoList: initialTodoList,
    term: ""
  };

  sortTodoList=(id,feel)=>{
    const arr = this.state.todoList.map((el) => {
      if (el.id === id) {
        return { ...el, [feel]: !el[feel] };
      } else {
        return el;
      }
    });
    this.setState({ ...this.state, todoList: arr });
  }

  handlerImportant = (id) => {
    return (_e) => {
      console.log(`Клик по ${id} важное/неважное`);
      this.sortTodoList(id,'important')

    };
  };

  handlerRemove = (id) => {
    return (_e) => {
      console.log(`Клик по ${id} удалить`)
      _e.stopPropagation();
      const arr = this.state.todoList.filter((el) => {
        return el.id !== id
      });
      this.setState({ ...this.state, todoList: arr });
    };
  };

  handlerIsDone = (id) => {
    return (_e) => {
      console.log(`Клик по ${id} выполнено/невыполнено`)
      _e.stopPropagation();
      this.sortTodoList(id,'done')
    }

  }

  handlerAddTodo = (taskName) => {
      const idx = this.state.todoList.at(-1).id;
      this.setState((prevState) => ({
        ...prevState,
        todoList: [
          ...prevState.todoList,
          { id: idx + 1, label: taskName, important: false, done: false }
        ]
      }));
  };

  handlerSerach = (e) => {
    this.setState({ ...this.state, term: e.target.value });
  };

  filterList = () => {
    if (this.state.term) {
      return this.state.todoList.filter((el) =>
        el.label.toLocaleLowerCase().includes(this.state.term)
      );
    }
    return this.state.todoList;
  };


  render() {
    return (
      <div className="todo">
        <SearchTodo 
          value={this.state.term} 
          handlerChange={this.handlerSerach}
        />

        <TodoList 
          todoList={this.filterList()}
          handlerImportant={this.handlerImportant}
          handlerRemove={this.handlerRemove}
          handlerIsDone={this.handlerIsDone}
        />

        <AddTodo handlerAddTodo={this.handlerAddTodo} />
      </div>
    )
  }
}