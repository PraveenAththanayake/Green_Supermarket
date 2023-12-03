import Advertisement from "./Advertisement";
import Category from "./Category";
import Discount from "./Discount";
import Hero from "./Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <Discount />
      <Advertisement />
      <Category />
    </main>
  );
};

export default Home;
