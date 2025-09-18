const featureData = [
    {
    title: 'Produk Berkualitas dan Bergaransi',
    desc: 'Kami hanya menyediakan sparepart asli dan aftermarket berkualitas tinggi yang telah teruji.',
},
{
    title: 'Harga Terjangkau dan Transparan',
    desc: 'Dapatkan harga kompetitif tanpa biaya tersembunyi.',
},
{
    title: 'Stok Lengkap untuk Berbagai Merek Mobil',
    desc: 'Kami memiliki stok sparepart yang lengkap untuk berbagai jenis dan merek mobil.',
},
{
    title: 'Pelayanan Cepat dan Ramah',
    desc: 'Tim kami siap membantu Anda dengan cepat dan profesional.',
},
{
    title: 'Kemudahan Pemesanan Online dan Offline',
    desc: 'Nikmati kemudahan memesan sparepart melalui website kami atau datang langsung ke toko.',
},
{
    title: 'Pengiriman Cepat ke Seluruh Indonesia',
    desc: 'Kami bekerja sama dengan jasa ekspedisi terpercaya untuk menjamin pengiriman tepat waktu.',
},
{
    title: 'Konsultasi Teknis Gratis',
    desc: 'Bingung memilih sparepart yang tepat? Tim teknisi kami siap memberi saran gratis agar Anda mendapatkan solusi terbaik sesuai kebutuhan kendaraan',
},
]

const getFeatureData = () => {
    return featureData.map((feature, index) => ({
        id: index + 1,
        ...feature
    }))
}

export { getFeatureData };