import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrimaryButton from "../../components/buttons/primaryButton";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div className="w-full max-h-screen flexCenter">
        <div className="w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] mx-auto relative">
          <div className="absolute z-10 flex-col text-center transform translate-y-2 xs:translate-y-[50%] md:translate-y-[60%] lg:translate-y-1/3 lg:translate-x-[10%] xs:translate-x-[1%] sm:translate-x-1/4 md:translate-x-[15%] flexCenter">
            <span className="text-lg font-normal leading-5 capitalize md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:leading-6 lg:leading-7 xl:leading-8 2xl:leading-9 font-lato">
              The best skin routines ever.
            </span>
            <h2 className="capitalize font-semibold text-3xl xs:text-7xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-[54.56px] mt-2 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 font-nunito">
              Beauty & Personal Care
            </h2>
            <span className="leading-[43.65px] text-black font-extralight text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 font-nunito">
              Up to 70% Off
            </span>
            <PrimaryButton
              text="Shop Now"
              style="primaryButton"
              url="/category/8"
            />
          </div>
          <div className="z-0">
            <Slider {...settings}>
              <div>
                <img
                  src="../../../public/images/AddCarousel/collection-beauty-products-with-copy-space.jpg"
                  alt="img"
                  className="object-cover w-full h-[422px]"
                />
              </div>
              <div>
                <img
                  src="../../../public/images/AddCarousel/top-view-frame-with-cosmetics-copy-space.jpg"
                  alt="img"
                  className="object-cover w-full h-[422px] scale-x-[-1]"
                />
              </div>
              <div>
                <img
                  src="../../../public/images/AddCarousel/young-beautiful-blonde-girl-cares-face-skin-with-moisturizer-front-mirror.jpg"
                  alt="img"
                  className="object-cover w-full h-[422px]"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
