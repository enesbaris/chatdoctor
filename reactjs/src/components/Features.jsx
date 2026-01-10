import ServiceCard from './ServiceCard'

const Features = () => {
  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-10 text-primary mb-2 px-3 py-2 rounded-pill">Süreç</span>
          <h2 className="fw-bold text-dark">Sistem Nasıl Çalışır?</h2>
          <p className="text-muted">Sağlık durumunuzu analiz etmek sadece 3 adım sürer.</p>
        </div>
        
        <div className="row g-4 relative">
          <ServiceCard 
            title="1. Şikayetini Yaz" 
            description="Baş ağrısı, halsizlik veya merak ettiğiniz herhangi bir sağlık durumunu sohbet ekranına yazın."
            icon="fa-pen-to-square"
            colorClass="bg-primary"
          />
          
          <ServiceCard 
            title="2. Yapay Zeka Analizi" 
            description="Llama-3 modelimiz saniyeler içinde semptomlarınızı tıbbi veritabanı ile karşılaştırır."
            icon="fa-microchip"
            colorClass="bg-warning"
          />
          
          <ServiceCard 
            title="3. Öneri ve Yönlendirme" 
            description="Size özel hazırlanmış, anlaşılır ve bilimsel sağlık tavsiyelerini anında alın."
            icon="fa-clipboard-check"
            colorClass="bg-success"
          />
        </div>
      </div>
    </section>
  )
}

export default Features