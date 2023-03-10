import { instance } from "../services/api";

export async function getProducts() {
  const data = await instance.get("/products");
  return data;
}

export async function getProductsById(productId) {
  const product = await instance.get(`/products/${productId}`);
  return product;
}
