import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "./button";
import RotatingLogo from "./RotatingLogo";
import Fondo from "../assets/img/taichiii.jpg";

export default function Hero() {
  const phrases = [
    "Cuando el cuerpo fluye, tu vida fluye con él.",
    "Encuentra tu equilibrio interior a través del movimiento.",
    "Cada paso es una danza, cada respiración una oportunidad.",
    "El Tai Chi no es solo movimiento, es meditación en acción.",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const titleRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      const words = titleRef.current.querySelectorAll(".word");
      
      // Animación de entrada
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    };

    animateText();

    // Cambiar frase cada 5 segundos
    const interval = setInterval(() => {
      // Animación de salida
      const words = titleRef.current.querySelectorAll(".word");
      gsap.to(words, {
        opacity: 0,
        y: -30,
        duration: 1.2,
        stagger: 0.05,
        ease: "power2.in",
        onComplete: () => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        },
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [currentPhraseIndex, phrases.length]);

  // Dividir la frase en palabras para aplicar stagger
  const renderAnimatedText = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block mr-2">
        {word}
      </span>
    ));
  };

  return (
    <>
      <div className="flex flex-col justify-center pt-5">
        <section className="items-center justify-center">
          {/* Contenido del Hero */}
          <div className="relative z-10 text-center">
            <div className="relative">

            <img src={Fondo} alt="imagen taichi" className="relative md:w-320 rounded-2xl m-auto md:h-110 object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]" />
            
            
            
            </div>

            <h1
              ref={titleRef}
              className="text-5xl md:text-5xl lg:text-7xl font-bold my-10 text-alicia-500 md:w-4xl lg:w-7xl mx-auto h-[160px]  "
            >
              {renderAnimatedText(phrases[currentPhraseIndex])}
            </h1>

            <p className="md:text-xl bg-alicia100  text-alicia-400 mb-8 pt-5 max-w-4xl mx-auto">
              Descubre el arte del Tai Chi con <strong>Alicia del Río</strong>.
              <br /> Aprende a moverte con intención, cultivando equilibrio,
              calma y bienestar en cada paso.
            </p>
            
           <Button className="cursor-pointer mt-6 w-60 px-8 py-4 text-lg rounded-2xl shadow-lg">
                               Primera clase gratis
                           </Button>

            
          </div>
        </section>
      </div>
    </>
  );
}