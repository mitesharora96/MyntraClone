const CartSummary = () => {
  return (
    <div className="summary-box my-3">
      <h6 className="d-flex justify-content-between">
        <span>Total items - </span> <span>1 </span>
      </h6>
      <h6 className="d-flex justify-content-between">
        <span>Total Price - </span> <span>Rs. 500 </span>
      </h6>
      <h6 className="text-success d-flex justify-content-between">
        <span>Total Discount - </span> <span>-5% </span>
      </h6>
      <h6 className="text-danger d-flex justify-content-between">
        <span>Delivery Charge - </span> <span>Rs. 100 </span>
      </h6>
      <hr />
      <h6 className="d-flex justify-content-between">
        <span>Total Amount - </span> <span>Rs. 600 </span>
      </h6>
    </div>
  );
};

export default CartSummary;
