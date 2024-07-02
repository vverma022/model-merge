import { BrowserRouter, Route , Routes} from "react-router-dom";
import Welcome from "./pages/welcome";
import { ThemeProvider } from "./components/ui/theme-provider";
import Sidebar from "./components/ui/sidebar";




function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Sidebar />} />
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
