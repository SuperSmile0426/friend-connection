import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
});

export const createUser = async (username: string, email: string) => {
    const response = await api.post('/users/', { username, email });
    return response.data;
};

export const getUsers = async () => {
    const response = await api.get('/users/');
    return response.data;
};


export const sendFriendRequest = async (user_id: number, friend_id: number) => {
    const response = await api.post('/friends/', { user_id, friend_id });
    return response.data;
};

export const getFriendRequests = async (user_id: number) => {
    const response = await api.get(`/friends/requests/${user_id}`);
    console.log(response)
    return response.data;
};

export const updateFriendRequest = async (friend_id: number, accepted: boolean) => {
    const response = await api.put(`/friends/${friend_id}`, { accepted });
    return response.data;
};