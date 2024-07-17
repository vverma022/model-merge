import { useState, useEffect } from "react";
import Sidebar2 from "../components/ui/sidebar2";
import Search from "../maincomponents/search";

// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

interface MainPropsType {
  typewriterDelay: number; // in ms
}

const Main = ({ typewriterDelay }: MainPropsType) => {
  const [TextResponse, SetTextResponse] = useState("");
  const [DisplayedText, setDisplayedText] = useState("");
  const [Typing, SetTyping] = useState(false);

  // useEffect(() => {
  //   if (TextResponse) {
  //     SetTyping(true);
  //     setDisplayedText(""); // Clear displayed text before starting the delay
  //     const timer = setTimeout(() => {
  //       setDisplayedText(TextResponse);
  //       SetTyping(false);
  //     }, 3500); // Duration of the typewriter effect (matches the CSS animation duration)

  //     return () => clearTimeout(timer);
  //   }
  // }, [TextResponse]);

  useEffect(() => {
    if (TextResponse) {
      SetTyping(true);
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
        <div
          className="output-area p-2 mb-4 border rounded-xl"
          style={{
            maxWidth: "calc(100% - 64px)",
            maxHeight: "calc(100vh - 80px)",
            overflow: "auto",
          }}
        >
          <div className="overflow-hidden max-w-full h-full">
            <div className="w-auto h-auto">
              <div className="typewriter-container">
                <p
                  className="wrap border-r-1 pr-1"
                  style={{ maxHeight: "100%", overflow: "hidden" }}
                >
                  {DisplayedText}
                  {Typing && <span className="cursor">|</span>}
                </p>

                {/* {Typing ? (
                  <p
                    className="wrap border-r-1 pr-1"
                    style={{ maxHeight: "100%", overflow: "hidden" }}
                  >
                    {DisplayedText}
                  </p>
                ) : (
                  <p
                    className="wrap"
                    style={{ maxHeight: "100%", overflow: "hidden" }}
                  >
                    {TextResponse}
                  </p>
                )} */}
              </div>
            </div>
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
