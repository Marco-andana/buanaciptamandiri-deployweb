import React from "react";
import sakamitsufp from "/src/assets/sakamitsu_fuel_pump.png"; // Pastikan path ini benar
import { IoShieldCheckmarkOutline, IoRocketOutline, IoCubeOutline } from 'react-icons/io5';

// Komponen kecil untuk daftar fitur agar kode utama lebih rapi
const FeaturePoint = ({ icon, title, children }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 text-red-500 text-2xl mt-1 mr-4">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-bold text-gray-900">{title}</h4>
            <p className="mt-1 text-gray-600">{children}</p>
        </div>
    </div>
);

function AboutUs() {
    return (
        <div id="about" className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Layout Grid Utama: 1 kolom di mobile, 2 kolom di desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Kolom 1: Gambar Produk */}
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <img 
                            src={sakamitsufp} 
                            alt="Sakamitsu Fuel Pump" 
                            className="rounded-md shadow-xl w-full h-auto object-cover"
                        />
                    </div>

                    {/* Kolom 2: Teks Deskripsi */}
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                            Tentang Kami
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Buana Cipta Mandiri adalah perusahaan yang bergerak di bidang penjualan sparepart dan accesories mobil. Kami menyediakan berbagai macam produk berkualitas tinggi dengan harga terjangkau.
                        </p>
                        
                        {/* Daftar Poin Utama dengan Ikon */}
                        <div className="space-y-6 pt-4">
                            <FeaturePoint icon={<IoShieldCheckmarkOutline />} title="Kualitas & Garansi Terjamin">
                                Kami memiliki komitmen untuk memberikan pelayanan terbaik, kepuasan pelanggan, dan garansi produk.
                            </FeaturePoint>
                            <FeaturePoint icon={<IoRocketOutline />} title="Pengiriman Cepat & Tepat Waktu">
                                Dengan waktu pengiriman yang cepat, kami menjamin kepuasan pelanggan dan layanan purna jual yang baik.
                            </FeaturePoint>
                            <FeaturePoint icon={<IoCubeOutline />} title="Produk Lengkap">
                                Menyediakan berbagai macam produk sparepart, oli, ban, dan aksesoris untuk berbagai merek mobil ternama.
                            </FeaturePoint>
                        </div>

                        {/* Tombol Call to Action */}
                        <div className="pt-4">
                            <a 
                                href="#find" // Arahkan ke section kontak atau produk
                                className="inline-block bg-red-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-600 transition-colors duration-300"
                            >
                                Hubungi Kami
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutUs;