"use client";

import { Check, FileCheck, Plane, Clock, Shield, ArrowRight, Sparkles } from "lucide-react";

const visaServices = [
    {
        id: 1,
        title: "UAE Tourist Visa",
        price: "₹4,999",
        duration: "14 Days / 30 Days / 60 Days",
        processing: "3-5 Working Days",
        popular: true,
        features: [
            "Single Entry",
            "Fast Processing",
            "Insurance Included",
            "24/7 Support",
        ],
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        id: 2,
        title: "Dubai Transit Visa",
        price: "₹2,499",
        duration: "48 Hours / 96 Hours",
        processing: "24-48 Hours",
        popular: false,
        features: [
            "Quick Approval",
            "Stopover Friendly",
            "Budget Option",
            "Airport Pick-up Available",
        ],
        gradient: "from-amber-500 to-orange-600",
    },
    {
        id: 3,
        title: "UAE Employment Visa",
        price: "Contact for Quote",
        duration: "2 Years",
        processing: "7-14 Working Days",
        popular: false,
        features: [
            "Work Permit",
            "PRO Services",
            "Document Attestation",
            "Emirates ID Support",
        ],
        gradient: "from-purple-500 to-indigo-600",
    },
];

const processSteps = [
    { step: 1, title: "Submit Documents", desc: "Passport, photo, and basic details", icon: FileCheck },
    { step: 2, title: "Application Review", desc: "We verify and process your application", icon: Shield },
    { step: 3, title: "Visa Approval", desc: "Receive e-visa via email", icon: Check },
    { step: 4, title: "Travel Ready", desc: "Pack your bags and fly!", icon: Plane },
];

export default function VisaServices() {
    return (
        <section id="visa" className="relative w-full py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-cyan-400 font-medium">UAE VISA SPECIALISTS</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Visa <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Fast, reliable visa processing for UAE — Tourist, Transit, and Employment visas with guaranteed approval support.
                    </p>
                </div>

                {/* Visa Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
                    {visaServices.map((visa, index) => (
                        <div
                            key={visa.id}
                            className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${visa.popular ? "ring-2 ring-cyan-500/50" : ""
                                }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Card Background */}
                            <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-sm" />

                            {/* Popular Badge */}
                            {visa.popular && (
                                <div className="absolute -top-0 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-b-xl bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-bold text-white z-10">
                                    MOST POPULAR
                                </div>
                            )}

                            {/* Card Content */}
                            <div className="relative p-8">
                                {/* Header */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${visa.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                    <FileCheck className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{visa.title}</h3>

                                <div className="mb-6">
                                    <span className={`text-4xl font-bold bg-gradient-to-r ${visa.gradient} bg-clip-text text-transparent`}>
                                        {visa.price}
                                    </span>
                                    {visa.price.startsWith("₹") && <span className="text-slate-400 text-sm ml-2">onwards</span>}
                                </div>

                                {/* Meta */}
                                <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6 pb-6 border-b border-white/10">
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-cyan-400" />
                                        {visa.duration}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Shield className="w-4 h-4 text-cyan-400" />
                                        {visa.processing}
                                    </span>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {visa.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300">
                                            <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${visa.gradient} flex items-center justify-center flex-shrink-0`}>
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r ${visa.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}>
                                    Apply Now
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Timeline */}
                <div className="relative">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white">
                            Simple 4-Step <span className="text-gradient">Process</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <div key={step.step} className="relative group">
                                {/* Connector Line */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-60px)] h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                                )}

                                <div className="flex flex-col items-center text-center p-6 glass-card rounded-2xl group-hover:-translate-y-1 transition-all duration-300">
                                    {/* Step Number */}
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/30">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <div className="text-xs font-bold text-cyan-400 mb-2">STEP {step.step}</div>
                                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-sm text-slate-400">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
