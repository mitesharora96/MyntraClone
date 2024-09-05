import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2 border-bottom mx-3">
      <Link
        to="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img src="/Myntra_Logo.png" style={{ height: "50px" }} />
      </Link>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/home" className="nav-link px-2 link-secondary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/features" className="nav-link px-2 link-dark">
            Features
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="nav-link px-2 link-dark">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/faqs" className="nav-link px-2 link-dark">
            FAQs
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="nav-link px-2 link-dark">
            About
          </Link>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <Link to="/my-cart">
          <span type="button" className=" position-relative">
            <FaCartShopping className="cart-icon" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0<span className="visually-hidden">unread messages</span>
            </span>
          </span>
        </Link>
        <Link to="/home">
          <FaUser className="cart-icon mx-4" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
