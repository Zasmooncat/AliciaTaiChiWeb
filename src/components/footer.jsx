
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";


export default function Footer() {
    return (
        <footer className="px-6 py-12 bg-gray-900 text-gray-200">
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 text-sm">
                <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>Valencia, España</span>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+34 600 123 456</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>contacto@aliciadelrio.com</span>
                </div>
            </div>
            <p className="text-center text-gray-500 mt-6 text-xs">
                © {new Date().getFullYear()} Alicia del Río · Todos los derechos
                reservados
            </p>
        </footer>
    );
}