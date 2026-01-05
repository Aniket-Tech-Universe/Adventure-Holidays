"use client";

import { Star, Quote, CheckCircle, Sparkles } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Mehta",
        location: "Ahmedabad",
        avatar: "R",
        rating: 5,
        trip: "Dubai Explorer Package",
        text: "Got my UAE visa in just 3 days! The Dubai trip was perfectly organized — from Ferrari World to the desert safari. Will definitely book again!",
        color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
    {
        id: 2,
        name: "Priya Sharma",
        location: "Vadodara",
        avatar: "P",
        rating: 5,
        trip: "Singapore Delight",
        text: "Hassle-free visa process and amazing Singapore tour. The team handled everything professionally. Our family had an unforgettable experience!",
        color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
        id: 3,
        name: "Amit Patel",
        location: "Surat",
        avatar: "A",
        rating: 5,
        trip: "Abu Dhabi Thrill",
        text: "Best travel agency in Gujarat! They arranged our Abu Dhabi trip with Ferrari World tickets. Kids are still talking about the roller coasters!",
        color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
        id: 4,
        name: "Kavita Desai",
        location: "Vadodara",
        avatar: "K",
        rating: 5,
        trip: "Thailand Adventure",
        text: "Very responsive team. Got our Thailand visas sorted in no time. The Bangkok + Pattaya package was great value for money!",
        color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
];

const stats = [
    { value: "500+", label: "Happy Travelers" },
    { value: "4.3", label: "Google Rating", icon: Star },
    { value: "100%", label: "Success Rate" },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative w-full py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span className="text-sm text-amber-400 font-medium">TESTIMONIALS</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                            What Our <span className="text-gradient">Travelers</span> Say
                        </h2>
                        <div className="flex items-center gap-3 text-slate-400">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <span>4.3 rating on Google • 18+ reviews</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 lg:gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center glass-card rounded-2xl p-5 min-w-[100px]">
                                <div className="flex items-center justify-center gap-1">
                                    {stat.icon && <stat.icon className="w-5 h-5 text-amber-400 fill-amber-400" />}
                                    <span className="text-2xl font-bold text-cyan-400">{stat.value}</span>
                                </div>
                                <span className="text-xs text-slate-400">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="group relative rounded-3xl overflow-hidden bg-slate-800/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 p-8"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-cyan-500/10 transition-colors" />

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Trip Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
                                <CheckCircle className="w-4 h-4" />
                                {testimonial.trip}
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-slate-400">{testimonial.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Google Review CTA */}
                <div className="text-center mt-12">
                    <a
                        href="https://www.google.com/search?q=Adventure+Holidays+Vadodara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        View on Google Reviews
                    </a>
                </div>
            </div>
        </section>
    );
}
