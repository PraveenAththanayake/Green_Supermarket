import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/slider.module.css";
import PrimaryButton from "../../../components/buttons/primaryButton";

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
      <div className="mx-auto flexCenter">
        <div className="relative lg:w-[1120px] lg:h-[422px] md:w-[768px] md:h-[280px] sm:w-[640px] sm:h-[240px] w-[310px] h-[200px]">
          <div className="flex-col items-center carouselText absolute z-10 top-[90px] left-[64px] text-center">
            <span className="capitalize text-lg font-normal leading-[19.2px]">
              The best skin routines ever.
            </span>
            <h2 className="capitalize font-semibold text-2xl sm:text-5xl md:text-5xl lg:text-7xl mt-[10px]">
              Beauty & Personal Care
            </h2>
            <span className="font-extralight text-2xl sm:text-4xl md:text-4xl lg:text-6xl mb-[20px]">
              Up to 70% Off
            </span>
            <PrimaryButton
              text="Shop Now"
              style="primaryButton"
              url="/category/8"
            />
          </div>
          <div className="z-0 lg:w-[1120px] lg:h-[422px] md:w-[768px] md:h-[280px] sm:w-[640px] sm:h-[240px] w-[310px] h-[200px] overflow-hidden">
            <Slider {...settings}>
              <div>
                <img
                  src="/images/AddCarousel/collection-beauty-products-with-copy-space.jpg"
                  alt="img"
                  className="object-cover lg:w-[1120px] lg:h-[422px] md:w-[768px] md:h-[280px] sm:w-[640px] sm:h-[240px] w-[310px] h-[200px]"
                />
              </div>
              <div>
                <img
                  src="/images/AddCarousel/top-view-frame-with-cosmetics-copy-space.jpg"
                  alt="img"
                  className="object-cover lg:w-[1120px] lg:h-[422px] md:w-[768px] md:h-[280px] sm:w-[640px] sm:h-[240px] w-[310px] h-[200px] -scale-x-100"
                />
              </div>
              <div>
                <img
                  src="/images/AddCarousel/young-beautiful-blonde-girl-cares-face-skin-with-moisturizer-front-mirror.jpg"
                  alt="img"
                  className="object-cover lg:w-[1120px] lg:h-[422px] md:w-[768px] md:h-[280px] sm:w-[640px] sm:h-[240px] w-[310px] h-[200px]"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
