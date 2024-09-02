import ProductPage from "./ProductPage";
import ProductDescriptionPage from "./ProductDescriptionPage";
import  {ProductPageProvider}  from "./ProductPage";
import { CartContextProvider } from "./Cart";
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
        <li>
          <Link to="/">Home</Link>
        </li>
        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join('/')}`;
          return (
            <li key={to} style={{ marginLeft: '10px' }}>
              <span> &gt; </span>
              <Link to={to}>{path.replace('-', ' ')}</Link>
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
    <ProductPageProvider>
      <HashRouter>  {/*  or <BrowserRouter> */}  {/*  for navigation links */}  {/*  or <MemoryRouter> */}  {/*  for testing */}  {/*  or <StaticRouter> */}  {/*  for server-side rendering */}  {/*  or <Link> */}  {/*  for navigation links */}  {/*  or <NavLink> */}  {/*  for navigation links with active states */}  {/*  or <Redirect> */}  {/*  for redirects */}  
        <Header/>
        <Breadcrumb/>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-page" element = {<ProductDescriptionPage/>}/>
      </Routes>
      </HashRouter>
    </ProductPageProvider>
    </CartContextProvider>
  );}


