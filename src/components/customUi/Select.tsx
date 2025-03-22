import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

interface SelectBar {
  options: { name: string; value: string }[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

export const SelectBar: FC<SelectBar> = ({
  options,
  value,
  onValueChange,
  placeholder,
}) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder || "select value"} />
      </SelectTrigger>
      <SelectContent>
        {Array.isArray(options) &&
          options.map((option) => {
            return (
              <SelectItem key={option.value} value={option.value}>
                {option.name}
              </SelectItem>
            );
          })}
      </SelectContent>
    </Select>
  );
};
