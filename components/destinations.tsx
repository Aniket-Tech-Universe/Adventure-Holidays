"use client";

import { MapPin, Star, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

const destinations = [
    {
        id: 1,
        name: "Dubai",
        country: "UAE",
        image: "/destinations/dubai.png",
        rating: 4.9,
        badge: "Most Popular",
        badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
        description: "Iconic Burj Khalifa, luxury shopping, and desert adventures",
        highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall"],
        price: "₹45,999",
    },
    {
        id: 2,
        name: "Abu Dhabi",
        country: "UAE",
        image: "/destinations/abudhabi.png",
        rating: 4.8,
        badge: "Adventure",
        badgeColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
        description: "Ferrari World, Grand Mosque, and Yas Island thrills",
        highlights: ["Ferrari World", "Grand Mosque", "Yas Waterworld"],
        price: "₹52,999",
    },
    {
        id: 3,
        name: "Singapore",
        country: "Southeast Asia",
        image: "/destinations/singapore.png",
        rating: 4.8,
        badge: "Family Friendly",
        badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
        description: "Marina Bay, Universal Studios, and Gardens by the Bay",
        highlights: ["Marina Bay Sands", "Sentosa Island", "Universal Studios"],
        price: "₹65,999",
    },
    {
        id: 4,
        name: "Thailand",
        country: "Southeast Asia",
        image: "/destinations/thailand.png",
        rating: 4.7,
        badge: "Budget Friendly",
        badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
        description: "Bangkok temples, Phuket beaches, and rich culture",
        highlights: ["Bangkok", "Phuket", "Pattaya"],
        price: "₹38,999",
    },
    {
        id: 5,
        name: "Bali",
        country: "Indonesia",
        image: "/destinations/bali.png",
        rating: 4.9,
        badge: "Honeymoon",
        badgeColor: "bg-gradient-to-r from-rose-500 to-red-500",
        description: "Tropical paradise with temples, rice terraces, and beaches",
        highlights: ["Ubud", "Seminyak", "Tanah Lot"],
        price: "₹55,999",
    },
    {
        id: 6,
        name: "Maldives",
        country: "Indian Ocean",
        image: "/destinations/maldives.png",
        rating: 5.0,
        badge: "Luxury",
        badgeColor: "bg-gradient-to-r from-yellow-400 to-amber-500",
        description: "Crystal clear waters, overwater villas, and world-class diving",
        highlights: ["Water Villas", "Snorkeling", "Spa Retreat"],
        price: "₹85,999",
    },
];

export default function Destinations() {
    return (
        <section id="destinations" className="relative w-full py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-cyan-400 font-medium">INTERNATIONAL DESTINATIONS</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Explore The <span className="text-gradient">World</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        From the glamour of Dubai to the beaches of Bali — we craft unforgettable international adventures
                    </p>
                </div>

                {/* Destinations Grid - 3x2 with large image cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {destinations.map((destination, index) => (
                        <div
                            key={destination.id}
                            className="group relative rounded-3xl overflow-hidden bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                                {/* Badge */}
                                <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white ${destination.badgeColor}`}>
                                    {destination.badge}
                                </div>

                                {/* Rating */}
                                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <span className="text-sm font-semibold text-white">{destination.rating}</span>
                                </div>

                                {/* Price Tag */}
                                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10">
                                    <span className="text-xs text-slate-400">From</span>
                                    <span className="text-lg font-bold text-white ml-1">{destination.price}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {destination.name}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-slate-400">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{destination.country}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {destination.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {destination.highlights.map((highlight, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-xs bg-white/5 text-slate-300 border border-white/5"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 text-cyan-400 font-semibold hover:from-cyan-500 hover:to-cyan-600 hover:text-white hover:border-transparent transition-all duration-300 group/btn">
                                    View Packages
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
