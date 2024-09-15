import { useContext } from "react";
import { ProductsContext } from "./ProductManager"; // Correct context import
import { cartContext } from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Card = () => {
  const { products } = useContext(ProductsContext); // Get products from context
  const { onAddToCart } = useContext(cartContext);
  const navigate = useNavigate();

  // Price formatter function
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  const handleProductClick = (product) => {
    navigate('/product-page', { state: { product } }); // Pass the product object using state
  };

  if (!products || products.length === 0) {
    return <div>No products available</div>; // Handle no products case
  }

  return (
    <div className="p-2 sm:p-5">
      <h1>Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div className="border-b border-dark-brown pb-3 group" key={product.id}>
            <div
              className="card border rounded border-light-brown shadow-xl hover:border-light-blue hover:scale-x-105 hover:cursor-pointer ease-in-out duration-300 max-w-md mb-2 p-3"
              onClick={() => handleProductClick(product)}
            >
              <ul className="sm:flex justify-between gap-2 items-start">
                <div className="group-hover:opacity-75">
                  <li>
                    <img src={product.image} alt={`Image of ${product.name}`} />
                  </li>
                </div>
                <div className="min-w-40 flex flex-col justify-between xl:gap-10">
                  <div>
                    <li className="mb-1 xl:mb-3">Name: {product.name}</li>
                    <li className="mb-1 xl:mb-3">Price: {formatPrice(product.price)}</li> {/* Use formatPrice here */}
                    <li className="mb-1 xl:mb-3">Color: {product.color}</li>
                    <li className="mb-1 xl:mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          color={i < product.starReviews ? "orange" : "silver"}
                          icon={faStar}
                          aria-hidden="true"
                        />
                      ))}
                      <span className="sr-only">{product.starReviews} out of 5 stars</span>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div>
              <button
                className="border border-light-brown shadow-md hover:bg-light-blue font-bold py-1 px-2 rounded flex gap-2 items-center justify-center mt-1 duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
              >
                Add to cart <span className="text-purple"><FontAwesomeIcon icon={faCartShopping} /></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
