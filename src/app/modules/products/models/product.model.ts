export interface ProductModel {
  name: string;
  price: number;
  isAvailable: boolean;
  categories: string;
  id: string;
  count?: number;
  description?: string;
}
