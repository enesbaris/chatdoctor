import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div className="container py-5" style={{ marginTop: '80px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-5">
              <h1 className="fw-bold text-primary mb-4">Gizlilik ve Veri Politikası</h1>
              <p className="text-muted mb-4">Son Güncelleme: 10 Ocak 2026</p>

              <div className="alert alert-info border-0 d-flex align-items-center mb-4">
                <i className="fa-solid fa-circle-info fa-lg me-3"></i>
                <div>
                  Dr. Mundo AI, sağlık teknolojilerini geliştirmek amacıyla "Açık Veri" ve "Sürekli Öğrenme" prensiplerini benimser.
                </div>
              </div>

              {/* GÜNCELLENEN KISIM 1 */}
              <h5 className="fw-bold mt-4">1. Veri Toplama ve Model Eğitimi</h5>
              <p>
                Dr. Mundo AI ile gerçekleştirdiğiniz sohbetler ve girilen semptom verileri, yapay zeka modellerimizin doğruluğunu artırmak, hastalık belirtilerini daha iyi analiz edebilmek ve sağlık asistanımızı eğitmek amacıyla <strong>anonimleştirilerek</strong> sunucularımızda depolanır.
              </p>
              <p>
                Bu veriler, kişisel kimlik bilgilerinizden (ad, soyad, adres vb.) arındırılarak sadece tıbbi analiz ve Ar-Ge çalışmaları ("Machine Learning Training") kapsamında kullanılır.
              </p>
              <h5 className="fw-bold mt-4">2. Veri Kullanımı ve Geliştirme</h5>
              <p>
                Toplanan anonim veriler şu amaçlarla işlenir:
              </p>
              <ul>
                <li>Yapay zekanın nadir görülen semptomları tanımasını sağlamak.</li>
                <li>Diyalog kalitesini ve empati yeteneğini geliştirmek.</li>
                <li>Bölgesel veya mevsimsel sağlık trendlerini analiz etmek.</li>
              </ul>

              <h5 className="fw-bold mt-4">3. Yapay Zeka Sorumluluk Reddi</h5>
              <p>Bu uygulama Groq API altyapısını kullanır. Üretilen yanıtlar tıbbi tavsiye niteliği taşımaz. Sağlık sorunlarınız için mutlaka bir doktora başvurunuz.</p>

              <h5 className="fw-bold mt-4">4. İletişim</h5>
              <p>Veri politikamızla ilgili sorularınız veya veri silme talepleriniz için <a href="mailto:info@drmundoai.com">info@drmundoai.com</a> adresinden bize ulaşabilirsiniz.</p>

              <div className="mt-5 text-center">
                <Link to="/" className="btn btn-primary rounded-pill px-4">
                  <i className="fa-solid fa-arrow-left me-2"></i>Ana Sayfaya Dön
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy