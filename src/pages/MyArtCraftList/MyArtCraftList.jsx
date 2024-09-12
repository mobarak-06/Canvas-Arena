import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtCraftList = () => {
  const { user } = useAuth();
  console.log(user);
  const [loadedUser, setLoadedUser] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myCraftItems/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoadedUser(data);
      });
  }, [user, deleted]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Item has been deleted.",
                icon: "success",
              });
              setDeleted(!deleted);
            }
          });
      }
    });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:mx-24 mt-10 md:mt-20">
      {loadedUser.map((item) => (
        <div key={item._id}>
          <div className="card card-side bg-base-100 shadow-xl relative">
            <figure>
              <img className="w-96 h-72" src={item.photo} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.itemName}</h2>
              <p>
                <span className="font-medium">Price:</span> {item.price}
              </p>
              <p>
                <span className="font-medium">Rating:</span> {item.rating}
              </p>
              <p>
                <span className="font-medium">Customization:</span>{" "}
                {item.customization}
              </p>
              <p className="absolute top-0 left-2 font-bold bg-green-500 text-white p-1 rounded-md">
                {item.stockStatus}
              </p>

              <p>
                <span className="font-medium">Description: </span>
                {item.shortDescription.slice(0, 50)}...
              </p>
              <div className="card-actions justify-between">
                <Link
                  to={`/update/${item._id}`}
                  className="btn btn-success text-white"
                >
                  Update
                </Link>
                <Link
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-error text-white"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyArtCraftList;
