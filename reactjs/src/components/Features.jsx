import ServiceCard from './ServiceCard'

const Features = () => {
  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Neler Yapabiliriz?</h2>
          <p className="text-muted">Yapay Zeka gücüyle sunulan sağlık hizmetleri</p>
        </div>
        <div className="row g-4">
          <ServiceCard 
            title="Belirti Kontrolü" 
            description="Şikayetlerinizi yazın, yapay zeka olası nedenleri ve önerileri saniyeler içinde listelesin."
            icon="fa-user-doctor"
            colorClass="bg-primary"
          />
          <ServiceCard 
            title="Beslenme Planı" 
            description="Kişisel verilerinize göre günlük kalori ihtiyacınızı ve örnek diyet listelerinizi oluşturun."
            icon="fa-apple-whole"
            colorClass="bg-success"
          />
          <ServiceCard 
            title="Mental Destek" 
            description="Stres yönetimi ve uyku düzeni hakkında bilimsel tavsiyeler alın."
            icon="fa-brain"
            colorClass="bg-info"
          />
        </div>
      </div>
    </section>
  )
}

export default Features