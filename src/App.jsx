import ProductPage from "./ProductPage";
import ProductDescriptionPage from "./ProductDescriptionPage";
import { CartContextProvider } from "./Cart";
import ProductManager from "./ProductManager"; // Use ProductManager for CRUD operations
import { Route, Routes, HashRouter, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Cart from "./Cart";

// Breadcrumb Component
const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path);

  return (
    <nav className="bg-white-smoke">
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li className="hover:text-light-blue">
          <Link to="/">Home</Link>
        </li>
        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join('/')}`;
          return (
            <li key={to} style={{ marginLeft: '10px' }} className="flex gap-2">
              <span> &gt; </span>
              <div className="hover:text-light-blue">
                <Link to={to}>{path.replace('-', ' ')}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default function App() {
  return (
    <CartContextProvider>
      <ProductManager>
        <HashRouter>
          <Header />
          <Breadcrumb />
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-page" element={<ProductDescriptionPage />} />
          </Routes>
        </HashRouter>
      </ProductManager>
    </CartContextProvider>
  );
}
