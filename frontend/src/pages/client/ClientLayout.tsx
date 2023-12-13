// ClientLayout.tsx
import React from "react";
import Topbar from "../../components/common/Topbar";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import BottomBar from "../../components/common/BottomBar";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <BottomBar />
      {children}
      <Footer />
    </>
  );
};

export default ClientLayout;
