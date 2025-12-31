import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/köfte9.jpeg",
      title: "Odun Köfte Tabağı",
      category: "Yemekler",
    },
    {
      src: "/kofte-grill.jpeg",
      title: "Izgara Üzerinde",
      category: "Pişirme",
    },
    {
      src: "/DIŞMEKAN.jpeg",
      title: "Restoran Dış Mekan",
      category: "Mekan",
    },
    {
      src: "/tavukşiş5.jpeg",
      title: "Tavuk Şiş",
      category: "Yemekler",
    },
    {
      src: "/Sucukluyumurta1.jpeg",
      title: "Sucuklu Yumurta",
      category: "Yemekler",
    },
    {
      src: "/kellepaça6.jpeg",
      title: "Kelle Paça Çorbası",
      category: "Yemekler",
    },
    {
      src: "/işkembe5.jpeg",
      title: "İşkembe Çorbası",
      category: "Yemekler",
    },
    {
      src: "/tavuksuyu4.jpeg",
      title: "Tavuk Suyu Çorbası",
      category: "Yemekler",
    },
    {
      src: "/mercimek3.jpeg",
      title: "Mercimek Çorbası",
      category: "Yemekler",
    },
    {
      src: "/ezogelin5.jpeg",
      title: "Ezogelin Çorbası",
      category: "Yemekler",
    },
    {
      src: "/beyin4.jpeg",
      title: "Beyin Çorbası",
      category: "Yemekler",
    },
    {
      src: "/kazandibi2.jpeg",
      title: "Kazandibi",
      category: "Yemekler",
    },
    {
      src: "/kemalpaşa3.jpeg",
      title: "Kemalpaşa",
      category: "Yemekler",
    },
    {
      src: "/Sütlaç1.jpeg",
      title: "Sütlaç",
      category: "Yemekler",
    },
    {
      src: "/tatlidolabi.jpeg",
      title: "Tatlı Dolabı",
      category: "Mekan",
    },
  ];

  const categories = ["Tümü", "Yemekler", "Pişirme", "Mekan"];
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredImages = activeCategory === "Tümü" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary to-primary">
        <div className="relative z-10 container text-center text-secondary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Galeri</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Lezzetlerimiz ve Atmosferimiz
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-foreground hover:bg-card/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => (
              <Card
                key={idx}
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Info Section */}
      <section className="py-16 bg-muted">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Atmosferimiz</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Restoranımız, geleneksel Türk misafirperverliğini modern bir ortamda sunar. 
            Sıcak ve samimi atmosferimizde, aileniz ve arkadaşlarınızla unutulmaz 
            anlar yaşayabilirsiniz.
          </p>
          <p className="text-lg text-muted-foreground">
            Odun ateşinin verdiği doğal ısı ve aroma, yemek deneyiminizi daha da 
            özel kılar. Her köşemiz, 50 yılı aşkın geçmişimizin izlerini taşır.
          </p>
        </div>
      </section>
    </div>
  );
}
