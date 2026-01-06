const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <i className="fa-solid fa-heart-pulse me-2"></i>Doctor Mundo Aİ
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Anasayfa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Özellikler</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#doctor">Chat Doctor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">İletişim</a>
            </li>
          </ul>
          <a href="#doctor" className="btn btn-light text-primary ms-3 fw-semibold rounded-pill px-4">Başla</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar