// src/pages/index.js
import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";
import OrderShipping from "../components/OrderShipping";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LanguageSwitcher from "../components/LanguageSwitcher"; // Імпортуємо компонент
import "../utils/i18n"

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <main>
      
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Reviews />
      <WhyChooseUs />
      <OrderShipping />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
