import { Shield, Clock, Headphones, BadgeCheck, MapPinned, Banknote } from "lucide-react";
const features = [{
  icon: Shield,
  title: "Asuransi Lengkap",
  description: "Seluruh armada dilengkapi asuransi untuk keamanan perjalanan Anda."
}, {
  icon: Clock,
  title: "Proses Cepat",
  description: "Booking mudah dan cepat, mobil siap antar dalam hitungan jam."
}, {
  icon: Headphones,
  title: "Layanan 24 Jam",
  description: "Tim support kami siap membantu kapanpun Anda membutuhkan."
}, {
  icon: BadgeCheck,
  title: "Driver Profesional",
  description: "Sopir berpengalaman, ramah, dan menguasai rute perjalanan."
}, {
  icon: MapPinned,
  title: "Antar Jemput",
  description: "Layanan antar jemput ke bandara, stasiun, atau lokasi pilihan."
}, {
  icon: Banknote,
  title: "Harga Transparan",
  description: "Tanpa biaya tersembunyi, harga yang Anda lihat adalah harga final."
}];
const FeaturesSection = () => {
  return <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Mengapa Kami?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Keunggulan Wijaya Rent Car
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kami berkomitmen memberikan pengalaman sewa mobil terbaik untuk setiap pelanggan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={feature.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-warm transition-all duration-500 opacity-0 animate-fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="w-14 h-14 rounded-xl bg-gradient-warm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>

        {/* Stats Section */}
        <div className="mt-20 py-12 px-8 bg-gradient-hero rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="opacity-0 animate-fade-in-up" style={{
            animationDelay: "0.1s"
          }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-primary-foreground/80">Unit Armada</div>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{
            animationDelay: "0.2s"
          }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10K+</div>
              <div className="text-primary-foreground/80">Pelanggan Puas</div>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{
            animationDelay: "0.3s"
          }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-primary-foreground/80">Tahun Pengalaman</div>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{
            animationDelay: "0.4s"
          }}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4.9</div>
              <div className="text-primary-foreground/80">Rating Layanan</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturesSection;