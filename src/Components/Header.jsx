import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2 border-bottom mx-3">
      <a
        href="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img src="/Myntra_Logo.png" style={{ height: "50px" }} />
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" className="nav-link px-2 link-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-dark">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-dark">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-dark">
            FAQs
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-dark">
            About
          </a>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <span>
          <span type="button" class=" position-relative">
            <FaCartShopping className="cart-icon" />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0<span class="visually-hidden">unread messages</span>
            </span>
          </span>
        </span>
        <span>
          <FaUser className="cart-icon mx-4" />
        </span>
      </div>
    </header>
  );
};

export default Header;
