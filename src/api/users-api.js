import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/users/',
  timeout: 5000,
});

export const UsersApi = {
  getCurrentUser(username, email){
    return instance.get(`/${username}/${email}`).then(response => response.data);
  }
};