"use client";

import { Check, Star, Users, Clock, Plane, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

const packages = [
    {
        id: 1,
        name: "Dubai Explorer",
        destination: "Dubai, UAE",
        image: "/destinations/dubai.png",
        rating: 4.9,
        duration: "5 Days / 4 Nights",
        groupSize: "2-8 People",
        price: 45999,
        badge: "Bestseller",
        features: [
            "Return Flights (Ahmedabad-Dubai)",
            "4-Star Hotel Stay",
            "Burj Khalifa Ticket",
            "Desert Safari with BBQ",
            "Dubai City Tour",
            "Visa Included",
        ],
    },
    {
        id: 2,
        name: "Abu Dhabi Thrill",
        destination: "Abu Dhabi, UAE",
        image: "/destinations/abudhabi.png",
        rating: 4.8,
        duration: "4 Days / 3 Nights",
        groupSize: "2-6 People",
        price: 52999,
        badge: "Popular",
        features: [
            "Return Flights Included",
            "5-Star Resort Stay",
            "Ferrari World Entry",
            "Sheikh Zayed Mosque Tour",
            "Yas Waterworld Access",
            "All Transfers",
        ],
    },
    {
        id: 3,
        name: "Singapore Delight",
        destination: "Singapore",
        image: "/destinations/singapore.png",
        rating: 4.7,
        duration: "6 Days / 5 Nights",
        groupSize: "2-10 People",
        price: 65999,
        badge: "Family Pick",
        features: [
            "Return Flights",
            "Premium Hotel",
            "Universal Studios",
            "Sentosa Island Tour",
            "Night Safari",
            "Marina Bay Cruise",
        ],
    },
    {
        id: 4,
        name: "Thailand Adventure",
        destination: "Bangkok + Pattaya",
        image: "/destinations/thailand.png",
        rating: 4.6,
        duration: "7 Days / 6 Nights",
        groupSize: "4-12 People",
        price: 38999,
        badge: "Value Deal",
        features: [
            "Return Flights",
            "3-Star Hotels",
            "Coral Island Tour",
            "Bangkok City Tour",
            "Thai Massage",
            "All Breakfasts",
        ],
    },
];

export default function Packages() {
    return (
        <section id="packages" className="relative w-full py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span className="text-sm text-amber-400 font-medium">INTERNATIONAL TOURS</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        All-Inclusive <span className="text-gradient">Packages</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Flights, hotels, visa, and experiences — all bundled at unbeatable prices. No hidden costs.
                    </p>
                </div>

                {/* Packages Grid - 2x2 */}
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className="group relative rounded-3xl overflow-hidden bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Image Side */}
                                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900 hidden md:block" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent md:hidden" />

                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-semibold text-white">
                                        {pkg.badge}
                                    </div>

                                    {/* Plane Icon */}
                                    <div className="absolute bottom-4 left-4 md:hidden">
                                        <Plane className="w-8 h-8 text-cyan-400" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1 p-6 md:p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                                                {pkg.name}
                                            </h3>
                                            <p className="text-slate-400 text-sm flex items-center gap-1.5">
                                                <span>{pkg.destination}</span>
                                                <span className="flex items-center gap-1 ml-2">
                                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                                    {pkg.rating}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-bold text-white">
                                                ₹{pkg.price.toLocaleString()}
                                            </div>
                                            <div className="text-xs text-slate-400">per person</div>
                                        </div>
                                    </div>

                                    {/* Meta Info */}
                                    <div className="flex flex-wrap gap-4 mb-5 text-sm text-slate-400">
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-cyan-400" />
                                            {pkg.duration}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Users className="w-4 h-4 text-cyan-400" />
                                            {pkg.groupSize}
                                        </span>
                                    </div>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        {pkg.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                <span className="text-slate-300 truncate">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 group/btn">
                                        Book This Package
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-10 text-slate-400 text-sm">
                    <Sparkles className="w-4 h-4 inline mr-2 text-amber-400" />
                    Custom packages available on request. Group bookings get 10% off!
                </div>
            </div>
        </section>
    );
}
