import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import card1 from "../images/card1.webp";
import card2 from "../images/card2.webp";
import card3 from "../images/card3.webp";
import card4 from "../images/card4.webp";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  details: string;
  images: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Sunflower Bag",
    category: "women",
    price: "2500 грн",
    image: card1,
    description: "Універсальний рюкзак з натуральної шкіри",
    details:
      "Рюкзак виготовлений з натуральної шкіри високої якості. Має зручні ремені для регулювання та внутрішні відділення для організації речей. Ідеально підходить для щоденних прогулянок та подорожей.",
    images: [card1, card2, card3, card4],
  },
  {
    id: 2,
    name: "Romantic Dog Bag",
    category: "children",
    price: "1800 грн",
    image: card2,
    description: "Елегантна сумка для щоденних прогулянок",
    details:
      "Сумка з милим принтом собачки. Виготовлена з міцних матеріалів, має зручну ручку та регульований ремінь. Ідеальна для прогулянок та шопінгу.",
    images: [card2, card1, card3, card4],
  },
  {
    id: 3,
    name: "Lily-shaped bag",
    category: "women",
    price: "2800 грн",
    image: card3,
    description: "Просторний рюкзак для подорожей та походів",
    details:
      "Рюкзак у формі лілії з міцних матеріалів. Має водонепроникне покриття та зручні відділення. Ідеально підходить для подорожей та активного відпочинку.",
    images: [card3, card1, card2, card4],
  },
  {
    id: 4,
    name: "koala children's backpack",
    category: "children",
    price: "1500 грн",
    image: card4,
    description: "Компактна сумка для невеликих речей",
    details:
      "Рюкзак з принтом коали. Легкий та зручний, має регульовані ремені та відділення для організації речей. Ідеальний для дітей дошкільного та молодшого шкільного віку.",
    images: [card4, card1, card2, card3],
  },
  // Додайте більше товарів тут
];

const categories = [
  { id: "all", name: "Всі" },
  { id: "women", name: "Жіночі" },
  { id: "children", name: "Дітей" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-amber-900">
            Наша продукція
          </h2>
          <p className="text-amber-800 text-lg">
            Відкрийте для себе унікальні вироби ручної роботи
          </p>
        </motion.div>

        {/* Фільтри */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? "bg-amber-900 text-white"
                  : "bg-white text-amber-900 hover:bg-amber-100 border border-amber-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Галерея товарів */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg border border-amber-100 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-amber-900">
                    {product.name}
                  </h3>
                  <p className="text-amber-800 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold text-amber-900">
                      {product.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          `https://wa.me/YOUR_PHONE_NUMBER?text=Замовлення: ${product.name}`,
                          "_blank"
                        );
                      }}
                      className="bg-amber-900 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition-colors"
                    >
                      Замовити
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Модальне вікно */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 text-amber-900 hover:text-amber-700 z-10"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                  {/* Галерея зображень */}
                  <div className="relative">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={20}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                    >
                      {selectedProduct.images.map(
                        (image: string, index: number) => (
                          <SwiperSlide key={index}>
                            <img
                              src={image}
                              alt={`${selectedProduct.name} - фото ${
                                index + 1
                              }`}
                              className="w-full h-[400px] object-cover rounded-lg"
                            />
                          </SwiperSlide>
                        )
                      )}
                    </Swiper>
                  </div>

                  {/* Інформація про товар */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-playfair text-amber-900">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-2xl font-semibold text-amber-900">
                      {selectedProduct.price}
                    </p>
                    <p className="text-amber-800 text-lg">
                      {selectedProduct.description}
                    </p>
                    <div className="pt-4">
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">
                        Опис
                      </h3>
                      <p className="text-amber-800">
                        {selectedProduct.details}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        window.open(
                          `https://wa.me/YOUR_PHONE_NUMBER?text=Замовлення: ${selectedProduct.name}`,
                          "_blank"
                        );
                      }}
                      className="w-full bg-amber-900 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition-colors mt-6"
                    >
                      Замовити
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Products;
