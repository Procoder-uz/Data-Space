import React from 'react';
import { LogoIcon } from './icons/LogoIcon';
import { TelegramIcon } from './icons/TelegramIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { FacebookIcon } from './icons/FacebookIcon';

const SocialLink: React.FC<{ href: string; 'aria-label': string; children: React.ReactNode }> = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300" {...props}>
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} DATA SPACE. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;