import { Route, Routes } from "react-router";
import { CommonLayout } from "./components/layout/Common";
import { AddProduct } from "./pages/AddProduct";
import { Products } from "./pages/Products";
import { AddProductToCart } from "./pages/AddProductToCart";

function App() {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-to-cart" element={<AddProductToCart />} />
      </Route>
    </Routes>
  );
}

export default App;
