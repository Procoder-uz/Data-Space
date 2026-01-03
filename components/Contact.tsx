import React from "react";
import { PhoneIcon } from "./icons/PhoneIcon";
import { TelegramIcon } from "./icons/TelegramIcon";
import { InstaIcon } from "./icons/WebIcon";

const ContactInfo: React.FC<{
  icon: React.ReactNode;
  text: string;
  link: string;
  label: string;
}> = ({ icon, text, link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-900 p-6 rounded-xl flex items-center space-x-6 hover:bg-gray-800 border-2 border-gray-800 hover:border-primary transition-all duration-300 group"
  >
    <div className="bg-dark p-4 rounded-full text-primary group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out">
      {icon}
    </div>
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-white text-lg font-semibold">{text}</p>
    </div>
  </a>
);

const Contact: React.FC = () => {
  return (
    <div className="py-20 sm:py-28 bg-dark border-t border-gray-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Biz bilan <span className="text-primary">bog'laning</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Savollaringiz bormi yoki kursga yozilmoqchimisiz? Biz bilan
            bog'laning, biz yordam berishdan doim mamnunmiz.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          <ContactInfo
            icon={<PhoneIcon />}
            text="+998-91-497-74-44"
            link="tel:+998914977444"
            label="Telefon"
          />
          <ContactInfo
            icon={<TelegramIcon />}
            text="@DATASPACE_ADMIN"
            link="https://t.me/DATASPACE_ADMIN"
            label="Telegram"
          />
          <div className="lg:col-span-2">
            <ContactInfo
              icon={<InstaIcon />}
              text="dataspace.uz"
              link="https://instagram.com/dataspace.uz"
              label="Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
