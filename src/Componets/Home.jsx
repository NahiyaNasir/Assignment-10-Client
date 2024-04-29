import { useLoaderData } from "react-router-dom";
import Banner from "./Pages/Banner";
import CraftsCard from "./CraftsCard";


const Home = () => {
    const loadCrafts=useLoaderData()
    console.log(loadCrafts);
   
    return (
        <div>
          <Banner></Banner>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2">
         {
          loadCrafts.map(card=><CraftsCard key={card._id} card={card}></CraftsCard>)
         }
          </div>
        </div>
    );
};

export default Home;