/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import useTodo from "../hooks/useTodo";
import { css } from "@emotion/react";
import { inputCss, buttonCss } from "../component/style/CommonStyles";

const listItemCss = css`
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

const checkboxWrapperCss = css`
  flex-shrink: 0;
`;

const buttonsWrapperCss = css`
  flex-shrink: 0;
  display: flex;
  gap: 0.2rem;
`;

const contentCss = css`
  font-size: 1.2rem;
`;

function TodoItem({ todo, fetchTodoList }) {
  const { updateTodo, deleteTodo } = useTodo();
  const [isModify, setIsModify] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState(todo.todo);
  const [isTodoCompleted, setIsTodoCompleted] = useState(todo.isCompleted);

  const clickModifyButton = () => {
    setIsModify(true);
  };

  const handleUpdateTodo = async (newTodo, newIsCompleted) => {
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
    <li key={todo.id} css={listItemCss}>
      <div css={checkboxWrapperCss}>
        <input
          type='checkbox'
          name={todo.id}
          value={"isCompleted"}
          checked={isTodoCompleted}
          onChange={() => {
            clickTodoCompleted();
          }}
        />
      </div>

      {isModify ? (
        <>
          <input
            css={inputCss}
            name={todo.id}
            data-testid='modify-input'
            value={modifiedTodo}
            onChange={(e) => setModifiedTodo(e.target.value)}
          />
          <div css={buttonsWrapperCss}>
            <button
              css={buttonCss("todo")}
              data-testid='submit-button'
              onClick={submitModifiedTodo}
            >
              제출
            </button>
            <button css={buttonCss("todo")} data-testid='cancel-button' onClick={cancelModifyTodo}>
              취소
            </button>
          </div>
        </>
      ) : (
        <>
          <span css={contentCss}>{todo.todo}</span>
          <div css={buttonsWrapperCss}>
            <button css={buttonCss("todo")} data-testid='modify-button' onClick={clickModifyButton}>
              수정
            </button>
            <button css={buttonCss("todo")} data-testid='delete-button' onClick={clickDeleteButton}>
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
