import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/tasks-list'

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const tasks = result;

    return tasks;
} 

export const getOne = (taskId) => request.get(`${BASE_URL}/${taskId}`);

export const create = (taskData) => request.post(`${BASE_URL}`, taskData);

export const remove = (taskId) => request.del(`${BASE_URL}/${taskId}`); 

export const update = (taskId, taskData) => request.put(`${BASE_URL}/${taskId}`, taskData)

const tasksAPI = {
    getOne,
    getAll,
    create,
    remove,
    update
};
 
export default tasksAPI;

