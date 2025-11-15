import React from "react";
import Button from "./button";;
import Imagen2 from "../assets/img/ali_castillo.jpg";
import RotatingLogo from "./RotatingLogo";


export default function MiddleAction() {
    return (
        <>

            {/* Llamada a la acción intermedia */}
            <section className="md:px-6 py-10 text-center">

                <div className="md:bg-white/50 rounded-xl mx-auto max-w-7xl p-8 flex flex-col md:flex-row gap-12">
                    {/* IMAGEN */}
                    <img
                        src={Imagen2}
                        alt="ali tai chi"
                        className="w-full md:w-1/2 object-cover shadow-xl rounded-xl"
                    />


                    {/* TEXTO */}
                    <div className="w-full relative md:p-4 md:w-1/2 ">

                        <h1 className="text-3xl md:text-4xl text-start font-bold text-alicia-400 pb-8">
                            Alicia del Río: Movimiento con propósito, calma con raíz
                        </h1>

                        <p className="text-alicia-400 text-start leading-relaxed">

                            Alicia del Río es una instructora de Tai Chi cuya enseñanza nace de una profunda convicción: el cuerpo es un territorio de escucha, y el movimiento, una vía para ordenar la vida desde dentro. Su práctica se basa en la presencia, la intención y la elegancia natural del gesto consciente.

                            Para Alicia, el Tai Chi no es solo una disciplina, sino un camino de transformación suave y sostenida. Cada clase es una invitación a detener el ruido, reconectar con la respiración y permitir que la fluidez del cuerpo abra espacios de claridad mental y bienestar emocional.

                            Su formación integra años de estudio en técnicas corporales, movimiento consciente, meditación y filosofía interna del Tai Chi. Ha estudiado con maestros reconocidos y profundizado especialmente en los principios de alineación, enraizamiento y energía interna del estilo Chen.

                            Su valor reside en su capacidad para acompañar a los alumnos no solo en el aprendizaje técnico, sino también en la comprensión de cómo el Tai Chi puede convertirse en una herramienta real para equilibrar cuerpo, mente y vida cotidiana.

                        </p>

                        <p className="mt-4 text-alicia-400 text-justify max-w-2xl mx-auto">
                            Tu primera clase puede ser el primer paso hacia una vida más tranquila
                            y saludable. No necesitas experiencia previa. ¡Te espero en la clase de prueba!

                        </p>




                    </div>

                </div>



            </section>
        </>
    );
}