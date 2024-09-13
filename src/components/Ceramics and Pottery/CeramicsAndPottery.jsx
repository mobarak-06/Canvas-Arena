import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CeramicsAndPottery = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ceramicsAndPottery")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-5xl Libre-Baskerville font-bold text-center mt-20 mb-12">Ceramics and Pottery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 md:mx-24">
        {items.map((item) => (
          <div key={item._id} className=" bg-base-100 shadow-xl">
            <figure>
              <img src={item.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="font-bold">Name:</span> {item.itemName}
              </h2>
              <h2 className="card-title">
                <span className="font-bold">Subcategory:</span>{" "}
                {item.subcategoryName}
              </h2>
              <p>
                <span className="font-semibold text-xl">Description: </span>{" "}
                {item.shortDescription.slice(0, 29)}...
              </p>
              <div className="card-actions justify-end">
                <Link to={`/ceramicsAndPottery/${item._id}`}  className="btn bg-indigo-500 text-white hover:bg-indigo-600">
                  View Details <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CeramicsAndPottery;
