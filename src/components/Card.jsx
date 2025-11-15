import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white border border-gray-200  ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
