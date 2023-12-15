import React from "react";

const FooterCategory = ({ title, items }) => (
  <div>
    <h4 className="font-nunito font-semibold mb-[18px]">{title}</h4>
    {items.map((item) => (
      <p key={item} className="font-lato text-[#848482] text-[14px] mb-[6px]">
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  return (
    <>
      {/* Categories Section */}
      <div className="flex max-w-[1120px] mx-auto py-[64px] border-b-[1px] border-[#84848230] justify-between">
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
