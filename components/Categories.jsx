import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categoriesInfo, setCategoriesInf] = useState({});
  

  useEffect(() => {
    axios
      .get("https://awards.goula.lat/cms/wp-json/wp/v2/convocatoria/709")
      .then((res) => setCategoriesInf(res.data))
      .catch((error) => console.log(error));

    
  }, []);
  console.log(categoriesInfo);
  
  return (
    <div className="mb-28 w-3/4 m-auto flex flex-col gap-12 lg:flex-row">
      <section className="flex flex-col lg:w-1/3">
        <h1 className="italic text-[#FA6162] font-medium p-4  text-[30px]">
          ¿{categoriesInfo.title?.rendered}?
        </h1>
        <p className="text-justify">{categoriesInfo.acf?.descripcion}</p>
        <div className="flex flex-row gap-4 mt-6">
          <p>Redes sociales:</p>
          <a href={categoriesInfo.acf?.links_compartelo.link_facebook}>
            <Image
              width={22}
              height={22}
              alt="social media logo"
              src="/sm2.svg"
            />
          </a>
          <a href={categoriesInfo.acf?.links_compartelo.link_instagram}>
            <Image
              width={22}
              height={22}
              alt="social media logo"
              src="/linkedin.svg"
            />
          </a>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center content-around place-content-center lg:w-2/3">
        {categoriesInfo.acf?.categorias.map((card, index) => (
          <div
          key={card.titulo}
            className={`mb-4 align-baseline w-[350px] h-[350px] p-2
            ${
              index == 4
                ? "bg-[#30243C]"
                : index == 1
                ? "bg-white"
                : index == 2
                ? "bg-white"
                : "bg-[#FA6162]"
            }`}
          >
            <div className=" w-20 h-20 mx-auto my-4 bg-[#261e8293] rounded-full  "></div>
            <h2
              className={`w-1/2 m-auto italic text-[20px] text-center ${
                index == 0
                  ? "text-white"
                  : index == 1
                  ? "text-[#30243C]"
                  : index == 2
                  ? "text-[#30243C]"
                  : index == 3
                  ? "text-white"
                  : "text-white"
              } font-medium p-4`}
            >
              {card.titulo}
            </h2>
            <p
              className={` text-[12px] text-justify ${
                index == 0
                  ? "text-white"
                  : index == 1
                  ? "text-[#30243C]"
                  : index == 2
                  ? "text-[#30243C]"
                  : index == 3
                  ? "text-white"
                  : "text-white"
              } font-base p-4`}
            >
              {card.descripcion}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Categories;
