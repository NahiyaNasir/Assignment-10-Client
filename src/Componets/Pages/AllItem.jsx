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
            loadedAllCraftsArts.map((ac,idx)=>    <tr key={ac._id} className="hover">
            <th>{idx +1}</th>
            <td>{ac.name}</td>
            <td>{ac.item_name}</td>
            <td>{ac.price}$</td>
            <td>{ac.custom}</td>
            <td>{ac.status}</td>
             <Link>
             <button className=" btn bg-blue-400">view details</button>
             </Link>
          </tr>
        )
           }
            {/* <tr>
        <th>
        <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItem;
