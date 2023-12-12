import Advertisement from "./Advertisement";
import Category from "../../components/common/category";
import Discount from "./Discount";
import Hero from "./Hero";
import "../../styles/home.css";

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
