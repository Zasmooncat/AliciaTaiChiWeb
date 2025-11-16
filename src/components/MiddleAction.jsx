import React from "react";
import Button from "./button";;
import Imagen1 from "../assets/img/ali_compi_playa.jpg";
import RotatingLogo from "./RotatingLogo";


export default function MiddleAction() {
    return (
        <>

            {/* Llamada a la acción intermedia */}
            <section className="px-6 py-10 text-center">

                <div className="md:bg-white/50 rounded-xl mx-auto max-w-7xl md:p-8 flex flex-col md:flex-row gap-12">

                    {/* IMAGEN */}
                    <img
                        src={Imagen1}
                        alt="ali tai chi"
                        className="w-full md:w-1/2 object-cover shadow-xl rounded-xl"
                    />

                    {/* TEXTO */}
                    <div className="w-full relative p-4 md:w-1/2 ">

                        <h1 className="text-3xl md:text-4xl text-start font-bold text-alicia-400 pb-8">
                            Cursos y prácticas de Tai Chi
                        </h1>

                        <p className="text-alicia-400 text-start md:text-justify leading-relaxed">

                            En estos <a className="font-bold underline" href="cursos">cursos online</a> nos centraremos en los fundamentos básicos, explicados de una forma que cualquier principiante pueda entender, pero también con información interna y matices que los estudiantes más avanzados encontrarán valiosos. Las instrucciones paso a paso y la repetición te pondrán en el camino adecuado para tu práctica de tai chi.

                            Con el tiempo, un entrenamiento constante puede transformar el sistema nervioso para reaccionar de forma contraria a lo habitual; en lugar de responder con tensión y fuerza ante situaciones estresantes de la vida, podremos reaccionar con una conciencia tranquila, enfocada, y trabajar hacia una solución más armoniosa y pacífica.

                        </p>
                        <h2 className="text-2xl md:text-3xl text-start mt-8 font-bold text-alicia-400">
                            Empieza hoy mismo
                        </h2>
                        <p className="mt-4 text-alicia-400 text-justify max-w-2xl mx-auto">
                            Tu primera clase puede ser el primer paso hacia una vida más tranquila
                            y saludable. No necesitas experiencia previa. ¡Te espero en la clase de prueba!

                        </p>
                        <Button className="mt-6 cursor-pointer  md:left-0 w-70 px-8 py-4 text-lg rounded-2xl  shadow-lg">
                            Quiero mi clase de prueba
                        </Button>

                    </div>
                </div>



            </section>
        </>
    );
}