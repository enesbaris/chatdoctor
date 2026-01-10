import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4 justify-content-between">
          
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3 text-primary">
              <i className="fa-solid fa-heart-pulse me-2"></i>Dr. Mundo AI
            </h5>
            <p className="text-white-50 small">
              Yapay zeka tabanlı sağlık asistanınız ile 7/24 güvendesiniz. 
              Modern tıp bilgileriyle donatılmış algoritmalarımız size rehberlik etmek için hazır.
            </p>
            <div className="mt-3">
              <span className="badge bg-primary me-2">v1.0.0</span>
              <span className="badge bg-success">Online</span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Hızlı Bağlantılar</h6>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-2"><a href="/" className="text-decoration-none text-white-50 hover-text-white">Anasayfa</a></li>
              <li className="mb-2"><a href="#doctor" className="text-decoration-none text-white-50 hover-text-white">Asistanı Başlat</a></li>
              <li className="mb-2"><a href="#features" className="text-decoration-none text-white-50 hover-text-white">Nasıl Çalışır?</a></li>
              {/* Burası güncellendi: Link to yapısı */}
              <li className="mb-2">
                <Link to="/privacy-policy" className="text-decoration-none text-white-50 hover-text-white">
                  Gizlilik Politikası
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h6 className="fw-bold mb-3">Geliştirici İletişim</h6>
            <div className="d-flex gap-3 mb-4">
              <a href="https://www.linkedin.com/in/menesbaris?_l=tr_TR" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm rounded-circle" style={{width:'40px', height:'40px', display:'grid', placeItems:'center'}}>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/enesbaris" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm rounded-circle" style={{width:'40px', height:'40px', display:'grid', placeItems:'center'}}>
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://instagram.com/enes.basicx" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm rounded-circle" style={{width:'40px', height:'40px', display:'grid', placeItems:'center'}}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="input-group input-group-sm">
              <input type="text" className="form-control bg-dark border-secondary text-white" placeholder="E-posta bültenine kayıt ol..." />
              <button className="btn btn-primary"><i className="fa-solid fa-paper-plane"></i></button>
            </div>
          </div>

        </div>
        <hr className="my-4 border-secondary"/>
        <div className="text-center text-white-50 small">
          <p className="mb-0">&copy; 2026 Dr. Mundo AI - Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer