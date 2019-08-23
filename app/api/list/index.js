import { API_LIST } from '../api-url';
import axios, { checkStatus } from '../index';

export async function GET_LIST() {
  try {
    const response = await axios({
      method: 'GET',
      url: API_LIST.ALL(),
    });
    checkStatus(response);

    return response.data.data;
  } catch (err) {
    return [];
  }
}
