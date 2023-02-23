import Image from "next/image";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <div className="min-h-[calc(100vh_-_143px)]  bg-[#EDEDED] overflow-hidden relative">
        <main className="container mx-auto py-[60px]">{children}</main>
     
      </div>
      <Footer/>
    </>
  );
};

export default MainLayout;
