import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RootState } from "@/redux-store/store";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";
export const Products = () => {
  const [searchInput, setSearchInput] = useState("");
  const productsList = useSelector(
    (state: RootState) => state.products.products,
  );
  return (
    <div className="flex size-full flex-col gap-5 p-10">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Input
            className="w-[200px]"
            placeholder="Search by product name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <IoIosSearch className="absolute top-1/2 right-2 -translate-y-1/2" />
        </div>
        <div className="shrink-0">{productsList.length} Product(s)</div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(productsList) &&
            productsList
              .filter((product) =>
                product.nameOfProduct
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()),
              )
              .map((product, index) => (
                <TableRow key={product.nameOfProduct}>
                  <TableCell>{index}</TableCell>
                  <TableCell>{product.nameOfProduct}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.expiryDate.toString()}</TableCell>
                  <TableCell>{product.cost}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  );
};
