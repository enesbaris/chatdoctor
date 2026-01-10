# 🩺 Chat Doctor - Yapay Zeka Destekli Sağlık Asistanı

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Groq API](https://img.shields.io/badge/AI-Groq_Llama3-f55036?style=for-the-badge&logo=openai&logoColor=white)

**Chat Doctor**, kullanıcıların sağlıkla ilgili semptomlarını analiz eden, sağlıklı yaşam tavsiyeleri veren ve 7/24 aktif olan akıllı bir web asistanıdır. **Groq API** (Llama-3 modeli) altyapısını kullanarak gerçek zamanlı ve doğal dilde yanıtlar üretir.

Bu proje, **HTML/Bootstrap Şablonu** ve **ReactJS (Vite)** dönüşümü olmak üzere iki ana bölümden oluşmaktadır.

---

## 🚀 Proje Özellikleri

- **🤖 Akıllı Sohbet:** Groq API entegrasyonu ile semptom analizi yapar.
- **⚡ Hızlı & Modern:** Vite ve React altyapısı ile yüksek performans.
- **📱 Responsive Tasarım:** Bootstrap 5 ile mobil ve masaüstü uyumlu arayüz.
- **📂 Modüler Yapı:** Temiz kod prensiplerine uygun component mimarisi.
- **🔒 Güvenli:** `.env` yapılandırması ile API anahtarı güvenliği.

---

## 🛠️ Kurulum ve Çalıştırma (React Versiyonu)

Projeyi yerel ortamınızda çalıştırmak ve yapay zeka özelliklerini test etmek için aşağıdaki adımları izleyin:

### 1. Projeyi İndirin
Terminali açın ve projeyi bilgisayarınıza klonlayın, ardından React klasörüne geçiş yapın:

git clone [https://github.com/enesbaris/chatdoctor.git](https://github.com/enesbaris/chatdoctor.git)
cd chatdoctor/reactjs '''

### 2. Gerekli Paketleri Yükleyin
Projenin çalışması için gereken modülleri indirin:

npm install

### 3. API Anahtarını Tanımlayın (Önemli!)
Projenin çalışması için bir Groq API anahtarına ihtiyacınız vardır.

reactjs klasörü içinde .env adında yeni bir dosya oluşturun.

İçerisine aşağıdaki satırı ekleyin ve gsk_... kısmına kendi anahtarınızı yazın:

Kod snippet'i

VITE_GROQ_API_KEY=gsk_sizin_api_keyiniz_buraya_gelecek
### 4. Uygulamayı Başlatın
Kurulum tamamlandıktan sonra uygulamayı çalıştırın:

npm run dev
Terminalde çıkan linke (genelde http://localhost:5173) tıklayarak uygulamayı tarayıcıda görüntüleyebilirsiniz.

