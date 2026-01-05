import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import VisaServices from "@/components/visa-services";
import Destinations from "@/components/destinations";
import Packages from "@/components/packages";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <Navbar />
            <Hero />
            <VisaServices />
            <Destinations />
            <Packages />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
