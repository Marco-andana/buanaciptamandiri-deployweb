import React, { useState, useEffect } from 'react';
import Header from './Header'; // Pastikan nama file dan path ini benar

const navLinks = [
    { title: 'Tentang Kami', href: '#about' },
    { title: 'Testimonial', href: '#testi' }
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    {/* ===== PERUBAHAN DI SINI ===== */}
                    {/* Bagian Kiri: Logo dan Judul */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center gap-3">
                            {/* Tambahkan tag img untuk logo */}
                            <img 
                                src="/logo.png" 
                                alt="Buana Cipta Mandiri Logo" 
                                className="h-12 w-auto" // Atur tinggi logo, lebar akan otomatis menyesuaikan
                            />
                           <Header /> {/* Komponen Header Anda */}
                        </a>
                    </div>
                    {/* =============================== */}

                    {/* Bagian Tengah: Link Navigasi Desktop */}
                    <ul className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <a href={link.href} className="text-base font-semibold text-gray-600 hover:text-red-500 group transition-colors duration-300">
                                    {link.title}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-500"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Bagian Kanan: Tombol CTA Desktop */}
                    <div className="hidden lg:block">
                        <a href="#find" className="inline-block bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition-colors duration-300">
                            Temukan Kami
                        </a>
                    </div>
                    
                    {/* Tombol Hamburger untuk Mobile */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
                            <div className="space-y-2">
                                <span className={`block w-8 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                                <span className={`block w-8 h-0.5 bg-gray-800 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`block w-8 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                            </div>
                        </button>
                    </div>

                </div>
            </div>

            {/* Menu Dropdown untuk Mobile */}
            <div className={`lg:hidden absolute top-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <ul className="flex flex-col items-center justify-center h-screen space-y-8">
                     {navLinks.map((link) => (
                        <li key={link.title}>
                            <a href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-gray-800 hover:text-red-500">
                                {link.title}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#find" onClick={() => setIsMenuOpen(false)} className="bg-red-500 text-white font-bold py-3 px-8 rounded-full text-2xl hover:bg-red-600 transition-colors duration-300">
                            Temukan Kami
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;