import { Link } from "react-router-dom";

const craftItemCard = ({ craftItem }) => {
  const {
    _id,
    itemName,
    shortDescription,
    price,
    rating,
    photo,
    stockStatus
  } = craftItem;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl relative">
        <figure>
          <img
          className="w-96 h-72"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p><span className="font-medium">Price:</span> {price}</p>
          <p><span className="font-medium">Rating:</span> {rating}</p>
          <p className="absolute top-0 left-2 font-bold bg-green-500 text-white p-1 rounded-md">{stockStatus}</p>
          <p>{shortDescription.slice(0,50)}...</p>
          <div className="card-actions justify-end">
            <Link to={`/itemDetails/${_id}`} className="btn btn-secondary">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default craftItemCard;
