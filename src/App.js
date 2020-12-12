import React from "react";
import CreateTodo from './CreateTodo'
import "./styles.css";
import TodoList from "./TodoList";

export default function App() {
  return (
    <div className="App">
      <h1> TODO APPLICATION </h1>
      <CreateTodo />
      <TodoList />
    </div>
  );
}
