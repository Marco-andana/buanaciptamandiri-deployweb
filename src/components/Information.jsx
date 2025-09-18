import React from "react";
import { TypeAnimation } from 'react-type-animation';

// Impor semua aset seperti sebelumnya
import suzuki from "/src/assets/suzuki.png";
import daihatsu from "/src/assets/daihatsu.png";
import ford from "/src/assets/ford.png";
import honda from "/src/assets/honda.png";
import hyundai from "/src/assets/hyundai.png";
import isuzu from "/src/assets/isuzu.png";
import kia from "/src/assets/kia.png";
import mazda from "/src/assets/mazda.png";
import mitsubishi from "/src/assets/mitsubishi.png";
import nissan from "/src/assets/nissan.png";
import timor from "/src/assets/timor.png";
import toyota from "/src/assets/toyota.png";
import wuling from "/src/assets/wuling.png";

import sakamitsu_fuel_pump from "/src/assets/sakamitsu_fuel_pump.png";
import sakamitsu_fuel_pump_assy from "/src/assets/sakamitsu_fuel_pump_assy.png";
import sakamitsu from "/src/assets/sakamitsu.png";
import ignition_coil from "/src/assets/ignition_coil.png";

const brandLogos = [
    { src: suzuki, alt: "Suzuki" }, { src: daihatsu, alt: "Daihatsu" },
    { src: ford, alt: "Ford" }, { src: honda, alt: "Honda" },
    { src: hyundai, alt: "Hyundai" }, { src: isuzu, alt: "Isuzu" },
    { src: kia, alt: "Kia" }, { src: mazda, alt: "Mazda" },
    { src: mitsubishi, alt: "Mitsubishi" }, { src: nissan, alt: "Nissan" },
    { src: timor, alt: "Timor" }, { src: toyota, alt: "Toyota" },
    { src: wuling, alt: "Wuling" },
];

const ProductPoster = ({ imageSrc, altText }) => (
    <div className="w-full">
        <img 
            src={imageSrc} 
            alt={altText} 
            className="rounded-lg shadow-2xl w-full h-auto object-contain
                       hover:scale-105 transition-transform duration-300" 
        />
    </div>
);

function Information() {
    return (
        <section id="home" className="bg-white pt-24 pb-12 sm:pt-32 sm:pb-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                    
                    <div className="hidden lg:flex flex-col gap-8 justify-center">
                        <ProductPoster imageSrc={ignition_coil} altText="Ignition Coil" />
                    </div>

                    {/* PERUBAHAN UTAMA DI BAWAH INI */}
                    <div className="lg:col-span-2 flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold capitalize text-gray-900 tracking-tight">
                            Menyediakan Sparepart & Aksesoris Mobil
                        </h1>
                        <TypeAnimation
                            sequence={[
                                'Bergaransi', 1000,
                                'Terpercaya', 1000,
                                'Harga Terjangkau', 1000,
                                'Pelayanan Terbaik', 1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-2xl md:text-3xl font-semibold text-red-500 block mt-2"
                            repeat={Infinity}
                        />
                        {/* Class lg:mx-0 dihapus dari paragraf agar bisa rata tengah */}
                        <p className="mt-6 text-lg text-gray-600 max-w-xl">
                            Temukan semua kebutuhan suku cadang dan aksesoris mobil Anda dari berbagai merek ternama. Kualitas terjamin dengan pelayanan profesional.
                        </p>

                        {/* Class lg:justify-start dihapus dari tombol */}
                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <a href="#products" className="inline-block bg-red-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-red-600 transition-colors duration-300">
                                Lihat Produk
                            </a>
                            <a href="#find" className="inline-block bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-300 transition-colors duration-300">
                                Hubungi Kami
                            </a>
                        </div>
                        
                        <div className="mt-16 w-full">
                            <h2 className="text-xl font-bold text-center text-gray-500">Brand Genuine Terpercaya</h2>
                            <div className="flex flex-wrap justify-center items-center mt-6 gap-6 md:gap-8">
                                {brandLogos.map((logo, index) => (
                                    <img 
                                        key={index} 
                                        src={logo.src} 
                                        alt={logo.alt} 
                                        className="h-8 md:h-9 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <ProductPoster imageSrc={sakamitsu_fuel_pump_assy} altText="Sakamitsu Fuel Pump Assy" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Information;