import { useLoaderData } from "react-router-dom";


const Home = () => {
    const loadCrafts=useLoaderData()
    console.log(loadCrafts);
    return (
        <div>
          
        </div>
    );
};

export default Home;