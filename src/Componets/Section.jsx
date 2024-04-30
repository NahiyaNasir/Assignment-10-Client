import { Fade } from "react-awesome-reveal";

const Section = () => {
  return (
    
    <div>
     
      <div className=" grid  lg:grid-cols-2 md:grid-cols-2 gap-5 ">
      <Fade direction="right">
        <img
          src="https://i.ibb.co/JK0g1cd/dannie-jing-3-GZlh-ROZIQg-unsplash.jpg 
"
          alt=""
          className=" "
        />
        </Fade>
        <Fade direction="right"delay={1000}>
        <img
          src="https://i.ibb.co/fpDvBTz/luis-villasmil-Pa-Xf-Y3q-NCKI-unsplash.jpg"
          alt=""
          className=" "
        />
        </Fade>
        <Fade direction="right"delay={1000}>
        <img
          src="https://i.ibb.co/7ypqMvs/praewthida-k-v-Jejbj-XEOx-U-unsplash.jpg"
          alt=""
          className=" "
        />
        </Fade>
        <Fade direction="right"delay={1000}>
        <img
          src="https://i.ibb.co/fdgJhr4/darya-tryfanava-UCNa-GWn4-Ef-U-unsplash.jpg"
          alt=""
          className=" "
        />
        </Fade>
      </div>
      {/*  part 2 */}
      <div className=" grid  lg:grid-cols-2 md:grid-cols-2 gap-5 ">
      <Fade direction="right"delay={1000}>
        <img
          src="https://i.ibb.co/JK0g1cd/dannie-jing-3-GZlh-ROZIQg-unsplash.jpg 
"
          alt=""
          className=" "
        />
        </Fade>
        <Fade direction="right"delay={1000}>
        <img
          src="https://i.ibb.co/QFhN9qY/ian-schneider-IQb-C4-VU4-YPQ-unsplash.jpg
         "
          alt=""
          className=" "
        />
         </Fade>
         <Fade direction="right"delay={1000}>
        <img
          src="https://i.ibb.co/qM28tHL/quino-al-Lnou48-Gr-IWc-unsplash.jpg"
          alt=""
          className=" "
        />
        </Fade>
        <Fade direction="right"delay={1000}>
        <img
          src="https://i.ibb.co/bghq3js/alan-de-la-cruz-3ir-PFKf-B0o0-unsplash.jpg"
          alt=""
          className=" "
        />
         </Fade>
      </div>
    
    </div>
  );
};

export default Section;
