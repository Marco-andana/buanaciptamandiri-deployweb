import tokopedia from '/src/assets/tokopedia.jpeg'
import shopee from '/src/assets/shopee.png'
const tokped = 'Tokopedia/Tiktok Online Store'
const shopi = 'Shopee Online Store'

const testimonialData = [
    {
        img: tokopedia,
        name: 'Andi Prasetyo',
        from: tokped,
        desc: 'Belanja di Buana Cipta Mandiri benar-benar memuaskan. Kualitas sparepart-nya sangat bagus dan harganya kompetitif. Pengiriman cepat dan barang dikemas dengan aman. Toko ini sangat direkomendasikan untuk kebutuhan otomotif.'
    },
    {
        img: shopee,
        name: 'Wahyu Setiawan',
        from: shopi,
        desc: 'Saya sudah beberapa kali belanja di Buana Cipta Mandiri dan selalu puas. Pelayanannya ramah dan sangat membantu dalam memilih produk yang tepat. Produk selalu original dan sesuai deskripsi. Sungguh toko terpercaya!'
    },
    {
        img: tokopedia,
        name: 'Lina Sari',
        from: tokped,
        desc: 'Buana Cipta Mandiri punya koleksi aksesoris mobil yang lengkap dan up to date. Saya suka karena navigasi website-nya mudah dan proses transaksi cepat. Barang datang tepat waktu dan sesuai pesanan. Layanan purna jualnya juga oke.'
    },
    {
        img: tokopedia,
        name: 'Wiliam Tanjung',
        from: tokped,
        desc: 'Saya senang belanja di Buana Cipta Mandiri karena pilihan sparepart-nya lengkap. Tim customer service sangat responsif dan profesional. Harga bersaing dan kualitas barang top. Sangat cocok untuk pemilik mobil yang ingin servis mandiri.'
    },
    {
        img: shopee,
        name: 'Sandy Kusuma',
        from: shopi,
        desc: 'Di Buana Cipta Mandiri, saya bisa menemukan sparepart langka yang susah didapat di toko lain. Selain itu, saya merasa aman karena semua produk bergaransi. Proses belanja mudah dan transparan. Sangat puas dengan pelayanannya.'
    },
    {
        img: tokopedia,
        name: 'Qurina Putri',
        from: tokped,
        desc: 'Saya senang karena Buana Cipta Mandiri selalu update produk terbaru. Beli aksesoris mobil jadi lebih mudah dan menyenangkan. Barang selalu datang dalam kondisi baik dan original. Toko ini memang juara dalam hal pelayanan dan kelengkapan.'
    },
    {
        img: tokopedia,
        name: 'Marisa Eliana',
        from: tokped,
        desc: 'Pengalaman saya dengan Buana Cipta Mandiri sangat positif. Customer service-nya membantu saat saya kesulitan memilih sparepart yang cocok. Barang sampai lebih cepat dari perkiraan. Toko ini bisa jadi andalan untuk para pecinta otomotif.'
    },
    {
        img: tokopedia,
        name: 'Brenda Sari',
        from: tokped,
        desc: 'Buana Cipta Mandiri adalah solusi tepat untuk kebutuhan sparepart dan aksesoris mobil. Pilihan produknya lengkap dan selalu tersedia. Proses pemesanan sangat mudah dan pelayanannya responsif. Saya merasa puas dan akan terus langganan.'
    },
    {
        img: shopee,
        name: 'Erwin Febrian',
        from: shopi,
        desc: 'Buana Cipta Mandiri memberikan pengalaman belanja online otomotif yang menyenangkan. Pengiriman cepat dan barang sesuai ekspektasi. Harga terjangkau untuk kualitas premium. Saya pasti akan belanja lagi di sini.'
    },
    {
        img: tokopedia,
        name: 'Yulianto Triadi',
        from: tokped,
        desc: 'Toko Buana Cipta Mandiri benar-benar mengerti kebutuhan pelanggan. Saya beli aksesoris interior dan semuanya pas untuk mobil saya. Produk dijelaskan dengan detail di website, jadi tidak bingung saat memilih. Layanannya cepat dan terpercaya.'
    },
]

const getTestimonialData = () => {
    return testimonialData.map((data, index) => ({
        id: index + 1,
        ...data
    }))
}

export { getTestimonialData };