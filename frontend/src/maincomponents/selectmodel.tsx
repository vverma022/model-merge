import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"

interface SelectModelProps {
  onChange: (value : string) => void;
}


export function SelectModel({onChange}: SelectModelProps) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Model"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-red-600">Text-Based</SelectLabel>
          <SelectItem value="llama-70b-8192">llama-3</SelectItem>
          <SelectItem value="Mixtral-8x7b-32768">Mistral</SelectItem>
          <SelectItem value="command-r-plus">Command-R-Plus</SelectItem>
          <SelectItem value="claude-3-5-sonnet-20240620">Claude 3.5 Sonnet</SelectItem>
          <SelectItem value="Linkedin Scraper">Linkedin Scraper</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel className="text-red-600">Image-Based</SelectLabel>
          <SelectItem value="SDXL 1.0">SDXL-1.0</SelectItem>
          </SelectGroup>
      </SelectContent>
    </Select>
  )
}
