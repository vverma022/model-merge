import { useState } from "react";
import Sidebar2 from "../components/ui/sidebar2"
import Search from "../maincomponents/search"



const Main = () => {
  const [TextResponse, SetTextResponse] = useState("");
    return (
      <>
       <div className="flex h-full">
      <div className="w-64 max-h-full">
        <Sidebar2 />
      </div>
      <div className="flex-grow p-4 relative">
        <div className="w-full h-full">
        <div className="output-area p-2 mb-4">
            {TextResponse && <p>{TextResponse}</p>}
          </div>
          <div className="absolute inset-x-0 bottom-0 w-full p-2 ">
          <Search SetResponse={SetTextResponse} />
          </div>
        </div>
      </div>
    </div>
      </>
    )
  }

export default Main