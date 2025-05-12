const NewAdd = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingTime = form.processingTime.value;
    const photo = form.photo.value;
    const ceramicsAndPotteryItem = {
      itemName,
      subcategoryName,
      shortDescription,
      price,
      rating,
      processingTime,
      photo,
    };

    fetch("https://assignment-10-server-gamma-nine.vercel.app/ceramicsAndPottery", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ceramicsAndPotteryItem),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.insertedId) {
            alert('data added successfully !')
            form.reset();
        }
    })

    console.log(ceramicsAndPotteryItem);
  };
  return (
    <div>
      <div className=" min-w-min min-h-min  dark:bg-gray-900  md:mx-auto px-12 md:px-24 md:py-12 ">
        <h1 className="text-6xl font-bold md:text-center mb-10">
          Add Arts & Crafts{" "}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="md:flex gap-6">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                type="text"
                placeholder="Item Name"
                name="itemName"
                className="input input-bordered w-full "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <input
                type="text"
                placeholder="Subcategory Name"
                name="subcategoryName"
                className="input input-bordered  w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                placeholder="Short Description"
                name="shortDescription"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Processing_Time</span>
              </label>
              <input
                type="text"
                placeholder="Processing Time"
                name="processingTime"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                name="photo"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <input
            className="btn mt-6 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
            type="submit"
            value="Add Item"
          />
        </form>
      </div>
    </div>
  );
};

export default NewAdd;
