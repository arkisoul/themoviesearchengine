import axios from 'axios';
import {type Login} from '../types/login';
import {type Register} from '../types/register';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3000',
// });

export const login = async (data: Login) => {
  try {
    const res = await axios.post('http://localhost:3000/login', data);
    return res.data;
  } catch (error) {
    console.error(`Error! login user ${error}`);
    throw error;
  }
};

export const register = async (data: Register) => {
  try {
    const res = await axios.post('http://localhost:3000/register', data);
    return res.data;
  } catch (error) {
    console.error(`Error! login user ${error}`);
    throw error;
  }
};
