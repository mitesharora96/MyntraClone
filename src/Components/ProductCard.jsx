import { MdOutlineStar } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card position-relative" style={{ width: "18rem" }}>
        <img
          src={product.images[0]}
          className="card-img-top product-image"
          alt="..."
        />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          {product.rating} <MdOutlineStar className="rating-icon" />
        </span>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h6 className="card-text">
            Rs.{product.price}
            <span className="mx-1 text-danger">
              (-{product.discountPercentage}%)
            </span>
          </h6>
          <a href="#" className="btn btn-primary add-cart-btn">
            Add to Cart
          </a>
          <a href="#" className="btn btn-danger add-cart-btn">
            Remove from Cart
          </a>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
