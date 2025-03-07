export type SectionId = "home" | "products" | "about" | "contact" | "reviews" | "order-shipping";

export interface NavItem {
  name: string;
  id: SectionId;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
}
