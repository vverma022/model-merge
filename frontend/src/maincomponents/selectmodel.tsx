import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"

export function SelectModel() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Model" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Text-Based</SelectLabel>
          <SelectItem value="llama-70b-8192">llama-3</SelectItem>
          <SelectItem value="Mixtral-8x7b-32768">Mixtral</SelectItem>
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
