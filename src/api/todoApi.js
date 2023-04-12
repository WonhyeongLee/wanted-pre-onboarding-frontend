import instance from "./api";

export const createTodoApi = async (todoContent) => {
  try {
    const response = await instance.post(`/todos`, todoContent);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTodosApi = async () => {
  try {
    const response = await instance.get(`/todos`);
    return response;
  } catch (error) {
    throw error;
  }
};
