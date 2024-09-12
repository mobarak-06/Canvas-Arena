import money from "../../assets/money.png";
import shipping from "../../assets/shipping.png";
import support from "../../assets/service.png";
import payment from "../../assets/payment.png";
const Services = () => {
  return (
    <div className=" flex justify-center items-center md:block">
      <div className="bg-pink-50 hidden md:flex md:px-24 justify-between py-20 mt-16">
        <div>
          <img src={shipping} alt="" />
          <h1 className="text-2xl font-semibold text-black">Free Shipping</h1>
          <p className="italic font-semibold text-gray-500">
            Free Shipping for Orders Over $130{" "}
          </p>
        </div>
        <div>
          <img src={money} alt="" />
          <h1 className="text-2xl font-semibold text-black">Money Guarantee</h1>
          <p className="italic font-semibold text-gray-500">
            WithIn 30 days for an Exchange{" "}
          </p>
        </div>
        <div>
          <img src={support} alt="" />
          <h1 className="text-2xl font-semibold text-black">24/7 Online Support</h1>
          <p className="italic font-semibold text-gray-500">24 Hours a day, 7days a week </p>
        </div>
        <div>
          <img src={payment} alt="" />
          <h1 className="text-2xl font-semibold text-black">Flexible Payment</h1>
          <p className="italic font-semibold text-gray-500">
            Pay With Multiple credit cards{" "}
          </p>
        </div>
      </div>
      {/* for mobile device */}
      <div className="carousel carousel-vertical rounded-box h-96 w-3/4 md:hidden bg-pink-100 mt-10">
        <div className="carousel-item h-full">
          <div className="my-auto mx-auto">
            <img src={shipping} alt="" />
            <h1 className="text-2xl font-bold text-gray-900">Free Shipping</h1>
            <p className="italic font-semibold text-gray-500">
              Free Shipping for Orders Over $130{" "}
            </p>
          </div>
        </div>
        <div className="carousel-item h-full">
          <div className="my-auto mx-auto">
            <img src={money} alt="" />
            <h1 className="text-2xl font-bold text-gray-900">Money Guarantee</h1>
            <p className="italic font-semibold text-gray-500">
              WithIn 30 days for an Exchange{" "}
            </p>
          </div>
        </div>
        <div className="carousel-item h-full">
          <div className="my-auto mx-auto">
            <img src={support} alt="" />
            <h1 className="text-2xl font-bold text-gray-900">24/7 Online Support</h1>
            <p className="italic font-semibold text-gray-500">
              24 Hours a day, 7days a week{" "}
            </p>
          </div>
        </div>
        <div className="carousel-item h-full">
          <div className="my-auto mx-auto">
            <img className="" src={payment} alt="" />
            <h1 className="text-2xl font-bold text-gray-900">Flexible Payment</h1>
            <p className="italic font-semibold text-gray-500">
              Pay With Multiple credit cards{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
