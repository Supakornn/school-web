import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/Theme";
import Nav from "./components/Nav";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Inside from "./components/sections/Inside";
import Certificates from "./components/sections/Certificates";
import Projects from "./components/sections/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Nav />
        <Home />
        <About />
        <Inside />
        {/* <Certificates /> */}
        <Projects />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
