import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: { 'Content-Type': 'application/json' },
});

export const HttpServices = {
  getUsers: async () => {
    const response = await instance.get('/users');
    return response.data;
  },
  getPosts: async () => {
    const response = await instance.get('/posts');
    return response.data;
  },
};
