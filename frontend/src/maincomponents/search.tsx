
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { SelectModel } from '../components/ui/selectmodel'

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