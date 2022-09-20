import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Bnavbar from "./components/Bnavbar";
import Bservices from "./components/Bservices";
import End from "./components/End";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Bnavbar />
      <Banner />
      <Features />
      
      <About />
      <Bservices />
      <Gallery />
      <Testimonials/>
      <Team/>
      <Footer/>
      <End/>
      </BrowserRouter>
    </div>
  );
}

export default App;
