import { Link, useLoaderData } from "react-router-dom";

const AllItem = () => {
  const loadedAllCraftsArts = useLoaderData();
  console.log(loadedAllCraftsArts);
  return (
    <div className=" my-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="font-bold">
            <tr>
            <th> Sl</th>
              <th>Name</th>
              <th> Item Name</th>
              <th>Price</th>
              <th>Customization</th>
              <th>Status</th>
              <th> Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

           {
            loadedAllCraftsArts.map((ac,idx,)=>    <tr key={ac._id} className="hover">
            <th>{idx +1}</th>
            <td>{ac.name}</td>
            <td>{ac.item_name}</td>
            <td>{ac.price}$</td>
            <td>{ac.custom}</td>
            <td>{ac.status}</td>
            <Link to={`/allDetails/${ac._id}`}>
          <button className=" btn bg-blue-400">view details</button>
          </Link>
          </tr>
         
        )
           }
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItem;
