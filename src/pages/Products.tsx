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
export const Products = () => {
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
            <TableRow>
              <TableCell>{index}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.expiryDate.toLocaleDateString()}</TableCell>
              <TableCell>{product.cost}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
