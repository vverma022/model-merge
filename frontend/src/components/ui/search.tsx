
import { Input } from './input'
import { Button } from './button'
import { SelectModel } from './selectmodel'

const Search = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <SelectModel />
      <Input type="text" placeholder="Prompt" />
      <Button type="submit">Send</Button>
    </div>
  )
}

export default Search