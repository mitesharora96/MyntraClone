const Footer = () => {
  return (
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-2 border-top mx-3">
      <div className="col mb-3">
        <a
          href="/"
          className="d-flex align-items-center mb-3 link-dark text-decoration-none"
        ></a>
        <p className="text-muted">© 2024</p>
      </div>

      <div className="col mb-3"></div>

      <div className="col mb-3">
        <h5>Men</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Pricing
            </a>
          </li>
        </ul>
      </div>

      <div className="col mb-3">
        <h5>Women</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Pricing
            </a>
          </li>
        </ul>
      </div>

      <div className="col mb-3">
        <h5>Styles</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
