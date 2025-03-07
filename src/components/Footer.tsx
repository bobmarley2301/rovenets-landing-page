import React from "react";
import { Link } from "gatsby";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  PhotoIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контактна інформація */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-100">
              Контакти
            </h3>
            <div className="space-y-2">
              <p className="flex items-center text-amber-100">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <a href="tel:+380991234567" className="hover:text-amber-200">
                  +38 (099) 123-45-67
                </a>
              </p>
              <p className="flex items-center text-amber-100">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <a
                  href="mailto:info@rovenets.com"
                  className="hover:text-amber-200"
                >
                  info@rovenets.com
                </a>
              </p>
              <p className="flex items-center text-amber-100">
                <MapPinIcon className="h-5 w-5 mr-2" />
                м. Київ, вул. Прикладна, 1
              </p>
            </div>
          </div>

          {/* Соціальні мережі */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-100">
              Соціальні мережі
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 hover:text-amber-200"
              >
                <PhotoIcon className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 hover:text-amber-200"
              >
                <UserGroupIcon className="h-6 w-6" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 hover:text-amber-200"
              >
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Робочий час */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-100">
              Робочий час
            </h3>
            <div className="space-y-2 text-amber-100">
              <p>Пн-Пт: 10:00 - 19:00</p>
              <p>Сб: 11:00 - 17:00</p>
              <p>Нд: Вихідний</p>
            </div>
          </div>
        </div>

        {/* Копірайт */}
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-100">
          <p>© {new Date().getFullYear()} Rovenets. Всі права захищено.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
