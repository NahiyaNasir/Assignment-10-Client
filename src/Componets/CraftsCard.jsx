/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const CraftsCard = ({card}) => {
     const {
      img,
      ratting,
     
   
      price,
      _id,
      item_name,
      sub_name,
    }=card
    return (
        <div>
            <div className="card w-96 glass">
  <figure><img src={img}alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{item_name}</h2>
    <h2 className="card-title">{sub_name}</h2>
   <div className=" flex justify-between">
   <p className="font-bold">${price}</p>
   <p>{ratting}</p>
   </div>
   
 
    <div className="card-actions justify-end">
     <Link to={`/details/${_id}`}>
     <button className="btn btn-info"> View Details</button>
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CraftsCard;