/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import useTodo from "../hooks/useTodo";
import { css } from "@emotion/react";
import { inputCss, buttonCss } from "../component/style/CommonStyles";

const addTodoWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
  background-color: white;
  padding: 0.5rem 0;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
function AddTodo({ todos, fetchTodoList }) {
  const { createTodo } = useTodo();
  const [todoInput, setTodoInput] = useState("");

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTodo({ todo: todoInput });
      setTodoInput("");
      fetchTodoList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form css={addTodoWrapper} onSubmit={handleSubmit}>
      <label></label>
      <input
        css={inputCss}
        type='text'
        id='todo'
        name='todo'
        data-testid='new-todo-input'
        placeholder='추가할 할 일을 적어주세요'
        value={todoInput}
        onChange={handleInputChange}
      ></input>
      <button css={buttonCss("todo")} type='submit' data-testid='new-todo-add-button'>
        추가
      </button>
    </form>
  );
}

export default AddTodo;
