import axios from 'axios';
import { message } from 'antd';

export const query = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params, ...config })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}