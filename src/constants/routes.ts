import { SectionId, NavItem } from "../types";

export const SECTIONS: Record<string, SectionId> = {
  HOME: "home",
  CATALOG: "products",
  ABOUT: "about",
  CONTACTS: "contact",
  REVIEWS: "reviews",
  ORDER: "orderShipping",
  WHY_CHOOSE_US: "why-us", // Змінено з "why-us" на "whyChooseUs"
} as const;

export const NAV_ITEMS = [
  {
    id: "home" as SectionId,
    name: "Home",
  },
  {
    id: "about" as SectionId,
    name: "About",
  },
  {
    id: "products" as SectionId,
    name: "Products",
  },
  {
    id: "reviews" as SectionId,
    name: "Reviews",
  },
  {
    id: "why-us" as SectionId,
    name: "Why Us",
  },
  {
    id: "order-shipping" as SectionId,
    name: "Ordering",
  },
  {
    id: "contact" as SectionId,
    name: "Contact",
  },
];

export const SCROLL_OFFSET = 80; // Висота навбару
