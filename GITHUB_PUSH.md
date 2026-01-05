# Değişiklikleri GitHub'a Gönderme Rehberi

Bu kısa rehber, yerel değişikliklerinizi GitHub deposuna güvenle göndermeniz ve Render.com dağıtımını tetiklemeniz için gereken komutları içerir.

## 1) Depo bağlantısını ve dalı kontrol edin

```bash
git remote -v          # origin doğru mu?
git branch --show-current
```

Eğer `origin` eksikse veya HTTPS kullanmak istiyorsanız:

```bash
git remote add origin https://github.com/<kullanici>/<repo>.git
# veya SSH için: git remote add origin git@github.com:<kullanici>/<repo>.git
```

## 2) Durumu kontrol edin ve değişiklikleri ekleyin

```bash
git status -sb         # bekleyen dosyaları görün
git add .              # ya da seçili dosyaları ekleyin
```

## 3) Commit oluşturun

```bash
git commit -m "Render statik site güncellemeleri"
```

## 4) Ana dala gönderin

```bash
git push origin main   # Render genellikle main'i izler
```

### İpucu: Farklı dal kullanıyorsanız
Render otomatik dağıtımı izlediğiniz dal üzerinden yapar. Render Dashboard > Deploys > Settings bölümünden takip edilen dalı görebilir veya değiştirebilirsiniz. Yukarıdaki `main` yerine ilgili dal adını kullanın.

## 5) Render dağıtımını doğrulayın

Push tamamlandıktan sonra Render, blueprint'te tanımlı statik site için otomatik bir deploy başlatır. Render Dashboard'da yeni deploy'un başladığını ve sağlıklı tamamlandığını kontrol edin.
