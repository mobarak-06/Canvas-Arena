import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const AddCraft = () => {
  const {user} = useAuth();
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const {itemName, subcategoryName, shortDescription, price, rating, processingTime, customization, stockStatus, photo} = data;
    const name = user?.displayName || {};
    const email = user?.email || {};

    const newUser = {name, email, itemName, subcategoryName, shortDescription, price, rating, processingTime, customization, stockStatus, photo};
    console.log(newUser);

    fetch('http://localhost:5000/addCraftItem', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
        toast.success('Item Added SuccessFully !')
      }
    })
  };

  return (
    <div>
      <div
        className="md:w-[1200px] w-[650px]
          h-[765px] bg-[#F4F3F0] md:mx-auto   md:px-24 md:py-12"
      >
        <h1 className="text-6xl font-bold md:text-center mb-10">Add Arts & Crafts </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-6">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                type="text"
                placeholder="Item Name"
                {...register("itemName")}
                className="input input-bordered w-3/4 md:w-full"
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
                {...register("subcategoryName")}
                className="input input-bordered w-3/4 md:w-full"
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
                {...register("shortDescription")}
                className="input input-bordered w-3/4 md:w-full"
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
                {...register("price")}
                className="input input-bordered w-3/4 md:w-full"
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
                {...register("rating")}
                className="input input-bordered w-3/4 md:w-full"
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
                {...register("processingTime")}
                className="input input-bordered w-3/4 md:w-full"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <select
                {...register("customization")}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  customization
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <select
                {...register("stockStatus")}
                className="select select-bordered w-full "
              >
                <option disabled >
                  Stock Status
                </option>
                <option>In Stock</option>
                <option>Made to Order</option>
              </select>
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
                {...register("photo")}
                className="input input-bordered w-3/4 md:w-full"
                required
              />
            </div>
          </div>
          <input
            className="btn mt-6 w-3/4 md:w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
            type="submit"
            value="Add Item"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
