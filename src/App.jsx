import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./Components/About/About";
import Expirence from "./Components/Expirence/Expirence";
import Footer from "./Components/Footer/Footer";
import GoToTop from "./Components/GoToTop";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        <Navbar />
        <Home />
        <About />
        <Expirence />
        <Projects />
        <Footer />
        <GoToTop />
      </div>
    </>
  );
}

export default App;
