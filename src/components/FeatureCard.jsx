// src/components/FeatureCard.js

import React from 'react';

const FeatureCard = ({ icon, title, desc }) => {
    return (
        // Efek transisi untuk hover yang mulus
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center
                        hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            
            {/* Ikon */}
            <div className="text-4xl text-red-500 mb-4">
                {icon}
            </div>

            {/* Judul */}
            <h2 className="text-lg font-bold text-gray-800 mb-2 capitalize">
                {title}
            </h2>

            {/* Deskripsi */}
            <p className="text-gray-600 text-sm">
                {desc}
            </p>
        </div>
    );
}

export default FeatureCard;