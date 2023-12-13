import Advertisement from "./Advertisement";
import Category from "../../components/common/category";
import Discount from "./Discount";
import Hero from "./Hero";
import "../../styles/home.css";
import Footer from "../../components/common/footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <Discount />
      <Advertisement />
      <Category />
      <Footer />
    </main>
  );
};

export default Home;
