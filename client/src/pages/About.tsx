import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Target, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/dis-mekan.jpeg)",
            filter: "brightness(0.5)",
          }}
        />
        <div className="relative z-10 container text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-xl md:text-2xl opacity-90">
            50 Yılı Aşkın Bir Lezzet Yolculuğu
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Hikayemiz</h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Ege Odun Köfte'nin hikayesi, 1969 yılında Salihli'nin tarihi sokaklarında başladı. 
              Kurucu ustamız, dedelerinden öğrendiği geleneksel köfte yapım sanatını, 
              odun ateşinin verdiği eşsiz lezzetle birleştirerek bu benzersiz konsepti yarattı.
            </p>

            <p className="text-lg leading-relaxed">              O günden bu yana, üç nesil boyunca aynı tutkulayla hizmet veriyoruz. Her sabah 
              taze olarak hazırlanan köftelerimiz, özenle seçilmiş birinci sınıf kuzu döş 
              etinden, yoğrularak hazırlanıyor. Odun ateşinin 
              verdiği dumanlı aroma, köftelerimize benzersiz bir tat katıyor.            </p>

            <p className="text-lg leading-relaxed">
              Zamanla büyüdük, değiştik ama hiçbir zaman vazgeçmediğimiz şey kalitemiz oldu. 
              Modern hijyen standartlarını uygularken, geleneksel pişirme yöntemlerimizi 
              korumaya devam ediyoruz. Bugün, dedelerimizin mirasını yaşatmanın gururunu 
              taşıyoruz.
            </p>

            <p className="text-lg leading-relaxed">
              Restoranımız sadece bir yemek yeri değil, aynı zamanda ailelerin bir araya 
              geldiği, dostlukların pekiştiği, anıların yaşandığı bir buluşma noktası. 
              Her misafirimizi ailemizin bir parçası olarak görüyor ve en iyi hizmeti 
              sunmak için çalışıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center">Değerlerimiz</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Bizi biz yapan ve 50 yılı aşkın süredir ayakta tutan temel değerlerimiz
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Tutku</h3>
                <p className="text-muted-foreground">
                  İşimizi sevgiyle yapıyor, her köfteyi özenle hazırlıyoruz
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Kalite</h3>
                <p className="text-muted-foreground">
                  Sadece en iyi malzemeleri kullanıyor, kaliteden asla ödün vermiyoruz
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Aile</h3>
                <p className="text-muted-foreground">
                  Her misafirimizi ailemizin bir parçası olarak görüyoruz
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Gelenek</h3>
                <p className="text-muted-foreground">
                  Dedelerimizin mirasını koruyarak gelecek nesillere aktarıyoruz
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center">Pişirme Sürecimiz</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Geleneksel yöntemlerle, özenle hazırlanan köftelerimizin yolculuğu
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Seçim</h3>
              <p className="text-muted-foreground">
                Birinci sınıf kuzu döş eti özenle seçilir ve hazırlanır. 
                Sadece en kaliteli etleri kullanırız.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Hazırlık</h3>
              <p className="text-muted-foreground">
                Eser miktar un ve tuzla yoğrulan kıyma, şişe takılarak pişirmeye hazır hale getirilir.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-secondary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Pişirme</h3>
              <p className="text-muted-foreground">
                Odun ateşinde ustalıkla pişirilen köfteler, eşsiz dumanlı 
                aromasını kazanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ekibimiz</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Deneyimli ve tutkulu ekibimiz, size en iyi hizmeti sunmak için çalışıyor
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-8 pb-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Usta Şeflerimiz</h3>
                <p className="text-muted-foreground text-lg">
                  20 yılı aşkın deneyime sahip şeflerimiz, geleneksel köfte yapım 
                  sanatını mükemmelleştirmiş durumdalar. Her gün taze olarak hazırlanan 
                  köftelerimiz, bu usta ellerin eseridir. Ekibimiz, kalite ve lezzetten 
                  asla ödün vermeden, her misafirimize en iyi deneyimi sunmak için 
                  özveriyle çalışıyor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
