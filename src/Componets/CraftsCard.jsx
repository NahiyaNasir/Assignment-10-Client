/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
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
        <div className="ml-10">
          <Fade direction="left" triggerOnce="true">
            <div className="card w-96 glass ">
  <figure><img src={img}alt="car!" className="h-[400px] p-2"/></figure>
  <div className="card-body">
    <h2 className="card-title">{item_name}</h2>
    <h2 className="card-title">{sub_name}</h2>
   <div className=" flex justify-between">
   <p className="font-bold ">${price}</p>
   <p className="text-xl"><div className="rating ">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>{ratting}</p>
   </div>
   
 
    <div className="card-actions justify-end">
     <Link to={`/details/${_id}`}>
     <button className="btn btn-info"> View Details</button>
     </Link>
    </div>
  </div>
</div>
</Fade>
        </div>
    );
};

export default CraftsCard;