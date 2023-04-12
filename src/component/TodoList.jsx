import React from "react";
import TodoItem from "./TodoItem";
import useTodo from "../hooks/useTodo";

function TodoList() {
  const { todos } = useTodo();
  console.log(todos);
  return (
    <ul>
      <li>
        <label>
          <input type='checkbox' />
          <span>TODO 1</span>
        </label>
        <button data-testid='modify-button'>수정</button>
        <button data-testid='delete-button'>삭제</button>
      </li>
      <li>
        <label>
          <input type='checkbox' />
          <span>TODO 2</span>
          <button data-testid='modify-button'>수정</button>
          <button data-testid='delete-button'>삭제</button>
        </label>
      </li>
      <li>
        <label>
          <input type='checkbox' />
          <span>TODO 3</span>
          <button data-testid='modify-button'>수정</button>
          <button data-testid='delete-button'>삭제</button>
        </label>
      </li>
      <li>
        <label>
          <input type='checkbox' />
          <TodoItem />
          <button data-testid='modify-button'>수정</button>
          <button data-testid='delete-button'>삭제</button>
        </label>
      </li>
    </ul>
  );
}

export default TodoList;
