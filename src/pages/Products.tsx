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
import { useSelector } from "react-redux";
export const Products = () => {
  const [searchInput, setSearchInput] = useState("");
  const productsList = useSelector(
    (state: RootState) => state.products.products,
  );
  return (
    <div className="flex flex-col gap-5">
      <Input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
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
