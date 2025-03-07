import * as requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments';


const create = async (taskId,text) => {
    const result = requester.post(BASE_URL, {taskId, text});
    const comments = Object.values(result);

    return comments;
}

const getAll = async (taskId) => {
    const params = new URLSearchParams({
        where: `taskId="${taskId}"`,
        load: `author=_ownerId:users`
    })

    const result = requester.get(`${BASE_URL}?${params.toString()}`);

    return result;
}

export default {
    create,
    getAll
}
