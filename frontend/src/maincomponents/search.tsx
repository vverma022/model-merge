
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { SelectModel } from './selectmodel'

const Search = () => {
  return (
    <div className="flex items-start min-w-full">
      <SelectModel />
      <Input type="text" placeholder="Prompt"/>
      <Button type="submit">Send</Button>
    </div>
  )
}

export default Search