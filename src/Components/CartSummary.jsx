import { useSelector } from "react-redux";

const CartSummary = ({ cartItems }) => {
  const productList = useSelector((store) => store?.products?.productList);
  let summaryProducts = [];
  productList?.forEach((pro) => {
    cartItems.forEach((element) => {
      if (element == pro.id) {
        summaryProducts.push(pro);
      }
    });
  });
  let totalPrice = 0;
  summaryProducts.forEach((element) => (totalPrice += Number(element.price)));
  const totalAmount = Number(totalPrice) + 10;
  return (
    <div className="summary-box my-3">
      <h6 className="d-flex justify-content-between">
        <span>Total items - </span> <span>{cartItems.length} </span>
      </h6>
      <h6 className="d-flex justify-content-between">
        <span>Total Price - </span>
        <span>Rs. {totalPrice.toFixed(2)} </span>
      </h6>
      <h6 className="text-success d-flex justify-content-between">
        <span>Total Discount - </span> <span>-15% </span>
      </h6>
      <h6 className="text-danger d-flex justify-content-between">
        <span>Delivery Charge - </span> <span>Rs. 10 </span>
      </h6>
      <hr />
      <h6 className="d-flex justify-content-between">
        <span>Total Amount - </span>
        <span>Rs. {totalAmount.toFixed(2)} </span>
      </h6>
      <button className="btn btn-primary w-100 my-3">Place Order</button>
    </div>
  );
};

export default CartSummary;
