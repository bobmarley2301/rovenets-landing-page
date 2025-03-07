import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Review } from "../types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import userIcon from "../images/User Profile Icon.png";

const reviews = [
  {
    id: 1,
    name: "Анна Петренко",
    imageReviewer:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    text: "Чудова якість та увага до деталей! Мій рюкзак виглядає просто чарівно і дуже зручний у використанні.",
    rating: 5,
    imageReview: "https://placehold.co/500x400",
  },
  {
    id: 2,
    name: "Максим Коваленко",
    imageReviewer:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    text: "Замовляв індивідуальну сумку. Результат перевершив всі мої очікування. Рекомендую!",
    rating: 5,
    imageReview: "https://placehold.co/500x400",
  },
  {
    id: 3,
    name: "Олена Сидоренко",
    imageReviewer:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    text: "Дуже задоволена якістю та швидкістю виготовлення. Сумка вийшла просто чудова!",
    rating: 5,
    imageReview: "https://placehold.co/500x400",
  },
  {
    id: 4,
    name: "Іван Мельник",
    imageReviewer:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
    text: "Відмінна робота! Рюкзак виготовлений з дотриманням всіх моїх побажань. Дякую!",
    rating: 5,
    imageReview: "https://placehold.co/500x400",
  },
];

const Reviews = () => {
  const [isBlured, setIsBlured] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <section id="reviews" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-amber-900">
            Відгуки наших клієнтів
          </h2>
          <p className="text-amber-800 text-lg">
            Що кажуть про нас ті, хто вже придбав наші вироби
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4 sm:px-6 md:px-8"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-xl border border-amber-200 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="relative cursor-pointer group w-14 h-14"
                    onClick={() => setSelectedImage(review.imageReviewer)}
                  >
                    <img
                      src={review.imageReviewer}
                      alt={review.name}
                      className="w-full h-full rounded-full object-cover border-2 border-amber-300 transition-transform duration-200 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">
                      {review.name}
                    </h3>
                    <div className="flex text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-amber-800 text-sm leading-relaxed">
                  {review.text}
                </p>
                {review.imageReview && (
                  <div className="mt-4 flex justify-center">
                    <img
                      src={review?.imageReview || userIcon}
                      alt="User Review"
                      className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg object-cover cursor-pointer"
                      onClick={() => {
                        setSelectedImage(review.imageReview || userIcon);
                        setSelectedReview(review);
                        setIsBlured(true);
                      }}
                    />
                  </div>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Блюр для всієї сторінки */}
        {isBlured && (
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm z-10"
            onClick={() => setIsBlured(false)}
          ></div>
        )}

        {/* Модальне вікно для перегляду фото */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed inset-0 z-20 flex items-center justify-center p-4 w-full h-auto min-h-[60vh] rounded-t-3xl"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-4xl w-full bg-white p-5 rounded-xl shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setIsBlured(false);
                  }}
                  className="absolute -top-10 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-20 mb-2"
                  aria-label="Закрити"
                >
                  <XMarkIcon className="h-6 w-6 text-amber-900 hover:text-amber-700 " />
                </button>

                {/* Інформація про відгук */}
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-4">
                    <img
                      src={selectedReview?.imageReviewer}
                      alt={selectedReview?.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900">
                    {selectedReview?.name}
                  </h3>
                  <div className="flex justify-center text-amber-500 mb-2">
                    {[...Array(selectedReview?.rating || 0)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    {selectedReview?.text}
                  </p>
                </div>
                {selectedImage && (
                  <div className="flex justify-center">
                    <img
                      src={selectedImage}
                      alt="Фото клієнта"
                      className="w-full max-w-md h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/YOUR_INSTAGRAM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-900 hover:text-amber-800"
          >
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="mr-2 underline"
            >
              Більше відгуків на Instagram
            </motion.span>

            <motion.svg
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
