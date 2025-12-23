import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-wijaya.png";
const HeroSection = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Perjalanan wisata dengan mobil rental" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-rust/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo badge */}
          <div className="inline-block mb-8 animate-fade-in-up" style={{
          animationDelay: "0.1s"
        }}>
            <img src={logo} alt="Wijaya Rent Car" className="h-28 md:h-36 w-auto mx-auto drop-shadow-2xl" />
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight opacity-0 animate-fade-in-up" style={{
          animationDelay: "0.2s"
        }}>
            Perjalanan Nyaman,
            <span className="block text-accent">Harga Bersahabat</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{
          animationDelay: "0.3s"
        }}>
            Sewa mobil terpercaya untuk perjalanan wisata, bisnis, atau keluarga Anda. 
            Armada berkualitas dengan pelayanan profesional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{
          animationDelay: "0.4s"
        }}>
            <a href="#fleet">
              <Button variant="hero" size="xl" className="gap-2 min-w-[200px]">
                Lihat Armada
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="xl" className="min-w-[200px]">
                Booking Sekarang
              </Button>
            </a>
          </div>

          {/* Quick Info */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{
          animationDelay: "0.5s"
        }}>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <div className="p-3 bg-accent/20 rounded-full">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <span className="font-medium">​Batam  </span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <div className="p-3 bg-accent/20 rounded-full">
                <Calendar className="h-5 w-5 text-accent" />
              </div>
              <span className="font-medium">Layanan 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <div className="p-3 bg-accent/20 rounded-full">
                <span className="text-accent font-bold text-lg">10+</span>
              </div>
              <span className="font-medium">Tahun Pengalaman</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>;
};
export default HeroSection;