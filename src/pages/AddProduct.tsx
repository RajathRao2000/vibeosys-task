import { AddProductForm } from "@/components/add-product/AddProductForm";
import { DisplayAddedProducts } from "@/components/add-product/DisplayAddedProducts";

export const AddProduct = () => {
  return (
    <div className="flex size-full flex-col p-10">
      <div className="text-2xl">Add Product To Cart</div>
      <AddProductForm />
      <DisplayAddedProducts />
    </div>
  );
};
