import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const HomePage = () => {
  let productList = [];
  const productObj = useSelector((store) => {
    return store.products;
  });
  productList = productObj?.productList;
  return (
    <div className="products-container">
      {productList?.map((item) => (
        <ProductCard key={item.id} product={item}></ProductCard>
      ))}
    </div>
  );
};

export default HomePage;
