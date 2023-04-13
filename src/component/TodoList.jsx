import React from "react";
import TodoItem from "./TodoItem";
// import useTodo from "../hooks/useTodo";

function TodoList({ todos, fetchTodoList }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} fetchTodoList={fetchTodoList} />
      ))}
    </ul>
  );
}

export default TodoList;
