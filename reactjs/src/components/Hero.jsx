const Hero = () => {
  return (
    <header className="hero-section d-flex align-items-center justify-content-center w-100" style={{ minHeight: '100vh' }}>
      <div className="container text-center text-white px-4">
        <h1 className="display-3 fw-bold mb-3">Kişisel Sağlık Asistanınız</h1>
        <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px' }}>Yapay zeka destekli analizler ile sağlığınızı takip edin, belirtilerinizi kontrol edin ve sağlıklı yaşama adım atın.</p>
        <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
          <a href="#doctor" className="btn btn-light btn-lg rounded-pill px-5">Hemen Analiz Et</a>
          <a href="#features" className="btn btn-outline-light btn-lg rounded-pill px-5">Daha Fazla Bilgi</a>
        </div>
      </div>
    </header>
  )
}

export default Hero