import requester from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/tasks-list';

const buildUrl = (taskId) => `${BASE_URL}/${taskId}/comments`;

const create = async (taskId, username, text) => {
    const result = requester.post(buildUrl(taskId), {username, text});

    const comments = Object.values(result);

    return comments;
}

export default {
    create
}
