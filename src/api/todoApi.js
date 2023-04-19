import instance from "./api";

export const createTodoApi = async (todoContent) => {
  const response = await instance.post(`/todos`, todoContent);
  return response.data;
};

export const getTodosApi = async () => {
  const response = await instance.get(`/todos`);
  return response.data;
};

export const updateTodoApi = async (todoId, body) => {
  const response = await instance.put(`/todos/${todoId}`, body);
  return response.data;
};

export const deleteTodoApi = async (todoId) => {
  const response = await instance.delete(`/todos/${todoId}`);
  return response.data;
};
