import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "../components/ui/select"
  
  interface SelectTypeProps {
    onChange: (value : string) => void;
  }
  
  
  export function SelectType({onChange}: SelectTypeProps) {
    return (
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Styles"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-red-600">Image Style</SelectLabel>
            <SelectItem value="realistic">realism</SelectItem>
            <SelectItem value="futuristic">futuristic</SelectItem>
            <SelectItem value="anime">anime</SelectItem>
            <SelectItem value="digital-art">digital-art</SelectItem>
            <SelectItem value="3D">3d-model</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }