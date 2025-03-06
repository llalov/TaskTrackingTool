import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/tasks-list'

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const tasks = result;

    return tasks;
} 

export const getOne = (taskId) => request.get(`${BASE_URL}/${taskId}`);

export const create = (gameData) => request.post(`${BASE_URL}`, gameData);


const tasksAPI = {
    getOne,
    getAll,
    create
};
 
export default tasksAPI;

