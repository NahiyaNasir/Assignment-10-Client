import { useLoaderData } from "react-router-dom";
import Banner from "./Pages/Banner";


const Home = () => {
    const loadCrafts=useLoaderData()
    console.log(loadCrafts);
    return (
        <div>
          <Banner></Banner>
        </div>
    );
};

export default Home;