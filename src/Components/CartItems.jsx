import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/cartSlice";

const CartItems = ({ item }) => {
  const productList = useSelector((store) => store?.products?.productList);
  const product = productList?.filter((pro) => pro?.id == item)[0];
  const cartDispatcher = useDispatch();
  const removeCartItem = () => {
    cartDispatcher(cartActions.removeFromCart(product.id));
  };
  return (
    <div className="card cart-items my-3">
      <span onClick={removeCartItem} className="cart-trash-icon">
        <FaTrashAlt />
      </span>
      <img
        src={product?.images[0]}
        className="card-img-top selected-item-image"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{product?.title}</h5>
        <p className="card-text">{product?.description}</p>
        <h6 className="card-text">
          Rs. {product?.price}
          <span className="mx-1 text-danger">
            (-{product?.discountPercentage}%)
          </span>
        </h6>
        <h6>
          <span className="badge bg-danger">Rating - {product?.rating}</span>
        </h6>
      </div>
    </div>
  );
};

export default CartItems;
