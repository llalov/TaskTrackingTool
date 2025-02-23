import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/tasks-list'

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const tasks = Object.values(result);

    return tasks;
} 

export const getOne = async (taskId) => {
    try {
      const response = await request.get(`${BASE_URL}/${taskId}`);
      return response;
    } catch (error) {
      console.error("Error fetching task:", error);
      return null;
    }
  };


const tasksAPI = {
    getOne,
    getAll
};

export default tasksAPI;

