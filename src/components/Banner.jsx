import Slider from "react-slick";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    pauseOnHover: false
  };
  return (
    <div className="relative w-screen h-[80vh] overflow-hidden">
      <Slider {...settings}>
        <div>
          <div className="slide-single relative h-[80vh]">
            <img src="./images/Banner/slide1.jpg" alt="" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white z-10">
              <h1 className="text-7xl font-serif">Travelling Blog</h1>
            </div>
          </div>
        </div>
        <div>
        <div className="slide-single relative h-[80vh]">
            <img src="./images/Banner/slide2.jpg" alt="" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white z-10">
              <h1 className="text-7xl font-serif">City Blog</h1>
            </div>
          </div>
        </div>
        <div>
        <div className="slide-single relative h-[80vh]">
            <img src="./images/Banner/slide3.jpg" alt="" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white z-10">
              <h1 className="text-7xl font-serif">Photography Blog</h1>
            </div>
          </div>
        </div>
       
      </Slider>
    </div>
  );
};

export default Banner;
