import React from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import tokopedialogo from "/src/assets/tokopedia.jpeg"; 

// Data lokasi dan toko
const locations = [
    {
        name: "Buana Cipta Mandiri",
        address: "Jl. raya Bojongsari km.33 no.2 Ciputat Parung, sawangan depok...",
        mapLink: "URL_GOOGLE_MAPS_BUANA_CIPTA", // GANTI DENGAN LINK YANG BENAR
    },
    {
        name: "Bunjaya Motor",
        address: "Jl. Raya Parung Ruko No.50, Bojongsari Lama, Kec. Bojongsari...",
        mapLink: "URL_GOOGLE_MAPS_BUNJAYA", // GANTI DENGAN LINK YANG BENAR
    }
];

const stores = [
    {
        name: "Buana Cipta Mandiri",
        link: "https://www.tokopedia.com/buanaciptamandiri?entrance_name=search_suggestion_store&source=universe&st=product",
        logo: tokopedialogo,
    },
    {
        name: "Bunjaya Motor",
        link: "https://www.tokopedia.com/bunjayamotor?entrance_name=search_suggestion_store&source=universe&st=product",
        logo: tokopedialogo,
    }
];

// Komponen Kartu untuk Toko Fisik
// PERUBAHAN: Menghapus `h-full` agar kartu bisa lebih pendek
const LocationCard = ({ name, address, mapLink }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="flex items-start gap-4">
            <div className="text-red-500 text-2xl mt-1">
                <FaMapMarkerAlt />
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{address}</p>
            </div>
        </div>
        <div className="mt-auto pt-6">
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-red-500 hover:text-red-700 transition-colors">
                Lihat di Peta
                <FaArrowRight />
            </a>
        </div>
    </div>
);

// Komponen Kartu untuk Toko Online (Tidak ada perubahan)
const OnlineStoresCard = ({ stores }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-red-500 h-full">
        <div className="p-6">
            <h3 className="text-xl font-bold text-center text-gray-900">Kunjungi Toko Online Kami</h3>
            <div className="mt-6 space-y-2">
                {stores.map((store, index) => (
                    <a 
                        key={index} 
                        href={store.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between gap-4 p-4 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                        <div className="flex items-center gap-4">
                            <img src={store.logo} alt="Logo Toko" className="w-12 h-12 rounded-md object-cover"/>
                            <p className="text-lg font-semibold text-gray-800">{store.name}</p>
                        </div>
                        <FaArrowRight className="text-gray-400 group-hover:text-red-500 transition-colors" />
                    </a>
                ))}
            </div>
        </div>
    </div>
);

const FindUs = () => {
    return (
        <div id="find" className="py-16 sm:py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Temukan Kami</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Kunjungi kami secara langsung atau berbelanja online melalui marketplace favorit Anda.
                    </p>
                </div>

                {/* PERUBAHAN: Struktur grid diubah menjadi 2 baris dan 2 kolom di desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8">
                    {/* Kartu Lokasi 1 (Kiri Atas) */}
                    <LocationCard name={locations[0].name} address={locations[0].address} mapLink={locations[0].mapLink} />
                    
                    {/* Kartu Lokasi 2 (Kiri Bawah) */}
                    <LocationCard name={locations[1].name} address={locations[1].address} mapLink={locations[1].mapLink} />

                    {/* Kartu Toko Online (Kolom Kanan, memanjang 2 baris) */}
                    <div className="lg:row-span-2 h-full">
                         <OnlineStoresCard stores={stores} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindUs;