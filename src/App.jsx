import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/Theme";
import Nav from "./components/Nav";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Inside from "./components/sections/Inside";
import School from "./components/sections/School";
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
        <School />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
