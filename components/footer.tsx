import { Plane, MapPin, Phone, Facebook, Instagram, Youtube, Mail, Globe, Award, Shield, HeartHandshake } from "lucide-react";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Visa Services", href: "#visa" },
    { name: "Destinations", href: "#destinations" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#contact" },
];

const destinations = [
    "Dubai, UAE",
    "Abu Dhabi, UAE",
    "Singapore",
    "Thailand",
    "Bali, Indonesia",
    "Maldives",
];

const services = [
    "UAE Tourist Visa",
    "UAE Transit Visa",
    "Flight Bookings",
    "Hotel Reservations",
    "Travel Insurance",
    "Custom Packages",
];

export default function Footer() {
    return (
        <footer className="relative w-full bg-slate-950 overflow-hidden">
            {/* Premium Background Pattern */}
            <div className="absolute inset-0">
                {/* World map pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cpath fill='%2306b6d4' d='M100,200 Q150,150 200,180 T300,160 T400,190 T500,170 T600,200 T700,180 T800,210 T900,190 L900,300 L100,300 Z'/%3E%3C/svg%3E")`,
                        backgroundSize: "cover",
                    }}
                />
                {/* Gradient overlays */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Top decorative border */}
            <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                {/* Trust Badges Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 pb-12 border-b border-white/5">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
                            <Award className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">10+</div>
                            <div className="text-xs text-slate-400">Years Experience</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center">
                            <HeartHandshake className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">500+</div>
                            <div className="text-xs text-slate-400">Happy Clients</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center">
                            <Globe className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">15+</div>
                            <div className="text-xs text-slate-400">Destinations</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">100%</div>
                            <div className="text-xs text-slate-400">Visa Success</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand - Full width on mobile, 1 col on desktop */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <a href="#home" className="flex items-center gap-3 mb-6 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-amber-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-amber-500 flex items-center justify-center">
                                    <Plane className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <span className="text-xl font-bold text-white">Adventure</span>
                                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent"> Holidays</span>
                                <div className="text-xs text-slate-400">Dream • Explore • Discover</div>
                            </div>
                        </a>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            Your trusted partner for UAE visas and international travel adventures since 2014.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:from-cyan-500/20 hover:to-cyan-500/10 transition-all group">
                                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:from-pink-500/20 hover:to-pink-500/10 transition-all group">
                                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:from-red-500/20 hover:to-red-500/10 transition-all group">
                                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 inline-block transform duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            Services
                        </h4>
                        <ul className="space-y-2.5">
                            {services.map((service) => (
                                <li key={service}>
                                    <a
                                        href="#visa"
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 inline-block transform duration-200"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            Destinations
                        </h4>
                        <ul className="space-y-2.5">
                            {destinations.map((dest) => (
                                <li key={dest}>
                                    <a
                                        href="#destinations"
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 inline-block transform duration-200"
                                    >
                                        {dest}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 group">
                                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                                    <MapPin className="w-4 h-4 text-cyan-400" />
                                </div>
                                <span className="text-slate-400 text-sm leading-relaxed">
                                    Karelibagh, Vadodara,<br />Gujarat 390022
                                </span>
                            </li>
                            <li>
                                <a href="tel:08758700282" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group">
                                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                                        <Phone className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <span>087587 00282</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@adventureholidays.in" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group">
                                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                                        <Mail className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <span className="break-all">info@adventureholidays.in</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Adventure Holidays. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy Policy</a>
                            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms of Service</a>
                        </div>
                        <p className="text-slate-500 text-sm flex items-center gap-1">
                            Crafted with ❤️ by{" "}
                            <a
                                href="https://axoraco.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                            >
                                AXORACO
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
