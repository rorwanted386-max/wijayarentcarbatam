import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const ContactSection = () => {
  return <section id="contact" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - CTA */}
          <div className="opacity-0 animate-fade-in-up" style={{
          animationDelay: "0.1s"
        }}>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Hubungi Kami
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Siap Memulai Perjalanan?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Hubungi kami sekarang untuk reservasi atau konsultasi kebutuhan rental mobil Anda. 
              Tim kami siap membantu 24/7.
            </p>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/6282364375846?text=Halo,%20saya%20ingin%20booking%20mobil" target="_blank" rel="noopener noreferrer" className="inline-block mb-8">
              <Button variant="hero" size="xl" className="gap-3">
                <MessageCircle className="h-5 w-5" />
                Chat via WhatsApp
              </Button>
            </a>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telepon</div>
                  <a className="text-foreground font-medium hover:text-accent transition-colors" href="tel:+6282364375846">
                    +62 823-6437-5846
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a className="text-foreground font-medium hover:text-accent transition-colors" href="mailto:wijayarentcarbtm@gmail.com">
                    ​wijayarentcarbtm@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Jam Operasional</div>
                  <div className="text-foreground font-medium">24 Jam / 7 Hari</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map/Location Card */}
          <div className="bg-card rounded-3xl p-8 shadow-soft opacity-0 animate-slide-in-right" style={{
          animationDelay: "0.3s"
        }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">Lokasi Kami</h3>
                <p className="text-muted-foreground">
                  Jl. Imam Bonjol<br />
                  Nagoya, Batam
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-2xl overflow-hidden bg-muted relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.49456488872!2d106.68943194023437!3d-6.229386900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi Wijaya Rent Car" className="absolute inset-0" />
            </div>

            {/* Quick Booking Note */}
            <div className="mt-6 p-4 bg-accent/5 rounded-xl border border-accent/20">
              <p className="text-sm text-muted-foreground text-center">
                💡 <span className="font-medium text-foreground">Tips:</span> Booking minimal H-1 untuk memastikan ketersediaan armada pilihan Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;