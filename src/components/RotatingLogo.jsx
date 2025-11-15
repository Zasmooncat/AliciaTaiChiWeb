import React from "react";
import Logo from "../assets/img/Aliciadelriofishlogo.png"


export default function RotatingLogo({ src, alt = "Logo", className = "" }) {
  return (
    <>
      <div className="inline-block w-40">
        <img 
          src={Logo} 
          alt={alt} 
          className={`animate-spin-slow ${className}`}
        />
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
}