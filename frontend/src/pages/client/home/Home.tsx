import { lazy } from "react";

const ClientLayout = lazy(() => import("../ClientLayout"));
const Hero = lazy(() => import("./Hero"));
const Services = lazy(() => import("./Services"));
const Discount = lazy(() => import("./Discount"));
const SimpleSlider = lazy(() => import("./Slider"));
const Category = lazy(() => import("../../../components/common/category"));

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
