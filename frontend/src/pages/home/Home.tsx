import Advertisement from "./advertisement";
import Category from "./category";
import Discount from "./discount";
import Hero from "./hero";

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
