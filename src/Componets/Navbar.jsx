import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handelSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar  fixed z-10 shadow-lg min-h-">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " border-solid border-2  border-teal-400 "
                    : "font-bold"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/allItem"
                className={({ isActive }) =>
                  isActive
                    ? "  border-solid border-2  border-teal-400 "
                    : "font-bold"
                }
              >
                All Arts & Crafts Item
              </NavLink>
              <NavLink
                to="/addItem"
                className={({ isActive }) =>
                  isActive
                    ? "  border-solid border-2  border-teal-400 "
                    : "font-bold  "
                }
              >
                Add Crafts Item
              </NavLink>
              <NavLink
                to="/myList"
                className={({ isActive }) =>
                  isActive
                    ? "  border-solid border-2  border-teal-400 "
                    : "font-bold  "
                }
              >
                My Arts& Crafts List
              </NavLink>
            </ul>
          </div>
          <a className=" text-xl">
            <span className=" text-sky-600"> Handmade</span>{" "}
            <span className="text-gray-600">Treasures</span>{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "  border-solid border-2  p-2 border-teal-400  "
                  : "font-bold p-2 "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/allItem"
              className={({ isActive }) =>
                isActive
                  ? "    border-solid border-2 p-2 border-teal-400 "
                  : "font-bold  p-2"
              }
            >
              All Arts & Crafts Item
            </NavLink>
            <NavLink
              to="/addItem"
              className={({ isActive }) =>
                isActive
                  ? " border-solid border-2  p-2 border-teal-400"
                  : "font-bold  p-2"
              }
            >
              Add Crafts Items
            </NavLink>
            <NavLink
              to="/myList"
              className={({ isActive }) =>
                isActive
                  ? "  border-solid border-2 p-2 border-teal-400 "
                  : "font-bold  p-2 "
              }
            >
              My Arts& Crafts List
            </NavLink>
          </ul>
        </div>

        {user ? (
          <div className=" gap-6 navbar-end">
       
            
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
            <div className="avatar online">
              <div className="w-10 rounded-full">
              <img src={user.photoURL || " URl NOt Found"} />
              
              </div>
            </div>
           
</div>
{/* <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1"><img src={user.photoURl} alt="" /></div>
  <ul tabIndex={0} className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div> */}

<button className="btn bg-[#59C6D2]" onClick={handelSignOut}>
              Log out
            </button>
          </div>
        ) : (
          <div className="navbar-end gap-3">
            <Link to="/login">
             
              <button className="btn btn-accent"> Sign In</button>
            </Link>
            <Link to='/register'>
          <button className="btn btn-accent"> Sign Up</button>
          </Link>
          </div>
        )}

















        {/* <div className="navbar-end gap-3">
          <Link to="/login">
            {" "}
            <button className="btn btn-accent"> Sign In</button>
          </Link>
          <Link to='/register'>
          <button className="btn btn-accent"> Sign Up</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
