import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
      <div className="mx-auto my-20 flexCenter">
        <div className="relative w-[90vw] lg:w-[75vw]">
          <div className="absolute z-10 p-5 text-left transform -translate-y-1/2 sm:p-10 xl:p-14 top-1/2 font-nunito whitespace-nowrap">
            <span className="text-xs font-normal capitalize sm:text-xl md:text-2xl xl:text-4xl">
              The best skin routines ever.
            </span>
            <h2 className="capitalize font-semibold text-2xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-[10px]">
              Beauty & Personal Care
            </h2>
            <span className="mb-10 text-xl font-extralight sm:text-4xl md:text-4xl lg:text-6xl">
              Up to 70% Off
            </span>
            <br />

            <Link to="/category/8">
              <button className="px-6 py-1 mt-2 text-sm text-white rounded-md bg-customGreen sm:text-2xl md:text-4xl md:px-8 md:py-2 sm:mt-4 xl:text-5xl xl:px-14 xl:mt-14 hover:bg-darkerGreen">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="z-0 h-[50vw] xs:h-[40vw] md:h-[40vw] lg:h-[35vw] xl:h-[30vw] overflow-hidden">
            <Slider {...settings}>
              <div>
                <img
                  src="/images/AddCarousel/collection-beauty-products-with-copy-space.jpg"
                  alt="img"
                  className="object-contain "
                />
              </div>
              <div>
                <img
                  src="/images/AddCarousel/top-view-frame-with-cosmetics-copy-space.jpg"
                  alt="img"
                  className="object-contain -scale-x-100"
                />
              </div>
              <div>
                <img
                  src="/images/AddCarousel/young-beautiful-blonde-girl-cares-face-skin-with-moisturizer-front-mirror.jpg"
                  alt="img"
                  className="object-contain "
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
