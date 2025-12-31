# Render.com Dağıtım Rehberi

Bu rehber, Ege Odun Köfte web sitesini Render.com'da dağıtmak için gerekli adımları açıklamaktadır.

## Ön Koşullar

1. Render.com hesabı (https://render.com)
2. GitHub deposunda web sitesi kodu
3. PostgreSQL veritabanı (Render.com tarafından sağlanacak)

## Dağıtım Adımları

### 1. GitHub Deposunu Bağlama

1. Render.com'da oturum açın
2. Dashboard'a gidin ve "New +" butonuna tıklayın
3. "Web Service" seçeneğini seçin
4. GitHub deposunu bağlayın

### 2. Yapılandırma

Render.com otomatik olarak `render.yaml` dosyasını algılayacak ve aşağıdaki ayarları uygulayacaktır:

- **Build Command**: `pnpm install && pnpm build`
- **Start Command**: `pnpm start`
- **Node.js Runtime**: Otomatik olarak seçilir

### 3. Ortam Değişkenlerini Ayarlama

Render.com Dashboard'da aşağıdaki ortam değişkenlerini ayarlayın:

```
NODE_ENV=production
JWT_SECRET=<güvenli-bir-anahtar>
VITE_APP_TITLE=Ege Odun Köfte 1969
VITE_APP_LOGO=/logo.svg
VITE_APP_ID=ege-odun-kofte
OWNER_NAME=Ege Odun Köfte
```

### 4. Veritabanı Oluşturma

1. Render.com Dashboard'da "PostgreSQL" seçeneğini seçin
2. Veritabanı adı: `ege_odun_kofte`
3. Veritabanı oluşturulduktan sonra, `DATABASE_URL` otomatik olarak web service'e bağlanacaktır

### 5. Dağıtım

1. "Create Web Service" butonuna tıklayın
2. Render.com otomatik olarak build ve deploy işlemini başlatacaktır
3. Dağıtım tamamlandığında, web siteniz canlı olacaktır

## Sorun Giderme

### Build Hatası

Eğer build sırasında hata alırsanız:

1. Render.com Logs sekmesini kontrol edin
2. `pnpm install` ve `pnpm build` komutlarının başarıyla çalıştığından emin olun
3. Tüm ortam değişkenlerinin doğru şekilde ayarlandığından emin olun

### Veritabanı Bağlantı Hatası

1. PostgreSQL veritabanının oluşturulduğundan emin olun
2. `DATABASE_URL` ortam değişkeninin doğru olduğundan emin olun
3. Veritabanı migrasyonlarının çalıştığından emin olun

## Özel Domain Bağlama

1. Render.com Dashboard'da "Settings" sekmesine gidin
2. "Custom Domain" bölümünde özel domain'inizi ekleyin
3. DNS kayıtlarınızı Render.com tarafından sağlanan değerlere göre güncelleyin

## Daha Fazla Bilgi

- [Render.com Dokumentasyonu](https://render.com/docs)
- [Node.js Dağıtımı](https://render.com/docs/deploy-node)
- [PostgreSQL Veritabanı](https://render.com/docs/databases)
