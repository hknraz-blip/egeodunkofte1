import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { APP_TITLE } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ege Odun Köfte ve Çorba Salonu</h3>
            <p className="text-sm opacity-90 mb-4">
              1969'dan beri odun ateşinde pişen geleneksel Salihli köftesinin eşsiz lezzetini sunuyoruz. 
              Aile geleneğimizi sürdürerek, her lokmada aynı kaliteyi garanti ediyoruz.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/egeodunkofte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/20 hover:bg-secondary-foreground/30 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/egeodunkofte/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/20 hover:bg-secondary-foreground/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/20 hover:bg-secondary-foreground/30 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  Mithatpaşa Mahallesi, Mithatpaşa Caddesi No: 132/A<br />
                  Salihli, Manisa
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+902367124212" className="opacity-90 hover:opacity-100 transition-opacity">
                  +90 (236) 712 42 12
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:info@egeodunkofte.com" className="opacity-90 hover:opacity-100 transition-opacity">
                  info@egeodunkofte.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Çalışma Saatleri</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="opacity-90">Haftanın Her Günü</span>
                <span className="font-medium">06:00 - 02:00</span>
              </div>

              <div className="mt-4 p-3 bg-accent/20 rounded-lg">
                <p className="text-xs opacity-90">
                  Rezervasyon için lütfen önceden arayınız
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center text-sm opacity-75">
          <p>© {currentYear} {APP_TITLE}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
