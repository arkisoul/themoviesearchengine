import axios from 'axios';
import {Login} from '../types/login';
import {Register} from '../types/register';

// interface IPerson {
//   name: string;
//   age: number;
// }
// class Person implements IPerson {
//   name: string;
//   age: number;
// }
// const p1: IPerson = new Person();
// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3000',
// });
type User = {
  id: number;
  name: string;
  email: string;
};

type LoginSuccess = {
  accessToken: string;
  user: User;
};

export const login = async (data: Login): Promise<LoginSuccess> => {
  try {
    console.log('login data', data);
    const res = await axios.post<LoginSuccess>(
      'http://localhost:3000/login',
      data,
    );
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
