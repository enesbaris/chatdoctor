const Hero = () => {
  return (
    <header className="hero-section d-flex align-items-center">
      <div className="container text-center text-white">
        <h1 className="display-3 fw-bold mb-3">Kişisel Sağlık Asistanınız</h1>
        <p className="lead mb-4">Yapay zeka destekli analizler ile sağlığınızı takip edin, belirtilerinizi kontrol edin ve sağlıklı yaşama adım atın.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#doctor" className="btn btn-light btn-lg rounded-pill px-5">Hemen Analiz Et</a>
          
          <a href="#features" className="btn btn-outline-light btn-lg rounded-pill px-5">Daha Fazla Bilgi</a>
        </div>
      </div>
    </header>
  )
}

export default Hero