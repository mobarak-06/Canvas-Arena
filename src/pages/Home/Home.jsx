import { useEffect } from "react";
import CraftItems from "../../components/CraftItems/CraftItems";
import Slider from "../../components/Slider/Slider";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <div>
      {/* slider */}
      <Slider />
      {/* Craft Items Section */}
      <div data-aos="fade-up">
        <CraftItems />
      </div>
    </div>
  );
};

export default Home;
