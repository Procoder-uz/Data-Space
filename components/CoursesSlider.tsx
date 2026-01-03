import React, { useState, useEffect, useCallback } from "react";
import type { Course } from "../types";
import { Link } from "react-router-dom";
import { KidsCodingIcon } from "./icons/KidsCodingIcon";
import { ChevronLeftIcon } from "./icons/ChevronLeftIcon";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";

const courseData: Course[] = [
  {
    title: "Frontend",
    description:
      "HTML, CSS, JavaScript, React kabi zamonaviy veb texnologiyalari bilan tanishing va interaktiv veb-saytlar yarating.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Backend (Python)",
    description:
      "Python, Django va FastAPI yordamida kuchli va masshtablanuvchi server qismini qurishni o'rganing.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"strokeLinejoin="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "computer science",
    description:
      "Ma'lumotlar tahlili, office dasturlari va sun'iy intellekt asoslarini o'rganib, kelajak texnologiyalarini yarating.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Office Pro",
    description:
      "Word, Excel va PowerPoint: ofis ishlarida samaradorlikni oshiring va yuqori sifatli hujjatlar yarating.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    ),
  },
  {
    title: "IT Kids",
    description:
      "Kompyuter bilimlaringizni oshiring, HTML, CSS yordamida kichik veb-saytlar yarating. Qiziqarli loyihalar bilan dasturlash olamiga sayohat qiling!",
    icon: (
     <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-12 w-12"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <circle cx="12" cy="12" r="10" strokeWidth={2} />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M8 10h.01M16 10h.01M8 15c1.5 1.5 6.5 1.5 8 0"
  />
</svg>

    ),
  },
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-gray-900 rounded-xl p-8 h-full flex flex-col border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg transform hover:-translate-y-2">
    <div className="text-primary mb-6">{course.icon}</div>
    <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
    <p className="text-gray-400 flex-grow">{course.description}</p>
    <div className="mt-8">
      <Link
        to="/register"
        className="text-primary font-semibold hover:text-yellow-300 transition-colors"
      >
        Batafsil →
      </Link>
    </div>
  </div>
);

const CoursesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  const getItemsToShow = useCallback(() => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
      setCurrentIndex(0); // Reset index on resize
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getItemsToShow]);

  const maxIndex = Math.max(0, courseData.length - itemsToShow);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="py-20 sm:py-28 bg-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 animate-pan-grid"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
          backgroundSize: "3rem 3rem",
        }}
      ></div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Bizning <span className="text-primary">Kurslarimiz</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            O'z qobiliyatingizga mos yo'nalishni tanlang va professionallar
            qatoriga qo'shiling.
          </p>
        </div>
        <div className="relative max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsToShow)
                }%)`,
              }}
            >
              {courseData.map((course, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-4"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-primary hover:text-dark transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-primary hover:text-dark transition-all duration-300 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesSlider;
