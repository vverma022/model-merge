import { useState, useEffect } from "react";
import Sidebar2 from "../components/ui/sidebar2"
import Search from "../maincomponents/search"



const Main = () => {
  const [TextResponse, SetTextResponse] = useState("");
  const [DisplayedText, setDisplayedText] = useState("");
  const [Typing, SetTyping] = useState(false);

  useEffect(() => {
    if (TextResponse) {
      SetTyping(true);
      setDisplayedText(""); // Clear displayed text before starting the delay
      const timer = setTimeout(() => {
        setDisplayedText(TextResponse);
        SetTyping(false);
      }, 3500); // Duration of the typewriter effect (matches the CSS animation duration)

      return () => clearTimeout(timer);
    }
  }, [TextResponse]);

  return (
    <div className="flex h-full">
    <div className="w-64 max-h-full">
      <Sidebar2 />
    </div>
    <div className="flex-grow p-4 relative">
      <div className="output-area p-2 mb-4 border rounded-xl" style={{ maxWidth: 'calc(100% - 64px)', maxHeight: 'calc(100vh - 80px)', overflow: 'auto' }}>
        <div className="overflow-hidden max-w-full h-full">
          <div className="w-auto h-auto">
            <div className="typewriter-container">
              {Typing ? (
                <p className="animate-typing wrap border-r-1 pr-1" style={{ maxHeight: '100%', overflow: 'hidden' }}>{TextResponse}</p>
              ) : (
                <p className="wrap" style={{ maxHeight: '100%', overflow: 'hidden' }}>{DisplayedText}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 w-full p-2">
        <Search SetResponse={SetTextResponse} />
      </div>
    </div>
  </div>
    )
  }

export default Main