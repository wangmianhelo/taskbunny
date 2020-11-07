
import axios from 'axios';
import useAuth from './useAuth';

const instance = axios.create({
  baseURL: 'http://ec2-52-65-156-60.ap-southeast-2.compute.amazonaws.com',
});

useAuth(instance);

export default instance;