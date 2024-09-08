import CraftItems from "../../components/CraftItems/CraftItems";
import Slider from "../../components/Slider/Slider";


const Home = () => {
  return (
    <div>
      {/* slider */}
      <Slider/>

      {/* Craft Items Section */}
      <div>
        <CraftItems/>
      </div>
    </div>
  );
};

export default Home;
