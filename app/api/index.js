import axios from 'axios';

let axiosInstance;

export function createAxiosInstance(baseURL) {
  axiosInstance = axios.create({
    baseURL,
  });

  axiosInstance.interceptors.response.use(
    response => response,
    error => Promise.reject(error),
  );
}

export function parseData(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.data;
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default config => {
  if (axiosInstance) {
    const configWithHeader = {
      ...config,
    };
    return axiosInstance.request(configWithHeader);
  }

  return Promise.reject(new Error('Axios instance is undefined'));
};
