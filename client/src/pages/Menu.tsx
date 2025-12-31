import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Soup, Salad, Coffee, IceCream } from "lucide-react";

export default function Menu() {
  const menuCategories = [
    {
      title: "Ana Yemekler",
      icon: Flame,
      color: "text-primary",
      items: [
        { name: "Odun Köfte (Porsiyon)", description: "%80 kuzu kıymasından, odun ateşinde pişmiş köfteler", price: "₺300", popular: true },
        { name: "Tavuk Şış", description: "Özel sosumuzla marine edilmiş tavuk incik", price: "₺300", popular: false },
        { name: "Sucuklu Yumurta", description: "", price: "₺330", popular: false },      ],
    },
    {
      title: "Çorbalar",
      icon: Soup,
      color: "text-accent",
      items: [
        { name: "Kelle Paça Çorbası", description: "Terbiyeli, kemik sulu kelle paça çorbası", price: "₺170", popular: false },
        { name: "İşkembe Çorbası", description: "Terbiyeli, kemik sulu işkembe çorbası", price: "₺150", popular: false },
        { name: "Tavuk Suyu Çorbası", description: "Besleyici tavuk suyu çorbası", price: "₺150", popular: false },
        { name: "Mercimek Çorbası", description: "Geleneksel kırmızı mercimek çorbası", price: "₺150", popular: false },
        { name: "Ezogelin Çorbası", description: "Baharatlı mercimek ve bulgur çorbası", price: "₺150", popular: false },
        { name: "Beyin Çorbası", description: "Geleneksel beyin çorbası", price: "₺180", popular: false },
      ],
    },
    {
      title: "İçecekler",
      icon: Coffee,
      color: "text-primary",
      items: [
        { name: "Ayran", description: "Ev yapımı ayran", price: "₺50", popular: true },
        { name: "Kola / Fanta / Sprite", description: "300ml şişe", price: "₺70", popular: false },
        { name: "Şalgam Suyu", description: "Acılı/Acısız", price: "₺50", popular: false },
        { name: "Maden Suyu", description: "", price: "₺40", popular: false },
        { name: "Türk Kahvesi", description: "Geleneksel Türk kahvesi", price: "₺50", popular: false },
        { name: "Su", description: "", price: "₺15", popular: false },
      ],
    },
    {
      title: "Tatlılar",
      icon: IceCream,
      color: "text-accent",
      items: [
        { name: "Sütlaç", description: "Fırın sütlaç", price: "₺120", popular: false },
        { name: "Kazandibi", description: "Geleneksel kazandibi", price: "₺120", popular: false },
        { name: "Kemalpaşa", description: "Geleneksel peynir tatlısı", price: "₺120", popular: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-accent">
        <div className="relative z-10 container text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Menümüz</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Geleneksel Lezzetler, Modern Sunum
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <div className="space-y-16">
            {menuCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 bg-muted rounded-full flex items-center justify-center ${category.color}`}>
                      <Icon size={28} />
                    </div>
                    <h2 className="text-4xl font-bold">{category.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIdx) => (
                      <Card key={itemIdx} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <CardTitle className="text-xl mb-2 flex items-center gap-2">
                                {item.name}
                                {item.popular && (
                                  <Badge variant="default" className="text-xs">
                                    Popüler
                                  </Badge>
                                )}
                              </CardTitle>
                              {item.description && (
                                <p className="text-sm text-muted-foreground">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <div className="text-2xl font-bold text-primary whitespace-nowrap">
                              {item.price}
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted">
        <div className="container max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">Önemli Bilgiler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold mb-2 text-lg">Servis Bilgisi</h4>
                <p className="text-sm text-muted-foreground">
                  Tüm ızgara yemeklerimiz bulgur, salata ve közlenmiş sebzelerle servis edilir.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold mb-2 text-lg">Özel Talepler</h4>
                <p className="text-sm text-muted-foreground">
                  Acı derecesi, pişirme tercihi ve özel diyet ihtiyaçlarınız için 
                  lütfen garsonlarımıza bilgi veriniz.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold mb-2 text-lg">Paket Servis</h4>
                <p className="text-sm text-muted-foreground">
                  Tüm menü ürünlerimiz paket servis olarak da mevcuttur. 
                  Sipariş için: +90 (236) 712 42 12
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold mb-2 text-lg">Fiyat Bilgisi</h4>
                <p className="text-sm text-muted-foreground">
                  Fiyatlarımız KDV dahildir. Fiyatlar önceden haber verilmeksizin 
                  değiştirilebilir.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
