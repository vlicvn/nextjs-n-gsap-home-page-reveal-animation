# Next.js GSAP Home Page Reveal Animation

Bu proje, Next.js ve GSAP kullanılarak hazırlanan modern bir ana sayfa açılış animasyonu örneğidir. Sayfa yüklenirken sayaç çalışır, ardından büyük bir kapatma / açılma animasyonu devreye girer ve içerik yavaşça görünür hale gelir. Bu yapı, reklam, portföy, kurumsal sayfa veya landing page benzeri tasarımlarda kullanılabilecek etkileyici bir başlangıç örneğidir.

## Özellikler

- Next.js 16 ve React 19 tabanlı modern yapı
- GSAP kullanılarak hazırlanmış reveal animasyonu
- Yükleme sırasında çalışan yüzde sayacı
- Kırmızı/turuncu vurgu rengi ile premium görünüm
- Tam ekran overlay yaklaşımı
- App Router yapısı kullanımı
- Tailwind CSS ile hızlı stil yönetimi

## Kullanılan Teknolojiler

- Next.js 16
- React 19
- GSAP
- @gsap/react
- Tailwind CSS
- TypeScript

## Proje Yapısı

```text
nextjs-n-gsap-home-page-reveal-animation/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── HeroContent.tsx
│       ├── Preloader.tsx
│       └── PreloaderAnimation.tsx
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
└── next-env.d.ts
```

## Ana Dosya Açıklamaları

### [src/app/page.tsx](src/app/page.tsx)

Ana sayfayı temsil eder. Sadece `PreloaderAnimation` bileşenini çağırır. Bu sayfa, uygulama giriş noktasıdır.

### [src/components/PreloaderAnimation.tsx](src/components/PreloaderAnimation.tsx)

GSAP timeline mantığının çalıştığı ana animasyon bileşenidir. Aşağıdaki akış vardır:

1. Yüzde 0 ile 100 arasında sayaç artar
2. Sayaç 100'e ulaştığında `reveal()` fonksiyonu çağrılır
3. Öncelikle üstteki beyaz/gri loading bar açılır
4. `hide` sınıfı ile yükleme elemanları kaybolur
5. Ana içerik paneli genişler
6. Başlık satırları sırayla görünür hale gelir

### [src/components/Preloader.tsx](src/components/Preloader.tsx)

Yükleme ekranının görsel bileşenidir. Sayaç, progress bar ve arka plan katmanlarını içerir.

### [src/components/HeroContent.tsx](src/components/HeroContent.tsx)

Ana içerik alanıdır. Üç başlık satırı ve alıntı metnini içerir. Animasyon sırasında `.title-lines` sınıfı ile görünürlüğü kontrol edilir.

### [src/app/globals.css](src/app/globals.css)

Global stiller ve temel sayfa sıfırlama işlemleri burada bulunur. Body ve temel reset ayarları yapılmıştır.

## Gereksinimler

Aşağıdakilerin sisteminizde kurulu olması gerekir:

- Node.js 18 veya üzeri
- npm / yarn / pnpm / bun
- Modern bir web tarayıcı

## Kurulum

Projeyi klonlayıp bağımlılıkları yükleyin:

```bash
git clone https://github.com/vlicvn/nextjs-n-gsap-home-page-reveal-animation.git
cd nextjs-n-gsap-home-page-reveal-animation
npm install
```

## Çalıştırma

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Sonrasında tarayıcıdan aşağıdaki adrese gidin:

```text
http://localhost:3000
```

## Kullanılabilir Scriptler

```bash
npm run dev
```

Geliştirme sunucusunu başlatır.

```bash
npm run build
```

Üretim için uygulamayı derler.

```bash
npm run start
```

Üretilmiş projeyi yerel sunucuda çalıştırır.

```bash
npm run lint
```

ESLint kontrollerini çalıştırır.

## Animasyon Akışı

Bu proje, sayfa açılışında canlı bir “reveal” hissi yaratmak için GSAP zaman çizelgesi kullanır. Temel akış şudur:

- Yüzde sayacı çalışır
- Loading arka planı kapatılır
- Açılış çizgisi genişler
- Loading ekranı kaybolur
- Ana içerik paneli doğrusal şekilde açılır
- Başlıklar sırayla opacity animasyonu ile görünür olur

Bu sayede kullanıcıya dinamik bir giriş deneyimi sunulur.

## Özelleştirme

### Metni Değiştirme

Ana metni değiştirmek için [src/components/HeroContent.tsx](src/components/HeroContent.tsx) dosyasını açıp `title-lines` içindeki String değerlerini düzenleyin.

Örnek:

```tsx
<p className="title-lines ...">Yeni başlık satırı</p>
```

### Renkleri Değiştirme

Renkler [src/components/Preloader.tsx](src/components/Preloader.tsx) ve [src/components/PreloaderAnimation.tsx](src/components/PreloaderAnimation.tsx) içinde `bg-[#f48049]`, `bg-[#121212]` gibi değerlerle belirlenmiştir. Bu renkleri istediğiniz marka rengine göre değiştirebilirsiniz.

### Animasyon Süresini Ayarlama

GSAP timeline içinde `duration`, `delay`, `stagger` değerlerini düzenleyerek animasyon hızını ve akışını değiştirebilirsiniz.

### Sayfa Arkaplanını Özelleştirme

[src/app/globals.css](src/app/globals.css) dosyasındaki `body` ve genel reset ayarlarını değiştirebilirsiniz.

## Notlar

- Proje, görsel açıdan güçlü bir açılış animasyonu için örnek olarak tasarlanmıştır.
- App Router yapısı nedeniyle Next.js 13+ standartlarına uygundur.
- Animasyonlar için GSAP’in güçlü zaman çizelgesi özelliği kullanılmıştır.
- UI, sade ve gösterişli bir kurumsal/landing page estetiğine yakındır.

## Geliştirme Fikirleri

Aşağıdaki eklemeler projeyi daha ileri taşıyabilir:

- Menü ve navigasyon bileşeni ekleme
- İçerik alanını farklı bölümlere ayırma
- Video veya arka plan görseli ekleme
- Scroll-triggered animasyonlar ekleme
- Daha gelişmiş mobil uyumlu düzenleme

## Lisans

Bu proje açık kaynak olarak paylaşılmıştır. Kullanım sırasında proje dosyalarında yer alan telif hakkı ve lisans koşullarını dikkate alınız.

## Katkı

Katkıda bulunmak isterseniz:

1. Depoyu fork edin
2. Yeni bir branch oluşturun
3. Değişikliklerinizi yapın
4. Pull request açın

## Hızlı Başlangıç

```bash
git clone https://github.com/vlicvn/nextjs-n-gsap-home-page-reveal-animation.git
cd nextjs-n-gsap-home-page-reveal-animation
npm install
npm run dev
```

Açılış animasyonunu görmek için tarayıcıda http://localhost:3000 adresini açın.
