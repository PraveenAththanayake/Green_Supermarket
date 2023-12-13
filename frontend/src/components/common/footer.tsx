import visa from "../../../public/images/footerImages/Visa.png";
import payPal from "../../../public/images/footerImages/PayPal.png";
import masterCard from "../../../public/images/footerImages/Mastercard Logo.png";
import dhl from "../../../public/images/footerImages/DHL img.png";
import socialMedia from "../../../public/images/footerImages/Group 30.png";

const Footer = () => {
  return (
    <>
      <section className="bg-[#F8F8F8] py-[36px]">
        <div className="flex max-w-[1120px] mx-auto">
          <div className="flex-1">
            <p className="font-nunito text-[12px] font-semibold mb-[12px]">
              Experience secure and convenient transactions with GREEN
              Supermarket Online.
              <br /> Choose from a variety of payment methods to suit your
              preferences.
            </p>
            <div className="flex">
              <img className="mr-[22px]" src={visa} alt="visa" />
              <img className="mr-[22px]" src={payPal} alt="payPal" />
              <img src={masterCard} alt="masterCard" />
            </div>
          </div>
          <div className="flex-1 max-w-[406px]">
            <h4 className="font-nunito font-semibold text-[20px] text-center">
              Delivery Service
            </h4>
            <div className="flex justify-between align-center">
              <img src={dhl} alt="dhl" />
              <p className="font-nunito font-semibold text-[12px] text-right mt-3">
                Swift and reliable,
                <br /> our partnership with DHL ensures your orders <br /> reach
                you with speed and care
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex max-w-[1120px] mx-auto py-[32px] border-b-[1px] border-[#84848230]">
        <p className="font-nunito font-semibold text-[32px] whitespace-nowrap">
          Subscribe To Our Newsletter
        </p>
        <div className="flex w-[100%] justify-end relative">
          <input
            className="absolute right-[180px] font-lato max-w-[440px] h-[40px] placeholder:text-slate-400 block bg-white w-full border border-[#F5F5F5] rounded-[10px] py-2 pl-4 pr-9 shadow-sm focus:outline-none focus:border-[#d1d1d1] sm:text-sm"
            placeholder="Enter your email address here"
            type="text"
            name="search"
          />
          <button className="font-lato bg-[#53B075] text-white text-[20px] h-[40px] px-[72px] rounded-r-[8px] absolute">
            Submit
          </button>
        </div>
      </div>
      <div className="flex max-w-[1120px] mx-auto py-[64px] border-b-[1px] border-[#84848230] justify-between">
        <div>
          <h4 className="font-nunito font-semibold mb-[18px]">
            Vegitables & Fruits
          </h4>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Fresh Vegitables
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Fresh Fruits
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">Herbs</p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Seasonings
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Exotic Fruites
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Exotic Veggies
          </p>
        </div>
        <div>
          <h4 className="font-nunito font-semibold mb-[18px]">
            Premium Fruits
          </h4>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Avacado, Peach, Plum
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Cherries
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Organic
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Apples
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">Dates</p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Seasonal
          </p>
        </div>
        <div>
          <h4 className="font-nunito font-semibold mb-[18px]">Home Care</h4>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Detergent
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Dishwash
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            All Cleaners
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Fresheners
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Shoe Care
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Pet Supplies
          </p>
        </div>
        <div>
          <h4 className="font-nunito font-semibold mb-[18px]">Beverages</h4>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">Tea</p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Coffee
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Fruites Juices
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Energy Drinks
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Health Supplement
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Soda Water
          </p>
        </div>
        <div>
          <h4 className="font-nunito font-semibold mb-[18px]">
            Get To Know Us
          </h4>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            About Us
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            In News
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Green Bigbasket
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Privacy Policy
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Affiliate
          </p>
          <p className="font-lato text-[#848482] text-[14px] mb-[6px]">
            Terms and Conditions
          </p>
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto mt-[32px] mb-[58px]">
        <h4 className="font-nunito font-semibold text-[14px] text-center">
          Social Media
        </h4>
        <img
          className="mx-auto mt-[16px]"
          src={socialMedia}
          alt="socialMedia"
        />
        <p className="font-nunito font-semibold text-[12px] text-center mt-[8px]">
          Stay in the loop and be part of the GREEN Supermarket community!
        </p>
      </div>
      <div className="font-lato text-[12px] h-[45px] w-full bg-[#09965D] rounded-t-[20px] pt-4">
        <div className="flex max-w-[1120px] mx-auto justify-between">
          <div>
            <p className="text-white">© Copyright 2023. by A65 GROUP TM</p>
          </div>
          <p className="text-white">Address: 64 Front Street, 11, Colombo...</p>
          <div>
            <p className="text-white">Call: ( 011) 2696523</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
