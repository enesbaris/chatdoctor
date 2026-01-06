const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="mb-3 d-flex justify-content-center gap-4">
          <a href="https://www.linkedin.com/in/menesbaris?_l=tr_TR" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
            <i className="fa-brands fa-linkedin fa-lg cursor-pointer"></i>
          </a>
          <a href="https://github.com/enesbaris" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
            <i className="fa-brands fa-github fa-lg cursor-pointer"></i>
          </a>
          <a href="https://instagram.com/enes.basicx" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
            <i className="fa-brands fa-instagram fa-lg cursor-pointer"></i>
          </a>
        </div>
        <p class="mb-0">&copy; 2026 Chat Doctor - Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  )
}

export default Footer