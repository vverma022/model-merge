import Sidebar2 from "../components/ui/sidebar2"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { SelectModel } from "../maincomponents/selectmodel"
import Search from "../maincomponents/search"



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
        <Search />
        </div>
      </div>
    </div>
      </>
    )
  }

export default Main