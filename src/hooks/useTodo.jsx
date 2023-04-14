import { useState, useCallback } from "react";
import { getTodosApi, createTodoApi, updateTodoApi, deleteTodoApi } from "../api/todoApi";

function useTodo() {
  const [todos, setTodos] = useState([]);

  const fetchTodoList = useCallback(async () => {
    const response = await getTodosApi();
    setTodos(response.data);
  }, [setTodos]);

  const createTodo = async (todoContent) => {
    const response = await createTodoApi(todoContent);
    setTodos((prevTodos) => [...prevTodos, response.data]);
    return response;
  };

  const updateTodo = async (todoId, body) => {
    const response = await updateTodoApi(todoId, body);
    // Id 일치 여부 확인 후 todo 교체
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === todoId ? response.data : todo)));
    return response.data;
  };

  const deleteTodo = async (todoId) => {
    const response = await deleteTodoApi(todoId);
    // 요청하는 ID와 일치하는 todo를 todos 에서 삭제
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    return response;
  };

  return { todos, setTodos, createTodo, updateTodo, deleteTodo, fetchTodoList };
}

export default useTodo;
