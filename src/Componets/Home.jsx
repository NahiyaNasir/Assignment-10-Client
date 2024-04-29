import { useLoaderData } from "react-router-dom";
import Banner from "./Pages/Banner";
import CraftsCard from "./CraftsCard";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    const loadCrafts=useLoaderData()
    console.log(loadCrafts);
   
    return (
        <div>
          <Banner></Banner>
          <div className=" text-center text-3xl">
            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
       
        <span style={{ color: 'teal', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Our Crafts & Arts Section']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span> </h1>
          </div>
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 mt-6">
         {
          loadCrafts.map(card=><CraftsCard key={card._id} card={card}></CraftsCard>)
         }
          </div>
        </div>
    );
};

export default Home;