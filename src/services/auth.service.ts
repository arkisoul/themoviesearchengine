import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3000',
// });

type Login = {
  email: string;
  password: string;
};
type Register = {
  email: string;
  password: string;
  name: string;
};

export const login = async (data: Login) => {
  try {
    const res = await axios.post('http://localhost:3000/login', data);
    return res.data;
  } catch (error) {
    console.error(`Error! login user ${error}`);
  }
};

export const register = async (data: Register) => {
  try {
    const res = await axios.post('http://localhost:3000/register', data);
    return res.data;
  } catch (error) {
    console.error(`Error! login user ${error}`);
  }
};
