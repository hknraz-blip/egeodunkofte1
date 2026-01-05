# Render.com Dağıtım Rehberi

Bu rehber, Ege Odun Köfte web sitesini Render.com'da **tamamen frontend (statik)** olarak dağıtmak için gerekli adımları açıklar. Docker gerekmez; Render'ın Static Site servisi, Vite ile üretilen derleme çıktısını doğrudan CDN üzerinden sunar.

## Ön Koşullar

1. Render.com hesabı (https://render.com)
2. GitHub deposunda web sitesi kodu

## Dağıtım Adımları

### Değişiklikleri GitHub'a Gönderme

Render dağıtımı GitHub deposuna bağlıdır. Render'ın yeni kodu görebilmesi için değişikliklerinizi önce GitHub'a gönderin. Hızlı komutlar için **[GITHUB_PUSH.md](./GITHUB_PUSH.md)** dosyasına bakın; özet akış aşağıdadır:

1. Depo bağlantısını doğrulayın (gerekirse ekleyin):
   ```bash
   git remote -v
   git remote add origin git@github.com:<kullanici>/<repo>.git  # sadece eksikse
   ```
2. Çalışma dizininde bekleyen değişiklikleri kontrol edin:
   ```bash
   git status -sb
   ```
3. Değişiklikleri ekleyip açıklayıcı bir mesajla commit'leyin:
   ```bash
   git add .
   git commit -m "Render için güncellemeler"
   ```
4. Commit'i Render'ın takip ettiği dala (genelde `main`) gönderin:
   ```bash
   git push origin main
   ```

Push tamamlandığında Render, blueprint'e bağlı statik site için otomatik olarak yeni bir deploy başlatır.

### 1. GitHub Deposunu Bağlama

1. Render.com'da oturum açın
2. Dashboard'a gidin ve "New +" butonuna tıklayın
3. "Static Site" seçeneğini seçin
4. GitHub deposunu bağlayın

### 2. Yapılandırma

`render.yaml` artık bir **Static Site** tanımlar. Render, Docker imajı gerektirmeden Node ortamında derleme yapar ve çıktıyı CDN'e yükler:

- **Install Command**: `corepack enable && pnpm install --frozen-lockfile`
- **Build Command**: `pnpm build` (yalnızca Vite frontend derlemesi)
- **Publish Path**: `dist/public` (Vite çıktısı)
- **Routes**: Tüm istekler `/index.html`'e yönlendirilir; SPA yönlendirmeleri sorunsuz çalışır.

### 3. Ortam Değişkenlerini Ayarlama

Render.com Dashboard'da aşağıdaki ortam değişkenlerini ayarlayın (boş gelenler isteğe bağlıdır, `render.yaml` varsayılanlarını kullanır). Hiçbiri gelmezse uygulama varsayılan marka değerlerini (`Ege Odun Köfte 1969` başlığı ve `/logo.svg` ikonu) otomatik kullanır:

```
VITE_APP_TITLE=Ege Odun Köfte 1969
VITE_APP_LOGO=/logo.svg
VITE_APP_ID=ege-odun-kofte
OWNER_NAME=Ege Odun Köfte
VITE_FRONTEND_FORGE_API_KEY=
VITE_FRONTEND_FORGE_API_URL=
VITE_OAUTH_PORTAL_URL=
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
```

### 4. Veritabanı Oluşturma

1. Render.com Dashboard'da "New +" > **Static Site** seçeneğini seçin ve depoyu bağlayın.
2. Blueprint olarak `render.yaml` seçildiğinde komutlar ve publish path otomatik dolacaktır.
3. Veritabanı veya arka uç hizmeti gerekmez; tüm içerik frontend tarafında derlenip sunulur.
4. SPA yönlendirmeleri için `/* → /index.html` kuralı blueprint'te hazırdır.

### 5. Dağıtım

1. Blueprint kurulumu sırasında `render.yaml` dosyasını onaylayın ve değişiklik yapmaya gerek kalmadan devam edin.
2. Render.com otomatik olarak build ve deploy işlemini başlatacaktır.
3. Dağıtım tamamlandığında, web siteniz canlı olacaktır.
4. Yayın tamamlandığında Render CDN'i otomatik olarak statik dosyaları sunar; ekstra start komutuna ihtiyaç yoktur.

## Sorun Giderme

### Build Hatası

Eğer build sırasında hata alırsanız:

1. Render.com Logs sekmesini kontrol edin
2. `pnpm install` ve `pnpm build` komutlarının başarıyla çalıştığından emin olun
3. Tüm ortam değişkenlerinin doğru şekilde ayarlandığından emin olun

## Özel Domain Bağlama

1. Render.com Dashboard'da "Settings" sekmesine gidin
2. "Custom Domain" bölümünde özel domain'inizi ekleyin
3. DNS kayıtlarınızı Render.com tarafından sağlanan değerlere göre güncelleyin

## Daha Fazla Bilgi

- [Render.com Dokumentasyonu](https://render.com/docs)
- [Static Site Dokümantasyonu](https://render.com/docs/static-sites)
