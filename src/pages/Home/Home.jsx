import CraftItems from "../../components/CraftItems/CraftItems";
import Slider from "../../components/Slider/Slider";
import "aos/dist/aos.css";
import Services from "../Services/Services";
import CeramicsAndPottery from "../../components/Ceramics and Pottery/CeramicsAndPottery";

const Home = () => {
  return (
    <div>
      {/* slider */}
      <Slider />
      {/* Craft Items Section */}
      <div>
        <CraftItems />
      </div>
      <Services />
      {/* ceramics and pottery section */}
      <CeramicsAndPottery />
    </div>
  );
};

export default Home;
