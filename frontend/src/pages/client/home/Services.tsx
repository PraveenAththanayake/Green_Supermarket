import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/variants";

const serviceData = [
  {
    id: 1,
    image: "/images/service-img/Service 1.png",
    title: "FAST DELIVERY",
    description: "Delivery at your door step",
  },
  {
    id: 2,
    image: "/images/service-img/Service 2.png",
    title: "PAY WITH CREDIT CARD",
    description: "Buy today, Pay tomorrow",
  },
  {
    id: 3,
    image: "/images/service-img/Service 3.png",
    title: "ONLINE PAYMENT OPTION",
    description: "Tap into limitless potential",
  },
  {
    id: 4,
    image: "/images/service-img/Service 4.png",
    title: "ONLINE SHOPPING",
    description: "Say good bye to queues",
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-t from-[#53B17540] from-10% to-white h-[580px] xs:h-[400px] md:h-[450px] lg:h-[504px] px-3 w-full mx-auto mt-[36px]">
      <div className="flex-col flexCenter">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="font-semibold text-[24px] text-center"
        >
          Our Services
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-[720px] mx-auto text-gray mt-[32px] mb-10 md:mb-16"
        >
          Elevate your grocery shopping experience with our user-friendly
          platform, offering a seamless online shopping journey from start to
          finish. Browse through our extensive selection of fresh produce,
          organic goods, and everyday essentials—all from the comfort of your
          home.
        </motion.p>
        <div className="grid items-center justify-center grid-cols-2 mt-5 text-center xs:grid-cols-4 gap-x-5 gap-y-7 md:mt-3 lg:mt-6 lg:w-[967px]">
          {serviceData.map((service) => (
            <motion.div
              variants={fadeIn("right", service.id * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              key={service.id}
              className="flex-col flexCenter"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
