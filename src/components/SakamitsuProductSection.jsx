import React from 'react';

// Impor semua gambar produk Anda
import ignition_coil from "/src/assets/ignition_coil.png";
import sakamitsu_fuel_pump from "/src/assets/sakamitsu_fuel_pump.png";
import sakamitsu_fuel_pump_assy from "/src/assets/sakamitsu_fuel_pump_assy.png";

// Data produk dalam sebuah array agar mudah dikelola
const productsData = [
    {
        id: 1,
        image: ignition_coil,
        title: "SAKAMITSU Ignition Coil",
        description: "Performa tinggi dan harga terjangkau. Kompatibel dengan berbagai tipe mobil, tahan lama, dan bergaransi."
    },
    {
        id: 2,
        image: sakamitsu_fuel_pump_assy,
        title: "SAKAMITSU Fuel Pump Assy",
        description: "Original Equipment Manufacturing. Menjamin pasokan bahan bakar yang stabil untuk efisiensi mesin maksimal."
    },
    {
        id: 3,
        image: sakamitsu_fuel_pump,
        title: "SAKAMITSU Fuel Pump Core",
        description: "Komponen inti berkualitas tinggi untuk sistem bahan bakar yang andal dan performa yang konsisten."
    }
];

// Komponen kartu produk yang sudah didesain ulang
const ProductCard = ({ image, title, description }) => {
    return (
        // Gunakan flex-col dan h-full agar semua kartu memiliki tinggi yang sama
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-shadow duration-300 hover:shadow-2xl">
            
            {/* Wadah Gambar dengan Aspect Ratio 1:1 (Persegi) */}
            <div className="aspect-square w-full overflow-hidden bg-white">
                <img 
                    src={image} 
                    alt={title} 
                    className="h-full w-full object-contain p-4 transition-transform duration-500 ease-in-out group-hover:scale-105" 
                />
            </div>
            
            {/* Konten Teks */}
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{description}</p>
                 {/* Tombol Aksi (CTA) */}
                <div className="mt-4">
                     <a href="https://www.tokopedia.com/buanaciptamandiri?entrance_name=search_suggestion_store&source=universe&st=product" target='_blank' className="inline-block bg-red-500 text-white font-semibold py-2 px-5 rounded-md text-sm hover:bg-red-600 transition-colors duration-300">
                        Lihat Detail
                    </a>
                </div>
            </div>

        </div>
    );
};


// Komponen utama yang menampilkan semua produk
const SakamitsuProductSection = () => {
    return (
        <section id="products" className="bg-slate-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Produk Unggulan Kami
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Sparepart SAKAMITSU berkualitas tinggi yang dirancang untuk performa dan ketahanan terbaik.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsData.map((product) => (
                        <ProductCard 
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SakamitsuProductSection;