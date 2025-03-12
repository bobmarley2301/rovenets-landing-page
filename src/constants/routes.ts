import { SectionId, NavItem } from "../types";

export const SECTIONS: Record<string, SectionId> = {
  HOME: "home",
  CATALOG: "products",
  ABOUT: "about",
  CONTACTS: "contact",
  REVIEWS: "reviews",
  ORDER: "orderShipping",
  WHY_CHOOSE_US: "why-us",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { name: "Головна", id: SECTIONS.HOME },
  { name: "Про нас", id: SECTIONS.ABOUT },
  { name: "Каталог", id: SECTIONS.CATALOG },
  { name: "Відгуки", id: SECTIONS.REVIEWS },
  { name: "Замовити", id: SECTIONS.ORDER },
  { name: "Контакти", id: SECTIONS.CONTACTS },
] as const;

export const SCROLL_OFFSET = 80; // Висота навбару
