import { MdOutlineStar } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/cartSlice";

const ProductCard = ({ product }) => {
  const cartItems = useSelector((items) => items.cartItems?.cartList);
  const cartDispatcher = useDispatch();
  const addCartItem = () => {
    cartDispatcher(cartActions.addToCart(product.id));
  };
  const removeCartItem = () => {
    cartDispatcher(cartActions.removeFromCart(product.id));
  };
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

          {cartItems?.includes(product.id) ? (
            <a
              xlinkHref="#"
              className="btn btn-danger add-cart-btn"
              onClick={removeCartItem}
            >
              Remove from Cart
            </a>
          ) : (
            <a
              xlinkHref="#"
              className="btn btn-primary add-cart-btn"
              onClick={addCartItem}
            >
              Add to Cart
            </a>
          )}

          {/* <a
            xlinkHref="#"
            className="btn btn-primary add-cart-btn"
            onClick={addCartItem}
          >
            Add to Cart
          </a>
          <a
            xlinkHref="#"
            className="btn btn-danger add-cart-btn"
            onClick={removeCartItem}
          >
            Remove from Cart
          </a> */}
        </div>
      </div>
    </>
  );
};
export default ProductCard;
