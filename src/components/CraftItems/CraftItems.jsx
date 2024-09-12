import { useEffect, useState } from "react";
import CraftItemCard from "./CraftItemCard";

const CraftItems = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    fetch("http://localhost:5000/allCraftItems")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);
  return (
    <div className="md:mx-24">
      <h2 className="text-5xl font-semibold Libre-Baskerville text-center mt-20">
        Arts and Crafts
      </h2>
      <p className="text-3xl mt-10 Tangerine font-extrabold text-center">
        Art & Craft refers to creative activities involving the use of hands and
        imagination to make objects that are both functional and aesthetic. It
        includes a wide range of practices, from painting, drawing, and
        sculpture to pottery, woodworking, weaving, and jewelry-making.
        Traditionally, crafts are associated with skilled artisans who produce
        handmade items, while art often emphasizes creativity and expression.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
        {items.slice(0, 6).map((item) => (
          <CraftItemCard key={item._id} craftItem={item} />
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
