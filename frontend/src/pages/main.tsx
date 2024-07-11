import Sidebar2 from "../components/ui/sidebar2"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { SelectModel } from "../maincomponents/selectmodel"


const Main = () => {
    return (
      <>
       <div className="flex h-full">
      <div className="w-64 max-h-full">
        <Sidebar2 />
      </div>
      {/* Main Content */}
      <div className="flex-grow p-4 relative">
        <div className="absolute inset-x-0 bottom-0 w-full p-2">
        <div className="flex w-full flex-row p-2">
      <div>
      <SelectModel/>
      </div>
      <div className='w-full px-1'>
      <Input type="text" placeholder="Prompt"/>
      </div>
      <div>
      <Button type="submit"className='w-28 bg-red-600 hover:bg-red-400 text-white'>
        Send
      </Button>
      </div>
    </div>
        </div>
      </div>
    </div>
      </>
    )
  }

export default Main