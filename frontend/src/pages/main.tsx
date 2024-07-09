import Search from "../maincomponents/search"
import Sidebar2 from "../components/ui/sidebar2"


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