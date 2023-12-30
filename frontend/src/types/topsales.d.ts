export interface ProductData {
  id: number;
  productName: string;
  mainImage: string;
  otherImages: string;
  description: string;
  tags: string;
  brand: string;
  // mfg: Date;
  type: string;
  price: number;
  discountPrice: number;
  stock: number;
  status: string;
  category: string;
  [key: string]: string;
}
