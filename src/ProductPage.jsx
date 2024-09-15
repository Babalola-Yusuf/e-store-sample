import Card from "./Card";  // Using the original name
import Footer from "./Footer";
import ProductManager from "./ProductManager"; // Import ProductManager

const ProductPage = () => {
  return (
    <ProductManager>
      <div className="bg-white-smoke">
        <Card />  {/* Using the reverted Card component */}
        <Footer />
      </div>
    </ProductManager>
  );
};

export default ProductPage;
