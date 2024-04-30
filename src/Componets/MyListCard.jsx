/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const MyListCard = ({ i ,setItem,selected}) => {
  console.log(selected);
  const { user } = useContext(AuthContext);
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
       
        fetch(`https://assigment-10-server-rho.vercel.app/myList/${_id}`, {
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
              fetch(`https://assigment-10-server-rho.vercel.app/myList-from-email/${user?.email}`)
              .then(res=>res.json())
              .then(data=>{
                setItem(data)
              })
            }
           
           
          });
      }
    });
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img src={img} alt="Shoes" className="h-[400px] p-2" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <h2 className="card-title"> Subcategory Name:{sub_name}</h2>

          <div className=" flex justify-between ">
            <p className=" font-mono">${price}</p>
            <p className="font-sans"> Processing Time:{time}</p>
          </div>
          <p className="font-bold "><div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>{ratting}</p>
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
