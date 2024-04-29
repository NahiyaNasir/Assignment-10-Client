import { useLoaderData, useParams } from "react-router-dom";


const AllDetails = () => {
    const allDetails=useLoaderData()
    console.log(allDetails);
    const { id } = useParams();
    console.log(id);
    const newDetails = allDetails.find((r) => r._id == id);
    console.log(newDetails);
    return (
        <div className=" mt-6 p-5">
        <div>
            <h1 className="border  p-2 border-red-900 text-center font-extrabold"> Details</h1>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl mt-6 my-7">
<figure><img src={newDetails.img} alt="Album"/></figure>
<div className="card-body justify-center">
<h2 className="card-title text-cyan-500">{newDetails.item_name}</h2>
<div>
<p className=" font-mono text-xl text-orange-300">  Description :{newDetails.desc}</p> <br />
<p className=" font-mono text-xl text-orange-300">  Stock :{newDetails.status}</p> <br />
<p className=" font-mono text-xl text-orange-300">  Proceeding Time :{newDetails.time}</p>
<p className=" font-mono text-xl text-orange-300">  Customization :{newDetails.custom}</p>

</div>
</div>
</div>
       
    </div>
    );
};

export default AllDetails;