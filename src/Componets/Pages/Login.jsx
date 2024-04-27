import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const location=useLocation()
  const navigate=useNavigate()

  const handleLogin = (e) => {

    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate( location?.state?  location.state :'/')
   
      Swal.fire({
        title: 'Success!',
        text: 'user login successfully',
        icon: 'success',
        confirmButtonText: 'Okay'
      })
     
      })
      .catch((error) => {
       toast.error(error);
        
      });
    
  };
  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate( location?.state?  location.state :'/')
       
        toast.success('user Login Successfully with Google') 
      })
      .catch((error) => toast.error(error));
     
  };
  const handelGithubSignIn = () => {
    signInWithGithub()
      .then((result) =>{console.log(result.user);
        navigate( location?.state?  location.state :'/')
        toast.success('user Login Successfully with Github')                 } )
  
      .catch((error) =>toast.error(error));
     
  };
    return (
        <div>
             <div>
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <div className=" flex items-center justify-center my-6">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-teal-500">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-2xl"> Welcome Again!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info">Login</button>
            </div>
            <div className="divider"> Continue With Social accounts </div>
            <button className=" btn btn-outline" onClick={handelGoogleSignIn}>
              <FaGoogle></FaGoogle> 
            </button>
            <button className=" btn btn-outline" onClick={handelGithubSignIn}>
              <FaGithub></FaGithub> 
            </button>
          </form>

          <p className="mx-10 mb-3">
            Need to register? Click{" "}
            <Link to="/register">
              <span className="underline text-orange-400">Here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;