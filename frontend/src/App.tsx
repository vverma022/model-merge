import { BrowserRouter, Route , Routes} from "react-router-dom";
import Welcome from "./pages/welcome";
import { ThemeProvider } from "./components/ui/theme-provider";
import Main from "./pages/main";
import Models from "./pages/models";
import AboutUs from "./pages/about-us";




function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={< Main />} />
        <Route path="/info/model" element={< Models />} />
        <Route path="/about-us" element={<AboutUs />} />
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
