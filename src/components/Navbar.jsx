import React, { useState } from "react";
import Logo from "../assets/img/Aliciadelriohalflogo.png"
import { Instagram } from "lucide-react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full py-4 pe-5 md:px-8  top-0 left-0 z-50">
            <div className="max-w-9/8 mx-auto flex items-center gap-5 justify-between">
                {/* Logo */}
                
                <div className="text-2xl flex items-center ms-3 gap-3 text-alicia-500">
                    <img src={Logo} alt="" className="w-10"/>
                    Alicia del Río
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex">
                    <a href="#about" className="mx-4 text-alicia-600 hover:text-alicia-700 transition-colors">
                        Clases
                    </a>
                    <a href="#classes" className="mx-4 text-alicia-600 hover:text-alicia-700 transition-colors">
                        Blog
                    </a>
                    <a href="#contact" className="mx-4 text-alicia-600 hover:text-alicia-700 transition-colors">
                        Contacto
                    </a>

                    <a
        href="https://instagram.com/tu_usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-4 text-alicia-600 hover:text-alicia-700 transition-colors"
    >
        <Instagram className="w-5 h-5" />
    </a>


                </div>

                {/* Botón Hamburguesa */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-alicia-500 transition-all duration-300 ${
                            isOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-alicia-500 transition-all duration-300 ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-alicia-500 transition-all duration-300 ${
                            isOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    ></span>
                </button>
            </div>

            {/* Menu Mobile */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col items-center pt-4 pb-2 space-y-4">
                    <a
                        href="#about"
                        onClick={toggleMenu}
                        className="text-alicia-400 hover:text-alicia-600 transition-colors text-lg"
                    >
                        Blog
                    </a>
                    <a
                        href="#classes"
                        onClick={toggleMenu}
                        className="text-alicia-400 hover:text-alicia-600 transition-colors text-lg"
                    >
                        Clases
                    </a>
                    <a
                        href="#contact"
                        onClick={toggleMenu}
                        className="text-alicia-400 hover:text-alicia-600 transition-colors text-lg"
                    >
                        Contacto
                    </a>
                </div>
            </div>
        </nav>
    );
}