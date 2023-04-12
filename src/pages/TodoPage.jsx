import React from "react";
import AddTodo from "../component/AddTodo";
import TodoList from "../component/TodoList";
import TodoLayout from "../component/TodoLayout";

function TodoPage() {
  return (
    <TodoLayout>
      <AddTodo />
      <TodoList />
    </TodoLayout>
  );
}

export default TodoPage;
