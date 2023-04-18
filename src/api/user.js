import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://followers-backend.herokuapp.com/',
  // baseURL: 'http://localhost:4000',
});

export const axiosAddUser = async userData => {
  const { data } = await instance.post('/user/add', userData);
  return data;
};

export const axiosGetUsers = async userData => {
  const { data } = await instance.post('/user/', userData);
  return data;
};

export const axiosGetFollower = async () => {
  const { data } = await instance.post('/user/follower');
  return data;
};

export const axiosUpdateUser = async userData => {
  const { data } = await instance.post('/user/update', userData);
  return data;
};

export default instance;
