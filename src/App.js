import React, { useState } from 'react';
import Context from './components/context.js';
import TodoList from './components/TodoList';
import AddTodo from "./components/AddTodo";



function App() {
  //первоначальное состояние
  let [todos, setTodos] = React.useState([
    { id: 1, title: 'task1', complited: true },
    { id: 2, title: 'task2', complited: false },
    { id: 3, title: 'task3', complited: false },
  ])

  function togleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.complited = !todo.complited
        }
        return todo
      }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => {
      return todo.id !== id
    }))
  }

  function addTodoItem(title) {
    setTodos(
      todos.concat(
        {
          title: title,
          id: new Date(),
          complited: false
        }
      )
    )
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className='wrapper'>
        <h1>Todo List</h1>
        <AddTodo onCreate={addTodoItem} />
        <TodoList todos={todos} onToggle={togleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
