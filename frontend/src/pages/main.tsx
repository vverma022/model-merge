import { useState, useEffect } from "react";
import Sidebar2 from "../components/ui/sidebar2";
import Search from "../maincomponents/search";

interface MainPropsType {
  typewriterDelay: number; // in ms
}

const Main = ({ typewriterDelay }: MainPropsType) => {
  const [TextResponse, SetTextResponse] = useState("");
  const [DisplayedText, setDisplayedText] = useState("");
  const [Typing, SetTyping] = useState(false);
  const [Output, SetOutput] = useState(false);

  useEffect(() => {
    if (TextResponse) {
      SetTyping(true);
      SetOutput(true);
      setDisplayedText("");
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(TextResponse.slice(0, i));

        i++;
        if (i > TextResponse.length) {
          clearInterval(intervalId);
          SetTyping(false);
        }
      }, typewriterDelay); // Delay is in ms

      return () => clearInterval(intervalId);
    }
  }, [TextResponse, typewriterDelay]);

  return (
    <div className="flex h-full">
      <div className="w-64 max-h-full">
        <Sidebar2 />
      </div>
      <div className="flex-grow p-4 relative">
        <div>
          <div className="overflow-hidden max-w-full h-full">
            {Output && (
              <div className="w-auto h-auto border rounded-lg">
              <div className="typewriter-container">
              <p
                className="wrap border-r-1 pr-1 rounded-lg p-2"
                style={{ maxHeight: "100%", overflow: "hidden"}}
              >
                {DisplayedText}
                {Typing && <span className="cursor border">|</span>}
              </p>
            </div>
          </div>
            )}
           
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 w-full p-2">
          <Search SetResponse={SetTextResponse} />
        </div>
      </div>
    </div>
  );
};

export default Main;
