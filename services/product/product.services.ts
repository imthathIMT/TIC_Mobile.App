import axios from 'axios';
import { Product } from '../../model/product.model';

const  API_BASE_URL = "https://692295b209df4a492322caa3.mockapi.io/api/v1/"

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

  // Product Service
export const ProductService = {
  // Get all products
  getAllProducts: async (): Promise<Product[]> => {
    try {
      const response = await apiClient.get<Product[]>('Products');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch products');
      }
      throw new Error('An unexpected error occurred');
    }
  },

  getProductById: async (id: string): Promise<Product> => {
    try {
      const response = await apiClient.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch product');
      }
      throw new Error('An unexpected error occurred');
    }
  },

  createProduct: async (product: Omit<Product, 'id' | 'createdAt'>): Promise<Product> => {
    try {
      const response = await apiClient.post<Product>('/products', product);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to create product');
      }
      throw new Error('An unexpected error occurred');
    }
  },

  updateProduct: async (id: string, product: Partial<Product>): Promise<Product> => {
    try {
      const response = await apiClient.put<Product>(`/products/${id}`, product);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to update product');
      }
      throw new Error('An unexpected error occurred');
    }
  },

  // Delete product
  deleteProduct: async (id: string): Promise<void> => {
    try {
      await apiClient.delete(`/products/${id}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to delete product');
      }
      throw new Error('An unexpected error occurred');
    }
  },
};

export default ProductService;
