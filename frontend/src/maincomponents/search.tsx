
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { SelectModel } from './selectmodel'

const Search = () => {
  return (
    <div className="flex w-full flex-row p-2">
      <div>
      <SelectModel />
      </div>
      <div className='w-full px-1'>
      <Input type="text" placeholder="Prompt" />
      </div>
      <div>
      <Button type="submit" className='w-20'>Send</Button>
      </div>
    </div>
    )
}

export default Search