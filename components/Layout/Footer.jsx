import React from "react";
// import sm1 from "../assets/sm1.svg"
// import sm2 from "../assets/sm2.svg"
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div
        className="w-full min-h-[70px] bg-[#EDEDED] text-black gap-3 flex flex-col justify-center
    text-center sm:flex-row sm:justify-between items-center px-16 py-6"
      >
        <Image
        width={124}
        height={31}
        alt="Logo academlo"
        src="/logo.png"
      />
        <p className="font-normal text-base">
          Escribenos en:{" "}
          <a className="text-blue font-semibold text-base ">hola@goula.com</a>
        </p>
        <div className="flex flex-col gap-2 justify-center items-center md:flex-row space-x-[8px]">
          <p>Síguenos en:</p>
          <div className="flex gap-2">
            <Image
            
              width={22}
              height={22}
              alt="social media logo"
              src="/sm1.svg"
            />
            <Image
              width={22}
              height={22}
              alt="social media logo"
              src="/sm2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
