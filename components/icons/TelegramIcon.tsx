import React from "react";

export const TelegramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path d="M22 2L2 9.5l7.5 2.5L12 22l9.5-20zM9.5 12.5L4.5 10l15-6.5-6.5 15-2.5-7.5z" />
  </svg>
);
