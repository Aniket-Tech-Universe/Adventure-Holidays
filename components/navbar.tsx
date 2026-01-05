"use client";

import { useState, useEffect } from "react";
import { Menu, X, Plane, Phone, FileCheck, Sparkles } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Visa Services", href: "#visa" },
    { name: "Destinations", href: "#destinations" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
            ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 border-b border-cyan-500/20"
            : "bg-gradient-to-b from-slate-900/90 to-transparent backdrop-blur-sm"
            }`}>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo with premium glow */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-amber-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-amber-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                <Plane className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex items-center gap-1">
                                <span className="text-xl font-bold text-white">Adventure</span>
                                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Holidays</span>
                            </div>
                            <div className="text-xs text-slate-400 -mt-0.5 flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-amber-400" />
                                Dream • Explore • Discover
                            </div>
                        </div>
                    </a>

                    {/* Desktop Navigation with hover effects */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-slate-300 hover:text-white transition-colors font-medium text-sm group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="tel:08758700282"
                            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm group"
                        >
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                                <Phone className="w-4 h-4" />
                            </div>
                            <span className="hidden lg:inline font-medium">087587 00282</span>
                        </a>
                        <a
                            href="#visa"
                            className="relative group flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-sm overflow-hidden shadow-lg shadow-cyan-500/25"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <FileCheck className="w-4 h-4 relative z-10" />
                            <span className="relative z-10">Apply Visa</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with slide animation */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                <div className="bg-slate-900/98 backdrop-blur-xl border-t border-cyan-500/20 px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-slate-300 hover:text-white transition-colors font-medium py-2 hover:translate-x-2 transform duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-white/10 space-y-4">
                        <a
                            href="tel:08758700282"
                            className="flex items-center gap-2 text-cyan-400 py-2"
                        >
                            <Phone className="w-4 h-4" />
                            <span>087587 00282</span>
                        </a>
                        <a
                            href="#visa"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 btn-primary"
                        >
                            <FileCheck className="w-4 h-4" />
                            Apply for Visa
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
