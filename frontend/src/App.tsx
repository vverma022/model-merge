import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome";
import { ThemeProvider } from "./components/ui/theme-provider";
import Main from "./pages/main";
import Models from "./pages/models";
import AboutUs from "./pages/about-us";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import RouteProtector from "./utils/routeprotector";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<RouteProtector><Main typewriterDelay={50} /></RouteProtector>} />
          <Route path="/info/model" element={<RouteProtector><Models /></RouteProtector>} />
          <Route path="/about-us" element={<RouteProtector><AboutUs /></RouteProtector>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
