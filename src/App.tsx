import { Route, Routes } from "react-router";
import { CommonLayout } from "./components/layout/Common";
import { AddProduct } from "./pages/AddProduct";

function App() {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="/add-product" element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
