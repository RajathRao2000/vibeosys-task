import { NavLink, Outlet } from "react-router";
import { IoIosCart } from "react-icons/io";

export const CommonLayout = () => {
  return (
    <div className="poppins-regular flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-between p-8">
        <img src="/logo.svg" alt="logo" />
        <div className="flex gap-3">
          <NavLink to="/add-product" className="">
            Add Product
          </NavLink>
          <NavLink to="/products" className="">
            Products
          </NavLink>
          <NavLink to="/add-to-cart" className="">
            <IoIosCart />
          </NavLink>
        </div>
      </header>
      <div className="min-h-[calc(100vh-4rem)] overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
