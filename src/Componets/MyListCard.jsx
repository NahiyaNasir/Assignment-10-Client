/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyListCard = ({ i }) => {
  // console.log(i);
  const {
    img,
    ratting,
    custom,
    status,
    time,
    price,
    _id,
    item_name,
    sub_name,
  } = i;
  const handleDelete = (_id) => {
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
       
        fetch(`http://localhost:5000/myList/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <h2 className="card-title">{sub_name}</h2>

          <div className=" flex justify-between ">
            <p className=" font-mono">${price}</p>
            <p className="font-sans"> Processing Time:{time}</p>
          </div>
          <p className="font-bold ">{ratting}</p>
          <p className="font-bold "> For Customization:{custom}</p>
          <p className="font-bold ">{status}</p>
          <div className="card-actions justify-between">
            <Link to={`/update/${_id}`}>
              <button className="btn bg-rose-400">
                <FaEdit />
              </button>
            </Link>
            
              <button className="btn  bg-red-500" onClick={()=>handleDelete(_id)}>
                <MdDelete className=" text-gray-600" />
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListCard;
