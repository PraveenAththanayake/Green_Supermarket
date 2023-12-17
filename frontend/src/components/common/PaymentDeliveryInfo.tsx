const paymentMethods = [
  { id: 1, image: "/images/footerImages/Visa.png", alt: "Visa" },
  { id: 2, image: "/images/footerImages/PayPal.png", alt: "PayPal" },
  {
    id: 3,
    image: "/images/footerImages/Mastercard Logo.png",
    alt: "MasterCard",
  },
];

const deliveryService = {
  image: "/images/footerImages/DHL img.png",
  alt: "DHL",
  description:
    "Swift and reliable, our partnership with DHL ensures your orders reach you with speed and care",
};

const PaymentDeliveryInfoSection = () => {
  return (
    <section className="bg-[#F8F8F8] py-[36px] px-3">
      <div className="flexCenter flex-col md:flex-row max-w-[1120px] mx-auto gap-y-9">
        <div className="flex-1">
          <p className="font-nunito text-justify text-[12px] font-semibold mb-[12px]">
            Experience secure and convenient transactions with GREEN Supermarket
            Online.
            <br /> Choose from a variety of payment methods to suit your
            preferences.
          </p>
          <div className="flex">
            {paymentMethods.map((method) => (
              <img
                key={method.id}
                width={55}
                height={55}
                className="mr-[22px]"
                src={method.image}
                alt={method.alt}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 max-w-[406px]">
          <h4 className="font-nunito font-semibold text-[20px] text-center">
            Delivery Service
          </h4>
          <div className="flex justify-between align-center">
            <img
              src={deliveryService.image}
              alt={deliveryService.alt}
              width={118}
              height={75}
            />
            <p className="font-nunito font-semibold text-[12px] text-right mt-3">
              {deliveryService.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDeliveryInfoSection;
