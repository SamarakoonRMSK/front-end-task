import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Faq />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
