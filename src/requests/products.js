import { instance } from '../services/api';

export async function getProducts() {
  const data = await instance.get('/products');
  return data;
}
