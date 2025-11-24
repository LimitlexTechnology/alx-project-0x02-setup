export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

export interface Order {
  id: number;
  userId: number;
  productIds: number[];
  orderDate: string;
  status: 'pending' | 'completed' | 'cancelled';
}
