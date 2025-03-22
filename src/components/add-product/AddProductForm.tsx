import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SelectBar } from "@/components/customUi/Select";
import { DatePicker } from "@/components/ui/datePicker";
import { useDispatch } from "react-redux";
import { addNewProduct } from "@/redux-store/productsSlice";
const categories = ["Finished", "Semi-Finished", "Raw"] as const;
const categorySelect = [
  { name: "Finished", value: "Finished" },
  { name: "Semi-Finished", value: "Semi-Finished" },
  { name: "Raw", value: "Raw" },
];
const formSchema = z.object({
  nameOfProduct: z.string().min(2).max(50),
  category: z.enum(categories),
  expiryDate: z.date(),
  cost: z.coerce.number(),
});
export const AddProductForm = () => {
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameOfProduct: "",
      category: "Finished",
      expiryDate: new Date(),
      cost: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    dispatch(addNewProduct(values));
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-start gap-4 p-8"
        >
          <FormField
            control={form.control}
            name="nameOfProduct"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name Of Product</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Product name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <SelectBar
                    options={categorySelect}
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cost</FormLabel>
                <FormControl>
                  <DatePicker
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cost</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="cost" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="self-center" type="submit">
            Submit
          </Button>
          <Button
            onClick={() => form.reset()}
            className="self-center"
            type="reset"
          >
            Reset
          </Button>
        </form>
      </Form>
    </div>
  );
};
