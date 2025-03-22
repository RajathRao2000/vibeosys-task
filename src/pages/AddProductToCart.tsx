import { Button } from "@/components/ui/button";
import { addNewProductToCart } from "@/redux-store/productsSlice";
import { RootState } from "@/redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

export const AddProductToCart = () => {
  const { products: productsList, productInCart } = useSelector(
    (state: RootState) => state.products,
  );
  const dispatch = useDispatch();
  return (
    <div className="flex size-full flex-col gap-4 p-10">
      <div className="flex items-center justify-between">
        <div className="text-xl">Add product to cart</div>
        <div className="shrink-0">{productInCart.length} Items in Cart</div>
      </div>
      <div className="flex items-center justify-center">
        <div className="margin-auto grid grid-cols-3 gap-5">
          {Array.isArray(productsList) &&
            productsList.map((product) => (
              <div
                className="flex min-w-[200px] flex-col gap-3 rounded-md border border-black p-5"
                key={product.nameOfProduct}
              >
                <div className="text-xl font-bold">{product.nameOfProduct}</div>
                <div className="size-fit rounded-full border border-amber-400 bg-amber-100 px-2 py-1 text-xs">
                  {product.category}
                </div>
                <div className="flex items-center justify-between">
                  <div>{product.cost}</div>
                  <Button
                    className="bg-blue-500"
                    onClick={() => dispatch(addNewProductToCart(product))}
                  >
                    Add <FaCartShopping />
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
