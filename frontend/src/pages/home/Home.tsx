import Advertisement from "./Advertisement";
import Category from "../../components/common/category";
import Discount from "./Discount";
import Hero from "./Hero";
import "../../styles/home.css";
import Footer from "../../components/common/footer";
import Navbar from "../../components/common/navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Discount />
      <Advertisement />
      <Category />
      <Footer />
    </main>
  );
};

export default Home;
