import "./App.css";
//npm install aos --save
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <div data-aos="fade-in" className="a"></div>
      <div data-aos="fade-up" className="b"></div>
      <div data-aos="fade-down" className="c"></div>
      <div data-aos="fade-left" className="d"></div>
      <div data-aos="fade-right" className="a"></div>
      <div data-aos="flip-up" className="b"></div>
      <div data-aos="flip-down" className="c"></div>
      <div data-aos="flip-left" className="d"></div>
      <div data-aos="flip-right" className="a"></div>
      <div data-aos="slide-down" className="b"></div>
      <div data-aos="zoom-in" className="c"></div>
      <div data-aos="zoom-in-up" className="d"></div>
      <div data-aos="zoom-in-left" className="a"></div>
      <div data-aos="zoom-in-right" className="c"></div>
    </div>
  );
}

export default App;
