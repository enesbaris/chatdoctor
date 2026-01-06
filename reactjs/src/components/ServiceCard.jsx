const ServiceCard = ({ title, description, icon, colorClass }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 border-0 shadow-sm service-card text-center p-4">
        <div className={`icon-box mb-3 mx-auto ${colorClass} text-white rounded-circle d-flex align-items-center justify-content-center`}>
          <i className={`fa-solid ${icon} fa-2x`}></i>
        </div>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard