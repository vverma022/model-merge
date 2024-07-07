import Search from "../maincomponents/search"
import Sidebar2 from "../components/ui/sidebar2"


const Main = () => {
    return (
      <>
        <div className="flex h-full">
          <div className="w-1/5 max-h-full">
            <Sidebar2 />
          </div>
          <div className="w-full">
            <Search />
          </div>
        </div>
      </>
    )
  }

export default Main