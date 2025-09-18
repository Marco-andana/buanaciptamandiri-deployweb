// src/components/featuresData.js

import React from 'react';
// Import ikon yang relevan dari react-icons
import { IoShieldCheckmarkOutline, IoPricetagsOutline, IoStorefrontOutline, IoRocketOutline, IoChatbubblesOutline, IoBuildOutline, IoCartOutline } from 'react-icons/io5';

export const featuresData = [
    {
        icon: <IoShieldCheckmarkOutline />,
        title: "Produk Berkualitas Dan Bergaransi",
        desc: "Kami hanya menyediakan sparepart asli dan aftermarket berkualitas tinggi yang telah teruji."
    },
    {
        icon: <IoPricetagsOutline />,
        title: "Harga Terjangkau Dan Transparan",
        desc: "Dapatkan harga kompetitif tanpa biaya tersembunyi."
    },
    {
        icon: <IoStorefrontOutline />,
        title: "Stok Lengkap Untuk Berbagai Merek Mobil",
        desc: "Kami memiliki stok sparepart yang lengkap untuk berbagai jenis dan merek mobil."
    },
    {
        icon: <IoRocketOutline />,
        title: "Pelayanan Cepat Dan Ramah",
        desc: "Tim kami siap membantu Anda dengan cepat dan profesional."
    },
    {
        icon: <IoCartOutline />,
        title: "Kemudahan Pemesanan Online Dan Offline",
        desc: "Nikmati kemudahan memesan sparepart melalui website kami atau datang langsung ke toko."
    },
    {
        icon: <IoBuildOutline />,
        title: "Pengiriman Cepat Ke Seluruh Indonesia",
        desc: "Kami bekerja sama dengan jasa ekspedisi terpercaya untuk menjamin pengiriman tepat waktu."
    },
    {
        icon: <IoChatbubblesOutline />,
        title: "Konsultasi Teknis Gratis",
        desc: "Bingung memilih sparepart yang tepat? Tim teknisi kami siap memberi saran gratis agar Anda mendapatkan solusi terbaik sesuai kebutuhan kendaraan Anda."
    }
];