import { useState, useEffect, createContext } from "react";

export const ProductsContext = createContext();

export const ProductManager = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Define the `onShowDescription` function
  const onShowDescription = (product) => {
    // Logic for showing a product description
    return product; // Assuming you just want to return the product itself
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ProductsContext.Provider value={{ products, onShowDescription }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductManager;
