// src/App.tsx
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { MainTitle } from "./components/pages/home/MainTitle";
import { Features } from "./components/pages/home/Features";
import { Metric } from "./components/pages/home/Metric";
import { Security } from "./components/pages/home/Security";
import { Experience } from "./components/pages/home/Experience";
import { Discovery } from "./components/pages/home/Discovery";
import { EndTitle } from "./components/pages/home/EndTitle";
import imgBackground from "@assets/background.png";

export default function App() {
  return (
    <div className="bg-[#f7f3f3] relative w-full min-h-screen overflow-x-hidden" data-name="Main page" data-node-id="1:13">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-screen min-h-[600px] z-0" data-name="Fixed Background" data-node-id="33:28">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBackground} />
          </div>
        </div>
      </div>

      <MainTitle />
      <Features />
      <Metric />
      <Security />
      <Experience />
      <Discovery />
      <EndTitle />
      <Footer />
      <Navigation />
    </div>
  );
}
