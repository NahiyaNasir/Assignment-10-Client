

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mt-6">
  <div id="slide1" className="carousel-item relative w-full">
       <div>
        <p> gffh
       <img src="https://i.ibb.co/SdfLSjM/neven-krcmarek-V4-EOZj7g1gw-unsplash.jpg" className="w-full"  />
 </p>
       </div>
 
 
  
  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/MRk91RF/wool-balls-basket-measuring-tape-button-crochet-wooden-desk.jpg" className="w-full" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/pXgLgTB/still-life-paper-chains-decoration.jpg" className="w-full" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/stbQt18/white-woven-carpet-background-floor.jpg" className="w-full" />
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;