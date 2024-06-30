import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select"

export function SelectModel() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Model" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Text-Based</SelectLabel>
          <SelectItem value="llama-3">llama-3</SelectItem>
        </SelectGroup>
        <SelectGroup>
            <SelectLabel>Image-Based</SelectLabel>
            <SelectItem value="resnet18">resnet18</SelectItem>
            <SelectItem value="resnet50">resnet50</SelectItem>
            <SelectItem value="resnet101">resnet101</SelectItem>
            </SelectGroup>
      </SelectContent>
    </Select>
  )
}
