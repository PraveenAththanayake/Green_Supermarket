import FooterCategory from "./footerCategory";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-y-3 px-5 md:flex-row max-w-[1120px] mx-auto py-8 md:py-16 border-b border-[#84848230] justify-between">
        <FooterCategory
          title="Vegitables & Fruits"
          items={[
            "Fresh Vegitables",
            "Fresh Fruits",
            "Herbs",
            "Seasonings",
            "Exotic Fruites",
            "Exotic Veggies",
          ]}
        />
        <FooterCategory
          title="Premium Fruits"
          items={[
            "Avacado, Peach, Plum",
            "Cherries",
            "Organic",
            "Apples",
            "Dates",
            "Seasonal",
          ]}
        />
        <FooterCategory
          title="Home Care"
          items={[
            "Detergent",
            "Dishwash",
            "All Cleaners",
            "Fresheners",
            "Shoe Care",
            "Pet Supplies",
          ]}
        />
        <FooterCategory
          title="Beverages"
          items={[
            "Tea",
            "Coffee",
            "Fruites Juices",
            "Energy Drinks",
            "Health Supplement",
            "Soda Water",
          ]}
        />
        <FooterCategory
          title="Get To Know Us"
          items={[
            "About Us",
            "In News",
            "Green Bigbasket",
            "Privacy Policy",
            "Affiliate",
            "Terms and Conditions",
          ]}
        />
      </div>
    </>
  );
};

export default Footer;
