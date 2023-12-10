import Navbar from "../../components/common/Navbar";
import heroImage from "../../../public/images/Hero/supermarket-banner-concept-with-ingredients.jpg";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute left-[64px] top-[40px] w-7xl">
          <p className="font-lato font-bold">
            WELCOME GREEN SUPER MARKET ONLINE!
          </p>
          <h1 className="font-nunito font-bold mt-[32px] mb-[96px] text-[48px]">
            Fresh and Healthy <br />
            Veggies{" "}
            <span className="font-light">
              Green <br />
              Market
            </span>
          </h1>
          <div className="absolute flex text-[20px] font-lato">
            <a
              className="flex items-center justify-center w-[192px] h-[48px] bg-[#53B176] border-2 border-solid border-[#53B176] text-white rounded-[10px] mr-[32px]"
              href=""
            >
              Shop Now
            </a>
            <a
              className="flex items-center justify-center w-[192px] h-[48px] border-2 border-solid border-[#53B176] rounded-[10px]"
              href=""
            >
              See All Products
            </a>
          </div>
        </div>
        <img src={heroImage} alt="heroImage" />
      </div>
    </>
  );
};

export default Hero;
