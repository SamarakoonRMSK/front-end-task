import "./App.css";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
