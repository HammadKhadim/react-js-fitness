import "./App.css";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/program";
import CardBottom from "./components/card-bottom/card_bottom";
import Package from "./components/packages/packages";
import Testimonial from "./components/testimonal/testimonial";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <CardBottom />
      <Package />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
