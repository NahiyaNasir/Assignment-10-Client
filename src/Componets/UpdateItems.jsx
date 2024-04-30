import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItems = () => {
  const update = useLoaderData();
  console.log(update);
  const {
    img,
    ratting,
    custom,
    status,
    time,
    price,
    desc,
    item_name,
    sub_name,
    _id,
  } = update;
  const handleUpdate = (e) => {
    e.preventDefault();
    const from = e.target;
    const item_name = from.item_name.value;
    const sub_name = from.sub_name.value;
    const desc = from.desc.value;
    const price = from.price.value;
    const img = from.img.value;
    const ratting = from.ratting.value;
    const time = from.time.value;
    const status = from.status.value;
    const custom = from.custom.value;
    const updateItem = {
      img,
      ratting,
      custom,
      status,
      time,
      price,
      desc,
      item_name,
      sub_name,
    };
    console.log(updateItem);
    fetch(`https://assigment-10-server-rho.vercel.app/update/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update Item Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <div>
      <div className=" bg-[#F4F3F0] p-24 my-6 mx-auto font-mono">
        <h1 className=" text-center font-sans text-6xl mb-5 bg-gray-300">
          Update Items
        </h1>

        <form onSubmit={handleUpdate}>
          {/*  from row 1 */}
          <div className=" mb-8 md:flex">{/* from row 2 */}</div>
          <div className=" md:flex ">
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Image</span>
              </div>
              <input
                type="text"
                placeholder="image"
                defaultValue={img}
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
                defaultValue={item_name}
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
              <select
                className="select select-bordered w-full  "
                name="sub_name"
                defaultValue={sub_name}
              >
                <option value="subcategory Names">Subcategory Names</option>
                <option value="sculp"> Sculptures</option>
                <option value="home">Wooden Home Decor</option>
                <option value="furniture">Wooden Furniture</option>
                <option value="decor">Wooden Home Decor</option>
                <option value="jute"> Jute Home Decor</option>
                <option value="jewelry"> jute jewellers</option>
                <option value="arts"> Home Decor </option>
              </select>
              {/* <input
                type="option"
                placeholder="Subcategory Name"
                name="sub_name"
                className="input input-bordered w-full "
              /> */}
            </label>

            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Short Description</span>
              </div>
              <input
                type="text"
                placeholder="Short Description"
                name="desc"
                defaultValue={desc}
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
                defaultValue={price}
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
                defaultValue={ratting}
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
              {/* <input
                type="text"
                placeholder="Customization"
                name="custom"
                className="input input-bordered w-full " */}
              <select
                className="select select-bordered w-full  "
                name="custom"
                defaultValue={custom}
              >
                <option value="Want to customize"> Want to customize?</option>
                <option value="yes" defaultValue={custom}>
                  {" "}
                  Yes
                </option>
                <option value="no" defaultValue={custom}>
                  {" "}
                  No
                </option>
              </select>
            </label>
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Processing Time</span>
              </div>
              {/* <input
                type="text"
                placeholder="Processing Time"
                name="time"
                className="input input-bordered w-full "
              /> */}
              <select
                className="select select-bordered w-full  "
                name="time"
                defaultValue={time}
              >
                <option value="Processing Time">Processing Time </option>
                <option value="1 weak" defaultValue={time}>
                  {" "}
                  1 weak
                </option>
                <option value=" 6 week" defaultValue={time}>
                  6 week{" "}
                </option>
                <option value=" 1 year" defaultValue={time}>
                  {" "}
                  1 year
                </option>
              </select>
            </label>
            <label className="form-control md:w-1/2 mr-4">
              <div className="label">
                <span className="label-text">Stock Status</span>
              </div>
              {/* <input
                type="text"
                placeholder="Stock Status"
                name="status"
                className="input input-bordered w-full "
              /> */}{" "}
              <select
                className="select select-bordered w-full  "
                name="status"
                defaultValue={status}
              >
                <option value="Stock Status" defaultValue={status}>
                  {" "}
                  Stock Status
                </option>
                <option value="In stock " defaultValue={status}>
                  {" "}
                  In stock
                </option>
                <option value="  made to  order" defaultValue={status}>
                  {" "}
                  Made to Order{" "}
                </option>
              </select>
            </label>
          </div>

          <input
            type="submit"
            value=" Update "
            className="btn btn-block bg-[#527] text-gray-400"

          />
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
