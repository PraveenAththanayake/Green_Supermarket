import React from "react";
import Topbar from "../../components/common/topbar";
import Footer from "../../components/common/footer";
import Navbar from "../../components/common/navbar";
import BottomBar from "../../components/common/bottomBar";
import SocialBar from "../../components/common/socialBar";
import Header from "../../components/common/Header";
import NewsLetter from "../../components/common/NewsLetter";
import PaymentDeliveryInfoSection from "../../components/common/PaymentDeliveryInfo";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      <Navbar />
      {children}
      <PaymentDeliveryInfoSection />
      <NewsLetter />
      <Footer />
      <SocialBar />
      <BottomBar />
    </>
  );
};

export default ClientLayout;
