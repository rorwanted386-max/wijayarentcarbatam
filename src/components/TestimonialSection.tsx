import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andi",
    rating: 5,
    comment: "Terima kasih Wijaya Rent Car Batam 🙏 Mobil bersih, nyaman, dan on time. Supirnya ramah banget. Recommended 👍",
  },
  {
    name: "Sari",
    rating: 5,
    comment: "Admin fast response 😊 Harga sesuai, mobil enak dipakai. Ke Batam lagi pasti sewa di sini.",
  },
  {
    name: "Dedi",
    rating: 5,
    comment: "Liburan keluarga jadi lebih nyaman 🚗 Mobil luas dan bersih. Anak-anak juga nyaman selama perjalanan.",
  },
  {
    name: "Maya",
    rating: 5,
    comment: "Terima kasih Wijaya Rent Car Batam 🙏 Keliling Batam jadi aman & nyaman. Next trip pasti pakai lagi.",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimoni dari pelanggan setia Wijaya Rent Car Batam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {testimonial.comment}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-semibold text-foreground">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
