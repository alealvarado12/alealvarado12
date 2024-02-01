import Navbar from "./components/Navbar";
import AboutMePage from "./pages/AboutMePage";
import Footer from "./components/Footer";
import SlideShow from "./components/Slideshow";
import LanguagesTab from "./components/LanguagesTab";
function App() {
  return (
    <div className="h-full bg-[#EADBC8] ">
    <Navbar />
    <AboutMePage/>
    <SlideShow/>
    <LanguagesTab/>
    <Footer/>
    </div>
  );
}

export default App;
