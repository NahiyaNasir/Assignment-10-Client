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
      {item.map((i) => (
        <MyListCard key={i._id} i={i}></MyListCard>
      ))}
    </div>
  );
};

export default MyList;
