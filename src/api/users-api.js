import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/users/',
  timeout: 5000,
});

export const UsersApi = {
  getCurrentUser(username){
    return instance.get(`/${username}`).then(response => response.data);
  }
};