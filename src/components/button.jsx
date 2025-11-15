import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-alicia-400 text-white hover:bg-alicia-700 focus:ring-alicia-200 px-6 py-3 shadow-md hover:shadow-lg",
    outline:
      "border border-gray-400 text-gray-700 bg-white hover:bg-gray-100 focus:ring-gray-300 px-6 py-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
