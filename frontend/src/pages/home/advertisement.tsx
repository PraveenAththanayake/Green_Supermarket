import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";

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
        <div className="w-[1120px] h-[422px] relative">
          <div className="absolute z-10 flex-col transform translate-y-1/2 translate-x-1/4 flexCenter">
            <span className="capitalize text-lg font-normal leading-[19.2px]">
              The best skin routines ever.
            </span>
            <h2 className="capitalize font-semibold text-7xl leading-[54.56px] mt-[19px]">
              Beauty & Personal Care
            </h2>
            <span className="leading-[43.65px] font-extralight text-6xl mb-[35px]">
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
                  className="object-cover w-[1120px] h-[422px]"
                />
              </div>
              <div>
                <img
                  src="../../../public/images/AddCarousel/top-view-frame-with-cosmetics-copy-space.jpg"
                  alt="img"
                  className="object-cover w-[1120px] h-[422px] scale-x-[-1]"
                />
              </div>
              <div>
                <img
                  src="../../../public/images/AddCarousel/young-beautiful-blonde-girl-cares-face-skin-with-moisturizer-front-mirror.jpg"
                  alt="img"
                  className="object-cover w-[1120px] h-[422px]"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
