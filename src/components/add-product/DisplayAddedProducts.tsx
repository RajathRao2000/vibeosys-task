import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RootState } from "@/redux-store/store";
import { useSelector } from "react-redux";

export const DisplayAddedProducts = () => {
  const productsList = useSelector(
    (state: RootState) => state.products.products,
  );
  return (
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
          productsList.map((product, index) => (
            <TableRow key={product.nameOfProduct}>
              <TableCell>{index}</TableCell>
              <TableCell>{product.nameOfProduct}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.expiryDate}</TableCell>
              <TableCell>{product.cost}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
