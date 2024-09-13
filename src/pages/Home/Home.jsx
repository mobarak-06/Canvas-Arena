import CraftItems from "../../components/CraftItems/CraftItems";
import Slider from "../../components/Slider/Slider";
import "aos/dist/aos.css";
import Services from "../Services/Services";
import CeramicsAndPottery from "../../components/Ceramics and Pottery/CeramicsAndPottery";
import Marquee from "react-fast-marquee";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";
import company5 from "../../assets/company5.png";

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

      {/* marquee */}
      <div>
        <h1 className="text-5xl font-bold text-center mt-14">Sponsored by</h1>
        <Marquee speed={180} pauseOnHover className="mt-16 mb-8">
          <div>
            <img className="mr-40" src={company1} alt="" />
          </div>
          <div>
            <img className="mr-40" src={company2} alt="" />
          </div>
          <div>
            <img className="mr-40" src={company3} alt="" />
          </div>
          <div>
            <img className="mr-40" src={company4} alt="" />
          </div>
          <div>
            <img className="mr-40" src={company5} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
