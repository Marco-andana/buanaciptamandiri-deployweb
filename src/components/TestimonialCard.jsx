// src/components/TestimonialCard.js

import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // Kita akan gunakan ikon kutipan

const TestimonialCard = ({ img, name, from, desc }) => {
    return (
        // Gunakan h-full agar kartu mengisi slide dan flex untuk alignment
        <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col relative overflow-hidden">
            {/* Ikon kutipan sebagai elemen dekoratif */}
            <FaQuoteLeft className="absolute top-6 left-6 text-7xl text-gray-100 -z-0" />
            
            {/* Konten testimoni */}
            <div className="relative z-10 flex flex-col flex-grow">
                <p className="text-gray-600 text-base mb-6 flex-grow">
                    {desc}
                </p>
                
                {/* Bagian Author di bawah */}
                <div className="flex items-center mt-auto">
                    <img 
                        src={img} 
                        alt={name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-red-500"
                    />
                    <div className="ml-4">
                        <p className="font-bold text-lg text-gray-900">{name}</p>
                        <p className="text-sm text-gray-500">{from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;