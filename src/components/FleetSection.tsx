import { Users, Fuel, Settings, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import avanzaImg from "@/assets/cars/avanza.jpg";
import xpanderImg from "@/assets/cars/xpander.jpg";
import innovaImg from "@/assets/cars/innova.png";
import hiaceImg from "@/assets/cars/hiace.png";

const cars = [
  {
    name: "Toyota Avanza",
    type: "MPV",
    seats: 7,
    transmission: "Manual/Matic",
    fuel: "Bensin",
    price: "800.000",
    rating: 4.8,
    image: avanzaImg,
    popular: false,
  },
  {
    name: "Mitsubishi Xpander",
    type: "MPV Premium",
    seats: 7,
    transmission: "Matic",
    fuel: "Bensin",
    price: "700.000",
    rating: 4.9,
    image: xpanderImg,
    popular: true,
  },
  {
    name: "Toyota Innova Reborn",
    type: "MPV Premium",
    seats: 7,
    transmission: "Matic",
    fuel: "Diesel/Bensin",
    price: "800.000",
    rating: 4.9,
    image: innovaImg,
    popular: false,
  },
  {
    name: "Toyota Hiace",
    type: "Van",
    seats: 15,
    transmission: "Manual",
    fuel: "Diesel",
    price: "1.200.000",
    rating: 4.7,
    image: hiaceImg,
    popular: false,
  },
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Pilihan Armada
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Armada Berkualitas Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pilih mobil sesuai kebutuhan perjalanan Anda. Semua unit terawat dan siap antar.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <article
              key={car.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={`${car.name} rental mobil`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {car.popular && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    Populer
                  </div>
                )}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-background/90 rounded-full">
                  <Star className="h-3.5 w-3.5 text-accent fill-accent" />
                  <span className="text-xs font-semibold">{car.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {car.type}
                </span>
                <h3 className="font-display text-xl text-foreground mt-1 mb-3">
                  {car.name}
                </h3>

                {/* Specs */}
                <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>{car.seats} Kursi</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Settings className="h-4 w-4" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Fuel className="h-4 w-4" />
                    <span>{car.fuel}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-foreground">
                      Rp {car.price}
                    </span>
                    <span className="text-sm text-muted-foreground">/hari</span>
                  </div>
                  <a href="https://wa.me/6282364375846?text=Halo,%20saya%20ingin%20booking%20mobil" target="_blank" rel="noopener noreferrer">
                    <Button variant="accent" size="sm">
                      Booking
                    </Button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a href="https://wa.me/6282364375846?text=Halo,%20saya%20ingin%20melihat%20semua%20armada" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              Lihat Semua Armada
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
