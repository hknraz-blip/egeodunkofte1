import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Clock, Award, ChefHat, Soup, Cake } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/kofte-hero.jpg)",
            filter: "brightness(0.6)",
          }}
        />
        <div className="relative z-10 container text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Ege Odun Köfte
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            1969'dan Beri Aynı Lezzet
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-80">
             Odun ateşinde pişen geleneksel Salihli köftesinin eşsiz tadını keşedin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="text-lg px-8 py-6">
                Menümüzü İnceleyin
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Neden Biz?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            50 yılı aşkın deneyimimizle, geleneksel lezzetleri modern hijyen standartlarıyla buluşturuyoruz
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Odun Ateşi</h3>
                <p className="text-muted-foreground">
                  Geleneksel odun ateşinde pişirilen köftelerimiz, eşsiz dumanlı aromasıyla öne çıkar
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">50+ Yıllık Deneyim</h3>
                <p className="text-muted-foreground">
                  1969'dan beri aynı kalite ve lezzeti sunuyoruz. Aile geleneğimizi sürdürüyoruz
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Kaliteli Malzeme</h3>
                <p className="text-muted-foreground">
                  Sadece birinci sınıf kuzu eti ve taze baharatlar kullanıyoruz
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Usta Eller</h3>
                <p className="text-muted-foreground">
                  Deneyimli şeflerimiz her köfteyi özenle hazırlıyor
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Hikayemiz</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Ege Odun Köfte, 1969 yılında Salihli'nin kalbinde kuruldu. Kurucu ustamız, 
                dedelerinden öğrendiği geleneksel köfte pişirme sanatını, odun ateşinin 
                verdiği eşsiz lezzetle birleştirdi.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                50 yılı aşkın süredir, aynı özveri ve kalite anlayışıyla hizmet veriyoruz. 
                Her köftemiz, birinci sınıf kuzu döş etinden, özel baharat karışımımızla 
                hazırlanıyor ve odun ateşinde ustalıkla pişiriliyor.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Bugün üçüncü nesil olarak, dedelerimizin mirasını koruyarak ve modern 
                hijyen standartlarını uygulayarak, misafirlerimize en iyi deneyimi sunuyoruz.
              </p>
              <Link href="/hakkimizda">
                <Button size="lg" variant="outline">
                  Daha Fazla Bilgi
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/kofte-grill.jpeg"
                alt="Odun ateşinde köfte"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Menümüz</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Odun köftemizin yanı sıra, çeşitli ızgara lezzetleri, çorbalar ve mezeler sunuyoruz
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-primary/5 flex items-center justify-center">
                <ChefHat className="text-primary" size={64} />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Odun Köfte</h3>
                <p className="text-muted-foreground mb-4">
                  Özenle hazırlanmış, kuzu etinden, odun ateşinde pişmiş köftelerimiz
                </p>
                <p className="text-2xl font-bold text-primary">₺300</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-accent/5 flex items-center justify-center">
                <Soup className="text-accent" size={64} />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Kelle Paça</h3>
                <p className="text-muted-foreground mb-4">
                  Terbiyeli, kemik sulu geleneksel kelle paça çorbası
                </p>
                <p className="text-2xl font-bold text-primary">₺170</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-secondary/5 flex items-center justify-center">
                <Cake className="text-secondary" size={64} />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Kazandibi</h3>
                <p className="text-muted-foreground mb-4">
                  Geleneksel kazandibi, karamelize üst ve yumuşak dokusu
                </p>
                <p className="text-2xl font-bold text-primary">₺120</p>
              </CardContent>
            </Card>
          </div>
          <Link href="/menu">
            <Button size="lg" className="text-lg px-8">
              Tüm Menüyü Görüntüle
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Bizi Ziyaret Edin</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Odun ateşinde pişen geleneksel lezzetlerimizi tatmak için restoranımıza bekleriz
          </p>

        </div>
      </section>
    </div>
  );
}
