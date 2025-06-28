import { Product } from "./product";

export interface ProductData {
    content: Product[];    // danh sách sản phẩm hiện tại
    totalPages: number;   // tổng số trang
    totalElements: number; // tổng số sản phẩm
    size: number;          // số sản phẩm mỗi trang
    number: number;        // trang hiện tại (0-based)
  }
  