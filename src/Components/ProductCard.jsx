import { MdOutlineStar } from "react-icons/md";

const ProductCard = () => {
  const product = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "RCH45Q1A",
    weight: 2,
    dimensions: {
      width: 23.17,
      height: 14.43,
      depth: 28.01,
    },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "Low Stock",
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Scarlett Wright",
        reviewerEmail: "scarlett.wright@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 24,
    meta: {
      createdAt: "2024-05-23T08:56:21.618Z",
      updatedAt: "2024-05-23T08:56:21.618Z",
      barcode: "9164035109868",
      qrCode: "https://assets.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
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
