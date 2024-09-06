import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

const CartPage = () => {
  const cartItems = useSelector((items) => items.cartItems?.cartList);
  return (
    <>
      {cartItems.length == 0 && <h5>Cart is Empty</h5>}
      {cartItems.length !== 0 && (
        <div className="cart-page row px-5 py-3">
          <div className="cart-item-container col-sm-8">
            {cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItems key={item} item={item}></CartItems>
              ))}
          </div>
          <div className="cart-summary-container col-sm-4">
            {cartItems.length > 0 && (
              <CartSummary cartItems={cartItems}></CartSummary>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
