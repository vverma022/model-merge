import { BrowserRouter, Route , Routes} from "react-router-dom";
import Welcome from "./pages/welcome";
import { ThemeProvider } from "./components/ui/theme-provider";




function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
