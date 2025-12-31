import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";
import { MapView } from "@/components/Map";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder - in a real app, you'd send this to a server
    toast.success("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleMapReady = (map: google.maps.Map) => {
    // Set marker for restaurant location (example coordinates for Izmir)
    const restaurantLocation = { lat: 38.4192, lng: 27.1287 };
    
    new google.maps.Marker({
      position: restaurantLocation,
      map: map,
      title: "Ege Odun Köfte 1969",
    });

    map.setCenter(restaurantLocation);
    map.setZoom(15);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent to-secondary">
        <div className="relative z-10 container text-center text-accent-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">İletişim</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Bize Ulaşın
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Adres</h3>
                        <a href="https://www.google.com/maps/dir//Mithatpa%C5%9Fa,+Mithatpa%C5%9Fa+Cd.+No:132+A,+45300+Salihli%2FManisa/@38.4852271,28.055005,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14b85a5fb6365b6d:0x409050badc6ff98a!2m2!1d28.137406!2d38.485256?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <p className="text-muted-foreground">
                            Mithatpaşa Mahallesi, Mithatpaşa Caddesi<br />
                            No: 132/A Salihli, Manisa<br />
                            Türkiye
                          </p>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Telefon</h3>
                        <a href="tel:+902367124212" className="text-muted-foreground hover:text-primary transition-colors">
                          +90 (236) 712 42 12
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Rezervasyon ve paket servis için
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">E-posta</h3>
                        <a href="mailto:info@egeodunkofte.com" className="text-muted-foreground hover:text-primary transition-colors">
                          info@egeodunkofte.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Sorularınız için
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Çalışma Saatleri</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Haftanın Her Günü</span>
                            <span className="font-medium">06:00 - 02:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Sosyal Medya</h3>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/egeodunkofte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="text-primary" size={24} />
                  </a>
                  <a
                    href="https://instagram.com/egeodunkofte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="text-accent" size={24} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="text-secondary" size={24} />
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Konumumuz</h2>
          <div className="rounded-lg overflow-hidden shadow-xl flex justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.1033987759065!2d28.13483107572822!3d38.48525597181494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b85a5fb6365b6d%3A0x409050badc6ff98a!2sEge%20Odun%20K%C3%B6fte%20ve%20%C3%87orba%20Salonu!5e0!3m2!1str!2str!4v1767181897746!5m2!1str!2str" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-muted-foreground mt-6">
            Kent meydanına 5 dakika yürüme mesafesinde, şehir merkezinde kolayca ulaşabileceğiniz bir konumdayız
          </p>
        </div>
      </section>
    </div>
  );
}
