import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import MyListCard from "../MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  // eslint-disable-next-line no-unused-vars
  const [item, setItem ]= useState([]);

  useEffect(() => {
    if(user?.email){
      fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data)
      });
    }
  }, [setItem, user?.email]);
  return (
    
    <div>
   <div className=" mt-7">
   <select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Customization</option>
  <option value="yes">Yes</option>
  <option value="no">No</option>
</select>
   </div>


      <div className=" grid  lg:grid-cols-3 mt-6 mx-auto  grid-cols-1 max-w-6xl gap-10">
      {item.map((i) => (
        <MyListCard key={i._id} i={i}></MyListCard>
      ))}
    </div>
    </div>
  );
};

export default MyList;
