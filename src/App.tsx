import { Route, Routes } from "react-router";
import { CommonLayout } from "./components/layout/Common";
import { AddProduct } from "./pages/AddProduct";
import { Products } from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
