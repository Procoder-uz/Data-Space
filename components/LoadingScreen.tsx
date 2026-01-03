import React from 'react';
import { LogoIcon } from './icons/LogoIcon';

interface LoadingScreenProps {
  isExiting: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isExiting }) => {
  return (
    <div 
      className={`fixed inset-0 bg-dark flex flex-col items-center justify-center z-[100] transition-opacity duration-500 ease-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}
      aria-live="polite"
      aria-busy="true"
    >
      <LogoIcon className="w-24 h-24 text-primary animate-logo-pop" />
      <span 
        className="text-2xl font-extrabold text-white tracking-wider mt-4 opacity-0 animate-fade-in-slow"
        style={{ animationDelay: '0.5s' }}
      >
        DATA SPACE
      </span>
    </div>
  );
};

export default LoadingScreen;