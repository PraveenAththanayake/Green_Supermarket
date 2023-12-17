import React from "react";
import visa from "../../../public/images/footerImages/Visa.png";
import payPal from "../../../public/images/footerImages/PayPal.png";
import masterCard from "../../../public/images/footerImages/Mastercard Logo.png";
import dhl from "../../../public/images/footerImages/DHL img.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";

const paymentMethods = [
  { id: 1, image: visa, alt: "Visa" },
  { id: 2, image: payPal, alt: "PayPal" },
  { id: 3, image: masterCard, alt: "MasterCard" },
];

const deliveryService = {
  image: dhl,
  alt: "DHL",
  description:
    "Swift and reliable, our partnership with DHL ensures your orders reach you with speed and care",
};

const PaymentDeliveryInfoSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="bg-[#F8F8F8] py-[36px] px-3"
    >
      <div className="flexCenter flex-col md:flex-row max-w-[1120px] mx-auto gap-y-9">
        <div className="flex-1">
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="font-nunito text-justify text-[12px] font-semibold mb-[12px]"
          >
            Experience secure and convenient transactions with GREEN Supermarket
            Online.
            <br /> Choose from a variety of payment methods to suit your
            preferences.
          </motion.p>
          <div className="flex">
            {paymentMethods.map((method) => (
              <motion.img
                variants={fadeIn("up", method.id * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                key={method.id}
                className="mr-[22px]"
                src={method.image}
                alt={method.alt}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 max-w-[406px]">
          <motion.h4
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="font-nunito font-semibold text-[20px] text-center"
          >
            Delivery Service
          </motion.h4>
          <div className="flex justify-between align-center">
            <motion.img
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              src={deliveryService.image}
              alt={deliveryService.alt}
            />
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="font-nunito font-semibold text-[12px] text-right mt-3"
            >
              {deliveryService.description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PaymentDeliveryInfoSection;
