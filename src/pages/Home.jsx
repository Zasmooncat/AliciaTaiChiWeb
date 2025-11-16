import React from "react";
import Hero from "../components/Hero";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import MiddleAction from "../components/MiddleAction";
import MiddleInfo from "../components/MiddleInfo";
import Separador from "../components/separador";






export default function LandingPage() {
  return (
    <div className=" mx-auto min-h-screen flex flex-col">

      <Navbar />
      <Hero />
      <MiddleAction />
      <MiddleInfo />
      <Separador />
      <Footer />

      
    </div>
  );
}



