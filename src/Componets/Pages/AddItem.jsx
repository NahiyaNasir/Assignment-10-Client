import Swal from "sweetalert2";


const AddItem = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
    const from=e.target
    const name=from.name.value
  
    const email=from.email.value
    const item_name=from.item_name.value
    const sub_name =from.sub_name.value
    const desc=from.desc.value
    const price=from.price.value
    const img=from.img.value
        const ratting =from.ratting.value
    const time=from.time.value
    const status=from.status.value
    const custom=from.custom.value
    const newItem={name,img, ratting,custom,status,time,price,desc,item_name,sub_name,email}
    console.log(newItem);
    fetch('http://localhost:5000/crafts',{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newItem)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
          
            Swal.fire({
                title: 'Success!',
                text: 'Added Item Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        }
    })
  };
  return (
    <div>
      <div className=" bg-[#F4F3F0] p-24 my-6 mx-auto font-mono">
        <h1 className=" text-center font-sans text-6xl">Add Coffee</h1>

        <form onSubmit={handleAddItem}>
          {/*  from row 1 */}
          <div className=" mb-8 md:flex">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">UserName</span>
              </div>
              <input
                type="text"
                placeholder="UserName"
                name="name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">User E-mail</span>
              </div>
              <input
                type="text"
                placeholder="User E-mail"
                name="email"
                className="input input-bordered w-full "
              />
            </label>
           {/* from row 2 */}
          </div>
          <div className=" md:flex ">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Image</span>
              </div>
              <input
                type="text"
                placeholder="image"
                name="img"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Item Name</span>
              </div>
              <input
                type="text"
                placeholder="Item Name"
                name="item_name"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* from row 3 */}
          <div className=" md:flex ">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Subcategory Name</span>
              </div>
              <input
                type="text"
                placeholder="Subcategory Name"
                name="sub_name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Short Description</span>
              </div>
              <input
                type="text"
                placeholder="Short Description"
                name="desc"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className=" md:flex ">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Ratting</span>
              </div>
              <input
                type="text"
                placeholder="Ratting"
                name="ratting"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/*  from row 4 */}
          <div className=" mb-8 md:flex">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Customization</span>
              </div>
              <input
                type="text"
                placeholder="Customization"
                name="custom"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Processing Time</span>
              </div>
              <input
                type="text"
                placeholder="Processing Time"
                name="time"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Stock Status</span>
              </div>
              <input
                type="text"
                placeholder="Stock Status"
                name="status"
                className="input input-bordered w-full "
              />
            </label>
          </div>
       
          
          <input type="submit" value="Add " className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
