import { BrowserRouter, Route , Routes} from "react-router-dom";
import Welcome from "./pages/welcome";
import { ThemeProvider } from "./components/ui/theme-provider";
import Main from "./pages/main";




function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main />} />
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
