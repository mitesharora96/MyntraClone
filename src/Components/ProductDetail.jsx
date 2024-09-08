import { useLoaderData, useParams } from "react-router-dom";
import ReviewContainer from "./ReviewContainer";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/cartSlice";

const ProductDetail = () => {
  const product = useLoaderData();
  const cartItems = useSelector((items) => items.cartItems?.cartList);
  const cartDispatcher = useDispatch();
  const addCartItem = () => {
    cartDispatcher(cartActions.addToCart(product.id));
  };
  const removeCartItem = () => {
    cartDispatcher(cartActions.removeFromCart(product.id));
  };
  return (
    <div className="d-flex">
      <img src={product?.images[0]} className="pro-detail-image" alt="" />
      <div className="pro-details p-5">
        <h4>
          {product.title}{" "}
          {product.stock && (
            <span className="badge text-bg-danger">In Stock</span>
          )}
        </h4>
        <h6>{product.description}</h6>
        <p className="py-0">Brand Name - {product.brand}</p>
        <p className="py-0">
          Price - Rs. {product.price}{" "}
          <span className="text-danger">(-{product.discountPercentage}%)</span>
        </p>
        <p className="py-0">{product.warrantyInformation}</p>
        <p className="py-0">{product.returnPolicy}</p>
        {cartItems?.includes(product.id) ? (
          <a
            xlinkHref="#"
            className="btn btn-danger w-50"
            onClick={removeCartItem}
          >
            Remove from Cart
          </a>
        ) : (
          <a
            xlinkHref="#"
            className="btn btn-primary w-50"
            onClick={addCartItem}
          >
            Add to Cart
          </a>
        )}

        <div className="py-4">
          <h6>
            Reviews-{" "}
            <span className="badge bg-success">Rating - {product?.rating}</span>
          </h6>
          <ReviewContainer reviews={product.reviews}></ReviewContainer>
        </div>
      </div>
    </div>
  );
};

export const getProductDetail = (id) => {
  return fetch("https://dummyjson.com/products/" + id).then((res) =>
    res.json()
  );
};

export default ProductDetail;
