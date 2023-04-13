import { useEffect, useState, useCallback } from "react";
import { getTodosApi, createTodoApi, updateTodoApi, deleteTodoApi } from "../api/todoApi";

function useTodo() {
  const [todos, setTodos] = useState([]);

  const fetchTodoList = useCallback(async () => {
    console.log("fetchTodoList called");
    const response = await getTodosApi();
    setTodos(response.data);
  }, [setTodos]);

  const createTodo = async (todoContent) => {
    console.log(todoContent);
    const response = await createTodoApi(todoContent);
    console.log(response);
    setTodos((prevTodos) => [...prevTodos, response.data]);
    return response;
  };

  const updateTodo = async (todoId, body) => {
    console.log(todoId, body);
    const response = await updateTodoApi(todoId, body);
    console.log(`updateTodo res: ${response}`);
    setTodos((prevTodos) => prevTodos.map((t) => (t.id === todoId ? response.data : t)));
    return response.data;
  };

  const deleteTodo = async (todoId) => {
    console.log(`deleteTodo: ${todoId}`);
    const response = await deleteTodoApi(todoId);
    console.log(`deleteTodo res: ${response}`);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    return response;
  };

  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return { todos, setTodos, createTodo, updateTodo, deleteTodo, fetchTodoList };
}

export default useTodo;
