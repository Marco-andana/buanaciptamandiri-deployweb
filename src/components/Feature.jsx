// src/components/Feature.js

import React from "react";
import { featuresData } from "./featuresData"; // Impor data dari file terpisah
import FeatureCard from "./FeatureCard"; // Impor komponen kartu yang baru

function Feature() {
    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Judul Section */}
                <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                    Apa Yang Kami Tawarkan
                </h1>
                
                {/* Grid Layout yang Lebih Baik */}
                {/* 1 kolom di mobile, 2 di tablet, 3 di desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((item, index) => (
                        <FeatureCard 
                            key={index} 
                            icon={item.icon}
                            title={item.title} 
                            desc={item.desc} 
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Feature;