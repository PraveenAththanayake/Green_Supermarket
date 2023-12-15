import React from "react";
import s1 from "../../../../public/images/service-img/Service 1.png";
import s2 from "../../../../public/images/service-img/Service 2.png";
import s3 from "../../../../public/images/service-img/Service 3.png";
import s4 from "../../../../public/images/service-img/Service 4.png";

const serviceData = [
  {
    id: 1,
    image: s1,
    title: "FAST DELIVERY",
    description: "Delivery at your door step",
  },
  {
    id: 2,
    image: s2,
    title: "PAY WITH CREDIT CARD",
    description: "Buy today, Pay tomorrow",
  },
  {
    id: 3,
    image: s3,
    title: "ONLINE PAYMENT OPTION",
    description: "Tap into limitless potential",
  },
  {
    id: 4,
    image: s4,
    title: "ONLINE SHOPPING",
    description: "Say good bye to queues",
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-t from-[#53B17540] from-10% to-white h-[580px] xs:h-[400px] md:h-[450px] lg:h-[504px] px-3 w-full mx-auto mt-[36px]">
      <div className="flex-col flexCenter">
        <h2 className="font-semibold text-[24px] text-center">Our Services</h2>
        <p className="text-center max-w-[720px] mx-auto text-gray mt-[32px] mb-10 md:mb-16">
          Elevate your grocery shopping experience with our user-friendly
          platform, offering a seamless online shopping journey from start to
          finish. Browse through our extensive selection of fresh produce,
          organic goods, and everyday essentials—all from the comfort of your
          home.
        </p>
        <div className="grid items-center justify-center grid-cols-2 grid-rows-2 mt-5 text-center xs:grid-cols-4 xs:grid-rows-4 gap-x-5 gap-y-7 md:mt-3 lg:mt-6">
          {serviceData.map((service) => (
            <div key={service.id} className="flex-col flexCenter">
              <img
                className="w-[55px] h-[55px] sm:w-[88px] sm:h-[88px]"
                src={service.image}
                alt=""
              />
              <p className="mt-3 text-xs font-normal lg:text-base md:mt-6">
                {service.title}
              </p>
              <p className="hidden text-xs text-gray md:block">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
