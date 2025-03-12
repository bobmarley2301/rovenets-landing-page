import React from "react";
import { Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
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
  const { t } = useTranslation();

  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контактна інформація */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-100">
              {t("footer.contacts", "Контакти")}
            </h3>
            <div className="space-y-2">
              <p className="flex items-center text-amber-100">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <a
                  href={`tel:${t("contact.info.phone.value", "+380991234567")}`}
                  className="hover:text-amber-200"
                >
                  {t("contact.info.phone.display", "+38 (099) 123-45-67")}
                </a>
              </p>
              <p className="flex items-center text-amber-100">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <a
                  href={`mailto:${t(
                    "contact.info.email.value",
                    "info@rovenets.com"
                  )}`}
                  className="hover:text-amber-200"
                >
                  {t("contact.info.email.display", "info@rovenets.com")}
                </a>
              </p>
              <p className="flex items-center text-amber-100">
                <MapPinIcon className="h-5 w-5 mr-2" />
                {t("contact.info.address.value", "м. Київ, вул. Прикладна, 1")}
              </p>
            </div>
          </div>

          {/* Соціальні мережі */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-100">
              {t("footer.socialTitle", "Соціальні мережі")}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 hover:text-amber-200"
                aria-label={t("footer.social.instagram", "Instagram")}
              >
                <PhotoIcon className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 hover:text-amber-200"
                aria-label={t("footer.social.facebook", "Facebook")}
              >
                <UserGroupIcon className="h-6 w-6" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-100 hover:text-amber-200"
                aria-label={t("footer.social.telegram", "Telegram")}
              >
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Робочий час */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-100">
              {t("footer.workingHours.title", "Робочий час")}
            </h3>
            <div className="space-y-2 text-amber-100">
              <p>{t("footer.workingHours.weekdays", "Пн-Пт: 10:00 - 19:00")}</p>
              <p>{t("footer.workingHours.saturday", "Сб: 11:00 - 17:00")}</p>
              <p>{t("footer.workingHours.sunday", "Нд: Вихідний")}</p>
            </div>
          </div>
        </div>

        {/* Копірайт */}
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-100">
          <p>
            © {new Date().getFullYear()} Rovenets.{" "}
            {t("footer.copyright", "Всі права захищено.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
