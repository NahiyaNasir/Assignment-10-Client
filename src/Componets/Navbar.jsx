import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { logOut, user,loading } = useContext(AuthContext);
  const [theme, setThem] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    console.log(localTheme);
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const hasToggled = (e) => {
    if (e.target.checked) {
      setThem("synthwave");
    } else {
      setThem("light");
    }
  };
  const handelSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
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
          {/* theme control */}
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={hasToggled}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      
       
        {
  loading? <div className="flex justify-center items-center mt-6">
  <span className="loading loading-bars loading-lg"></span>;
</div>
      :
         <>
        {user ? (
          <div className=" gap-6 navbar-end">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL || " URl NOt Found"} />
                </div>
              </div>
            
            </div>
           

            <button className="btn bg-[#59C6D2]" onClick={handelSignOut}>
              Log out
            </button>
          </div>
          
        ) : (
          <div className="navbar-end gap-3">
            <Link to="/login">
              <button className="btn btn-accent"> Sign In</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-accent"> Sign Up</button>
            </Link>
          </div>
         
      
        )}
         </>
      }
    








       
       

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
