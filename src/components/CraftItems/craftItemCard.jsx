const craftItemCard = ({ craftItem }) => {
  const {
    itemName,
    shortDescription,
    price,
    rating,
    photo,
  } = craftItem;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
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
          <p>{shortDescription.slice(0,50)}...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default craftItemCard;
