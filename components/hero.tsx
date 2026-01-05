import { MapPin, ArrowRight, Star, Plane, FileCheck, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Full Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-bg.png"
                    alt="Dubai Skyline"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50" />
            </div>

            {/* Animated Orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-[20%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-[10%] w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-3xl animate-pulse animation-delay-200" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Main Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-amber-500/20 border border-cyan-500/30 mb-8 backdrop-blur-sm">
                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                            <span className="text-sm text-white font-medium">Vadodara&apos;s #1 Dubai Expert • 4.3★ on Google</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
                            <span className="text-gradient">Dream</span>
                            <span className="text-white"> Explore</span>
                            <br />
                            <span className="text-white">Discover</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            Your trusted partner for <span className="text-cyan-400 font-semibold">UAE Visa Services</span>,
                            International Tours & unforgettable adventures to Dubai, Abu Dhabi, Singapore & beyond.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                            <a
                                href="#visa"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 group"
                            >
                                <FileCheck className="w-5 h-5" />
                                Apply for Visa
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="tel:+918753700282"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                            >
                                <Phone className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                                Call Now
                            </a>
                        </div>

                        {/* Location */}
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <span>Karelibagh, Vadodara, Gujarat</span>
                        </div>
                    </div>

                    {/* Right - Stats & Feature Cards */}
                    <div className="hidden lg:block">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-5">
                            {[
                                { value: "500+", label: "Happy Travelers", icon: Plane, color: "cyan" },
                                { value: "UAE", label: "Visa Experts", icon: FileCheck, color: "amber" },
                                { value: "10+", label: "Years Experience", icon: Star, color: "cyan" },
                                { value: "24/7", label: "Support", icon: Phone, color: "amber" },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="group glass-card rounded-2xl p-6 border-l-4 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                    style={{
                                        borderLeftColor: stat.color === 'cyan' ? '#0891b2' : '#f59e0b'
                                    }}
                                >
                                    <stat.icon className={`w-8 h-8 mb-3 ${stat.color === 'cyan' ? 'text-cyan-400' : 'text-amber-400'}`} />
                                    <div className={`text-3xl font-bold ${stat.color === 'cyan' ? 'text-cyan-400' : 'text-amber-400'}`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Featured Destinations Preview */}
                        <div className="mt-6 p-5 glass-card rounded-2xl">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-medium text-slate-400">Popular Destinations</span>
                                <a href="#destinations" className="text-cyan-400 text-sm hover:underline">View All</a>
                            </div>
                            <div className="flex gap-3">
                                {[
                                    { name: "Dubai", img: "/destinations/dubai.png" },
                                    { name: "Singapore", img: "/destinations/singapore.png" },
                                    { name: "Thailand", img: "/destinations/thailand.png" },
                                    { name: "Maldives", img: "/destinations/maldives.png" },
                                ].map((dest, i) => (
                                    <div key={i} className="relative w-16 h-16 rounded-xl overflow-hidden group cursor-pointer">
                                        <Image src={dest.img} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Stats */}
                <div className="mt-12 grid grid-cols-4 gap-3 lg:hidden">
                    {[
                        { value: "500+", label: "Travelers" },
                        { value: "UAE", label: "Visa" },
                        { value: "10+", label: "Years" },
                        { value: "24/7", label: "Support" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center glass-card rounded-xl p-3">
                            <div className="text-lg font-bold text-cyan-400">{stat.value}</div>
                            <div className="text-xs text-slate-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 rounded-full border-2 border-cyan-500/50 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
