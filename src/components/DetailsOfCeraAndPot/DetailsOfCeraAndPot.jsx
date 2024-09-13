import { useLoaderData } from "react-router-dom";

const DetailsOfCeraAndPot = () => {
  const item = useLoaderData();
  console.log(item);
  const {
    itemName,
    subcategoryName,
    shortDescription,
    price,
    rating,
    processingTime,
    photo,
  } = item;
  return (
    <div className="mt-16 md:mx-24 mb-10">
      <div>
        <img
          className="h-[450px] md:w-3/4 lg:w-1/2  mx-auto"
          src={photo}
          alt=""
        />
        <h1 className="text-xl text-center mt-6">
          <span className="font-bold">Item Name: </span>
          {itemName}
        </h1>
        <h2 className="text-xl text-center mt-3">
          <span className="font-bold">Subcategory Name: </span>
          {subcategoryName}
        </h2>
        <p className="text-xl text-center mt-3">
          <span className="font-bold">Price: </span>
          {price}
        </p>
        <p className="text-xl text-center mt-3">
          <span className="font-bold">Rating: </span>
          {rating}
        </p>
        <p className="text-xl text-center mt-3">
          <span className="font-bold">Processing Time: </span>
          {processingTime}
        </p>
        <p className="text-xl text-center mt-3">
          <span className="font-bold">Description: </span>
          {shortDescription}
        </p>
      </div>
    </div>
  );
};

export default DetailsOfCeraAndPot;
