"use client";

import { MapPin, Phone, Clock, Send, Accessibility, Heart, Globe, Plane, CheckCircle2, Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <section id="contact" className="section-padding w-full bg-slate-950 relative overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]" />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-semibold">Get In Touch</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Start Your <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Ready for your next international adventure? Contact us for visa assistance, tour bookings, or custom travel plans.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Side - Map and Contact Info */}
                    <div className="space-y-6">
                        {/* Google Map Embed */}
                        <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169428!2d73.18097!3d22.31008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sKarelibagh%2C%20Vadodara%2C%20Gujarat%20390018!5e0!3m2!1sen!2sin!4v1704451200000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale"
                            />
                            {/* Map overlay with address */}
                            <div className="absolute bottom-4 left-4 right-4 z-20">
                                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white text-sm">Adventure Holidays Office</div>
                                        <div className="text-slate-400 text-xs">Dwarkadhish Complex, Sama-Savli Rd, Karelibagh</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a href="tel:08758700282" className="glass-card rounded-2xl p-5 group hover:border-cyan-500/30 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Phone className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400 mb-0.5">Call Us Now</div>
                                        <div className="text-cyan-400 font-bold text-lg group-hover:text-cyan-300 transition-colors">087587 00282</div>
                                    </div>
                                </div>
                            </a>

                            <div className="glass-card rounded-2xl p-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400 mb-0.5">Business Hours</div>
                                        <div className="text-white font-semibold">Tue-Sun: 10AM-7PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features Pills */}
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors">
                                <Globe className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm text-slate-300">UAE Visa Expert</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-colors">
                                <Plane className="w-4 h-4 text-amber-400" />
                                <span className="text-sm text-slate-300">Flight Bookings</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors">
                                <Accessibility className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm text-slate-300">Accessible</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:border-pink-500/30 transition-colors">
                                <Heart className="w-4 h-4 text-pink-400" />
                                <span className="text-sm text-slate-300">LGBTQ+ Friendly</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="relative">
                        {/* Form glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-transparent to-amber-500/20 rounded-3xl blur-xl opacity-50" />

                        <div className="relative glass-card rounded-2xl p-6 lg:p-8 border-white/10 hover:border-cyan-500/20 transition-colors min-h-[480px] flex flex-col justify-center">
                            {isSubmitted ? (
                                <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                                    <p className="text-slate-400 mb-8 max-w-xs mx-auto">
                                        Thanks for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                                            <Send className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Send Us a Message</h3>
                                            <p className="text-sm text-slate-400">We'll respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                                                    Your Name
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="John Doe"
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
                                                    Phone Number
                                                </label>
                                                <input
                                                    required
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="+91 98765 43210"
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                                                    Email Address
                                                </label>
                                                <input
                                                    required
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="you@example.com"
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="service" className="block text-sm font-medium text-slate-300">
                                                    Service Needed
                                                </label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none cursor-pointer"
                                                >
                                                    <option value="" className="bg-slate-900">Select a service</option>
                                                    <option value="uae-visa" className="bg-slate-900">UAE Tourist Visa</option>
                                                    <option value="transit-visa" className="bg-slate-900">UAE Transit Visa</option>
                                                    <option value="dubai-tour" className="bg-slate-900">Dubai Tour Package</option>
                                                    <option value="singapore-tour" className="bg-slate-900">Singapore Tour</option>
                                                    <option value="thailand-tour" className="bg-slate-900">Thailand Tour</option>
                                                    <option value="custom" className="bg-slate-900">Custom Package</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                                                Your Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                placeholder="Tell us about your travel plans..."
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none resize-none"
                                            />
                                        </div>

                                        {/* Form features */}
                                        <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                                            <div className="flex items-center gap-1.5">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                                                <span>No spam, ever</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                                                <span>Quick response</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                                                <span>Free consultation</span>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full relative group overflow-hidden px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            <span className={`absolute inset-0 bg-gradient-to-r from-cyan-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isSubmitting ? 'hidden' : ''}`} />
                                            <span className="relative flex items-center justify-center gap-2">
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Send Message
                                                    </>
                                                )}
                                            </span>
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
