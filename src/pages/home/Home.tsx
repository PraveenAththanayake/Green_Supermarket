import Advertisement from "./advertisement";
import Category from "./category";
import Discount from "./discount";
import Hero from "./hero";
import Services from "./services";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Discount />
      <Advertisement />
      <Category />
    </main>
  );
};

export default Home;
