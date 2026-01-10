import { useRef } from 'react'

const Navbar = () => {
  const navButtonRef = useRef(null)
  const navCollapseRef = useRef(null)

  const closeMenu = () => {
    if (window.innerWidth < 992) {
      navButtonRef.current.click()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <i className="fa-solid fa-heart-pulse me-2"></i>Doctor Mundo Aİ
        </a>
        <button 
          ref={navButtonRef}
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" ref={navCollapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#" onClick={closeMenu}>Anasayfa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features" onClick={closeMenu}>Özellikler</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#doctor" onClick={closeMenu}>Chat Doctor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>İletişim</a>
            </li>
          </ul>
          <a href="#doctor" className="btn btn-light text-primary ms-3 fw-semibold rounded-pill px-4" onClick={closeMenu}>Başla</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar