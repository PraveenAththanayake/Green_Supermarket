import s1 from "../../../public/images/service-img/Service 1.png";
import s2 from "../../../public/images/service-img/Service 2.png";
import s3 from "../../../public/images/service-img/Service 3.png";
import s4 from "../../../public/images/service-img/Service 4.png";
const services = () => {
  return (
    <div className="bg-gradient-to-t from-[#53B17540] from-10% to-white pb-[92px] mb-[100px]">
      <div className="max-w-[1120px] mx-auto mt-[36px]">
        <h2 className="font-lato font-semibold text-[24px] text-center">
          Our Services
        </h2>
        <p className="font-lato text-center w-[720px] mx-auto text-[#848482] mt-[32px] mb-[64px]">
          Elevate your grocery shopping experience with our user-friendly
          platform, offering a seamless online shopping journey from start to
          finish. Browse through our extensive selection of fresh produce,
          organic goods, and everyday essentials—all from the comfort of your
          home.
        </p>
        <div className="flex justify-center font-lato">
          <div>
            <img className="w-[88px] h-[88px] mx-[93px]" src={s1} alt="" />
            <p className="text-center mt-[24px]">FAST DELIVERY</p>
            <p className="text-center text-[#848482] text-[14px]">
              Delivery at your door step
            </p>
          </div>
          <div>
            <img className="w-[88px] h-[88px] mx-[93px]" src={s2} alt="" />
            <p className="text-center mt-[24px]">FAST DELIVERY</p>
            <p className="text-center text-[#848482] text-[14px]">
              Delivery at your door step
            </p>
          </div>
          <div>
            <img className="w-[88px] h-[88px] mx-[93px]" src={s3} alt="" />
            <p className="text-center mt-[24px]">FAST DELIVERY</p>
            <p className="text-center text-[#848482] text-[14px]">
              Delivery at your door step
            </p>
          </div>
          <div>
            <img className="w-[88px] h-[88px] mx-[93px]" src={s4} alt="" />
            <p className="text-center mt-[24px]">FAST DELIVERY</p>
            <p className="text-center text-[#848482] text-[14px]">
              Delivery at your door step
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
