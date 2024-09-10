import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Typewriter } from "react-simple-typewriter";
const Slider = () => {
  return (
    <div>
      <div>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co.com/d64TfG7/monochromatic-still-life-composition-with-tableware.jpg)",
              }}
            >
              <h1 className="Libre-Baskerville text-4xl md:text-6xl font-medium text-white md:ml-72 mb-20 md:mb-40">
                ART & HANDCRAFT
              </h1>
              <span className=" text-3xl md:text-5xl md:ml-72 Tangerine">
                <h1
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["Intro To Creating Creative Potty And Clay"]}
                      loop={10}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co.com/Hdfczw1/ancient-pottery-vessels-collection.jpg)",
              }}
            >
              {/* POTTERY & CLAY */}
              <h2 className="Libre-Baskerville text-2xl md:text-3xl font-medium text-white mb-20 md:mb-36">
                WE LOVE{" "}
              </h2>
              <span className="Libre-Baskerville text-4xl md:text-6xl">
                <h1
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["POTTERY & CLAY"]}
                      loop={100}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co.com/dcC805q/terracotta-vase-with-indigenous-pattern-1.jpg)",
              }}
            >
              <h2 className="Libre-Baskerville text-2xl md:text-3xl  text-white mb-20 font-bold ">
                THE ART OF CLAY
              </h2>
              <span className=" Libre-Baskerville text-center text-3xl md:text-5xl">
                <h1
                  style={{
                    paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                  }}
                >
                  <span className="text-sky-500" style={{ fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["CREATIVE POTTERY WORKSHOP"]}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
