import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

const CartPage = () => {
  return (
    <>
      <div className="cart-page row px-5 py-3">
        <div className="cart-item-container col-sm-8">
          <CartItems></CartItems>
          <CartItems></CartItems>
          <CartItems></CartItems>
        </div>
        <div className="cart-summary-container col-sm-4">
          <CartSummary></CartSummary>
        </div>
      </div>
    </>
  );
};

export default CartPage;
