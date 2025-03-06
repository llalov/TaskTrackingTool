import * as requester from "./requester";

const BASE_URL = 'http://localhost:3030/users'

export const login = async (email, password) =>  requester.post(`${BASE_URL}/login`, {email, password});

export const register = async (email, password) =>  requester.post(`${BASE_URL}/register`, {email, password});

export const logout = async () =>  requester.get(`${BASE_URL}/logout`);


