import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/tasks-list'

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const tasks = Object.values(result);

    return tasks;
} 

