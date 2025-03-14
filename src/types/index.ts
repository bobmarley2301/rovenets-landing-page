export type SectionId =
  | "home"
  | "about"
  | "products"
  | "reviews"
  | "why-us"
  | "order-shipping"
  | "contact";

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

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  images?: string[];
  imageReviewer: string;
}
