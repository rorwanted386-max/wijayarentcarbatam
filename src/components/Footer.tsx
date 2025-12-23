import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-wijaya.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              alt="Wijaya Rent Car" 
              className="h-20 w-auto mb-6"
            />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Mitra perjalanan terpercaya Anda. Menyediakan layanan sewa mobil berkualitas 
              dengan armada terawat dan pelayanan profesional.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/wijayarentcar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram Wijaya Rent Car"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/wijayarentcar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook Wijaya Rent Car"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-6">Menu Cepat</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Armada Kami
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg mb-6">Layanan</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">Sewa Harian</li>
              <li className="text-primary-foreground/80">Sewa Mingguan</li>
              <li className="text-primary-foreground/80">Sewa Bulanan</li>
              <li className="text-primary-foreground/80">Antar Jemput Bandara</li>
              <li className="text-primary-foreground/80">Paket Wisata</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Jl. Imam Bonjol<br />
                  Nagoya, Batam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@wijayarentcar.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@wijayarentcar.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Wijaya Rent Car. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
