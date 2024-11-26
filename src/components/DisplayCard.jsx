/* eslint-disable react/prop-types */
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DisplayCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, quantity, taste, photo, category } = coffee;

  const handelDelete = (_id) => {
    console.log(_id);

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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });

              const remainigCoffee = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainigCoffee);
            }
          });
      }
    });
  };

  return (
    <div className="border border-red-500 rounded-md">
      <div className="flex items-center justify-between p-3 bg-base-100 h-[200px] shadow-xl border">
        <figure className="w-[140px] h-full">
          <img
            src={photo}
            alt="Album"
            className="w-full h-full object-cover rounded-md"
          />
        </figure>
        <div className="">
          <h2 className="text-sm">Coffee: {category}</h2>
          <p className="text-sm">{taste}</p>
          <span className="text-xs">quantity: {quantity}</span>
        </div>
        <div className="join join-vertical space-y-2">
          <button className="btn join-item">
            <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
          </button>
          <Link to={`/UpDateUser/${_id}`}>
            <button className="btn join-item">
              {" "}
              <MdOutlineEdit></MdOutlineEdit>
            </button>
          </Link>
          <button onClick={() => handelDelete(_id)} className="btn join-item">
            <RiDeleteBin6Line></RiDeleteBin6Line>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
