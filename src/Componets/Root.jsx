import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <div className=" h-16 mx-auto">
            <Navbar></Navbar>
            </div>
               <div className="min-h-[calc(100vh-118)] mx-auto">
                <Outlet></Outlet>
               </div>
               <Footer></Footer>
        </div>
    );
};

export default Root;