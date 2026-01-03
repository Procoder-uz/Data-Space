import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedDataSphere } from './AnimatedDataSphere';
import { Particles } from './Particles';

const Hero: React.FC = () => {
    const scrollToCourses = () => {
        const coursesSection = document.getElementById('courses');
        if (coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section className="min-h-screen flex items-center bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,209,0,0.15)_0%,rgba(255,209,0,0)_50%)]"></div>
          <Particles />
      </div>

      <div className="max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold extrabold text-white leading-tight">
              <span className="block">Zamonaviy kasblarni</span>
              <span className="block text-primary mt-2">biz bilan o'rganing</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-300">
              DATA SPACE - Sifatli ta'lim va amaliy ko'nikmalar orqali IT sohasida muvaffaqiyatli karyera qurish uchun sizning ishonchli hamrohingiz.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/register"
                className="w-full sm:w-auto inline-block bg-primary text-dark font-bold text-lg py-4 px-10 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20"
              >
                Hoziroq yoziling
              </Link>
              <button
                onClick={scrollToCourses}
                className="w-full sm:w-auto inline-block bg-gray-800 text-white font-bold text-lg py-4 px-10 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Kurslarni ko'rish
              </button>
            </div>
          </div>
          
          {/* Animated SVG */}
          <div className="hidden lg:flex items-center justify-center h-[500px]">
            <AnimatedDataSphere />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;