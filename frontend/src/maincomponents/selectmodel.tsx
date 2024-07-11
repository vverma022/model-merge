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
          <SelectItem value="Mixtral-8x7b-32768">Mistral</SelectItem>
          <SelectItem value="command-r-plus">Command-R-Plus</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Image-Based</SelectLabel>
          <SelectItem value="SDXL 1.0">Stable Diffusion-XL</SelectItem>
          </SelectGroup>
      </SelectContent>
    </Select>
  )
}
