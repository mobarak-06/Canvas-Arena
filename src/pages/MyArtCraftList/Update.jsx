import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const Update = () => {
    const {id} = useParams();
    const data = useLoaderData();
    console.log(data);
    const {
        register,
        handleSubmit,
      } = useForm();
    
      const onSubmit = (data) => {
        const {itemName, subcategoryName, shortDescription, price, rating, processingTime, customization, stockStatus, photo} = data;
        
    
        const updatedUser = { itemName, subcategoryName, shortDescription, price, rating, processingTime, customization, stockStatus, photo};
        console.log(updatedUser);

        // update user
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success("User Updated Successfully !")
            }
        })

    }


    return (
        <div
        className="md:w-[1200px] w-[650px]
          h-[765px] bg-[#F4F3F0] md:mx-auto   md:px-24 md:py-12"
      >
        <h1 className="text-6xl font-bold md:text-center mb-10">Update Arts & Crafts </h1>
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
                defaultValue={data.itemName}
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
                defaultValue={data.subcategoryName}
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
                defaultValue={data.shortDescription}
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
                defaultValue={data.price}
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
                defaultValue={data.rating}
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
                defaultValue={data.processingTime}
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
                defaultValue={data.customization}
              >
                {/* <option disabled selected>
                  customization
                </option> */}
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
                defaultValue={data.stockStatus}
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
                defaultValue={data.photo}
                className="input input-bordered w-3/4 md:w-full"
                required
              />
            </div>
          </div>
          <input
            className="btn mt-6 w-3/4 md:w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
            type="submit"
            value="Update Item"
          />
        </form>
      </div>
    );
};

export default Update;