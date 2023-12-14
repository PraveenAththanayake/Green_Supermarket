import Category from "../../../components/common/Category";
import ClientLayout from "../ClientLayout";
import Discount from "./Discount";
import Hero from "./Hero";
import Services from "./Services";
import SimpleSlider from "./Slider";

const HomeLayout = () => {
  return (
    <ClientLayout>
      <Hero />
      <Services />
      <Discount />
      <SimpleSlider />
      <Category />
    </ClientLayout>
  );
};

export default HomeLayout;
