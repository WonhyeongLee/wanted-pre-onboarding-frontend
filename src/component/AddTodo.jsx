import React, { useState } from "react";
import useTodo from "../hooks/useTodo";

function AddTodo() {
  const { createTodo } = useTodo();
  const [todoInput, setTodoInput] = useState("");

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTodo({ todo: todoInput });
      // 입력창 초기화
      setTodoInput("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Todo</label>
        <input
          type='text'
          id='todo'
          name='todo'
          data-testid='new-todo-input'
          placeholder='추가할 할 일을 적어주세요'
          value={todoInput}
          onChange={handleInputChange}
        ></input>
        <button type='submit' data-testid='new-todo-add-button'>
          추가
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
