import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Menggunakan ikon dari react-icons

const Contact = () => {
    return (
        // Gunakan link wa.me yang benar dengan https
        <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://wa.me/6281517078722" 
            // Posisi tetap di pojok kanan bawah, z-index tinggi agar selalu di atas
            className="fixed bottom-5 right-5 z-50 group"
        >
            <div 
                className="flex items-center justify-center gap-3 
                           bg-green-500 text-white font-bold 
                           py-3 px-4 rounded-full shadow-xl
                           transition-all duration-300 ease-in-out
                           hover:bg-green-600 hover:shadow-2xl hover:scale-105"
            >
                {/* Ikon WhatsApp */}
                <FaWhatsapp className="text-2xl" />

                {/* Teks ini hanya akan muncul di layar sm (640px) ke atas */}
                <span className="hidden sm:inline text-base">
                    Our Whatsapp
                </span>
            </div>
        </a>
    );
}

export default Contact;