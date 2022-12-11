import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Schedule from "./components/Schedule/Schedule";
import Testimonials from "./components/Testimonials/Testimonials";
import Trainer from "./components/Trainer/Trainer";

function App() {
  return <>
  <Navbar />
  <Hero />
  <Schedule />
  <Trainer />
  <Pricing />
  <Testimonials />
  <Footer />
  </>;
}

export default App;
