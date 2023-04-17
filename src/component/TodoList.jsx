/** @jsxImportSource @emotion/react */
import React from "react";
import TodoItem from "./TodoItem";
import { css } from "@emotion/react";

const todoListCss = css`
  max-height: 80vh;
  overflow-y: auto;
  padding: 0;
  box-sizing: border-box;
`;

function TodoList({ todos, fetchTodoList }) {
  return (
    <ul css={todoListCss}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} fetchTodoList={fetchTodoList} />
      ))}
    </ul>
  );
}

export default TodoList;
