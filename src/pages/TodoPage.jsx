import React, { useEffect } from "react";
import AddTodo from "../component/AddTodo";
import TodoList from "../component/TodoList";
import TodoLayout from "../component/TodoLayout";
import useTodo from "../hooks/useTodo";

function TodoPage() {
  const { todos, fetchTodoList } = useTodo();

  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return (
    <TodoLayout>
      <AddTodo todos={todos} fetchTodoList={fetchTodoList} />
      <TodoList todos={todos} fetchTodoList={fetchTodoList} />
    </TodoLayout>
  );
}

export default TodoPage;
