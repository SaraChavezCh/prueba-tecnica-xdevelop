import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <div className="min-h-[calc(100vh_-_143px)] relative bg-A-bg-layout overflow-hidden">
        <main className="container mx-auto py-[60px]">{children}</main>
      </div>
      <Footer/>
    </>
  );
};

export default MainLayout;
