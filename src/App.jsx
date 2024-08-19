import ProductPage from "./ProductPage";
import ProductDescriptionPage from "./ProductDescriptionPage";
import  {ProductPageProvider}  from "./ProductPage";
import { CartContextProvider } from "./Cart";
import { Route, Routes, HashRouter } from "react-router-dom";
import Cart from "./Cart";

export default function App() {
  return (
    <CartContextProvider>
    <ProductPageProvider>
      <HashRouter>  {/*  or <BrowserRouter> */}  {/*  for navigation links */}  {/*  or <MemoryRouter> */}  {/*  for testing */}  {/*  or <StaticRouter> */}  {/*  for server-side rendering */}  {/*  or <Link> */}  {/*  for navigation links */}  {/*  or <NavLink> */}  {/*  for navigation links with active states */}  {/*  or <Redirect> */}  {/*  for redirects */}
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-page" element = {<ProductDescriptionPage/>}/>
      </Routes>
      </HashRouter>
    </ProductPageProvider>
    </CartContextProvider>
  );}


