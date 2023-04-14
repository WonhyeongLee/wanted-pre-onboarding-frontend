import React, { useState } from "react";
import useTodo from "../hooks/useTodo";

function TodoItem({ todo, fetchTodoList }) {
  const { updateTodo, deleteTodo } = useTodo();
  const [isModify, setIsModify] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState(todo.todo);
  const [isTodoCompleted, setIsTodoCompleted] = useState(todo.isCompleted);

  const clickModifyButton = () => {
    setIsModify(true);
  };

  const handleUpdateTodo = async (newTodo, newIsCompleted) => {
    console.log(`${newTodo},${newIsCompleted}`);
    const updateBody = {
      todo: newTodo,
      isCompleted: newIsCompleted,
    };
    return await updateTodo(todo.id, updateBody);
  };
  const clickTodoCompleted = async () => {
    setIsTodoCompleted(!isTodoCompleted);
    await handleUpdateTodo(modifiedTodo, !isTodoCompleted);
  };

  const submitModifiedTodo = async () => {
    const updatedTodo = await handleUpdateTodo(modifiedTodo, isTodoCompleted);
    setIsModify(false);
    setIsTodoCompleted(updatedTodo.isCompleted);
    setModifiedTodo(updatedTodo.todo);
    fetchTodoList();
  };

  const cancelModifyTodo = () => {
    setIsModify(false);
    setModifiedTodo(todo.todo);
  };

  const clickDeleteButton = async () => {
    await deleteTodo(todo.id);
    fetchTodoList();
  };

  return (
    <li key={todo.id}>
      <label>
        <input
          type='checkbox'
          name={todo.id}
          value={"isCompleted"}
          checked={isTodoCompleted}
          onChange={() => {
            clickTodoCompleted();
          }}
        />

        {isModify ? (
          <>
            <input
              name={todo.id}
              data-testid='modify-input'
              value={modifiedTodo}
              onChange={(e) => setModifiedTodo(e.target.value)}
            />
            <button data-testid='submit-button' onClick={submitModifiedTodo}>
              제출
            </button>
            <button data-testid='cancel-button' onClick={cancelModifyTodo}>
              취소
            </button>
          </>
        ) : (
          <>
            <span>{todo.todo}</span>
            <button data-testid='modify-button' onClick={clickModifyButton}>
              수정
            </button>
            <button data-testid='delete-button' onClick={clickDeleteButton}>
              삭제
            </button>
          </>
        )}
      </label>
    </li>
  );
}

export default TodoItem;
