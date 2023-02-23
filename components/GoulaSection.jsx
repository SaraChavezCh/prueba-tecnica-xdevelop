import axios from "axios";
import React, { useEffect, useState } from "react";

const GoulaSection = () => {
  const [goulaInfo, setGoulaInf] = useState({});

  useEffect(() => {
    axios
      .get("https://awards.goula.lat/cms/wp-json/wp/v2/convocatoria/49")
      .then((res) => setGoulaInf(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(goulaInfo);
  return (
    <div className="mb-28 w-3/4 m-auto">
      <div className="p-4">
        <h1 className=" italic text-[30px] text-[#FA6162] font-bold p-4">
          {goulaInfo.title?.rendered}
        </h1>
        <p
          className="m-auto pl-16 text-justify"
          dangerouslySetInnerHTML={{ __html: goulaInfo.acf?.descripcion }}
        />
      </div>
      
      <div className="md:flex gap-4  p-4 text-center">
        <div className="text-center md:w-1/2">
          <h2 className="italic text-[20px] text-[#FA6162] font-medium p-4">{goulaInfo.acf?.fechas_importantes.subtitulo}</h2>
          <ul className="w-[100%] p-6 m-auto text-justify ">
            {goulaInfo.acf?.fechas_importantes.fechas.map((item) => (
              <li className="list-disc w-full">{item.fecha}</li>
            ))}
          </ul>
        </div>
        <div className="text-center md:w-1/2">
          <h2 className="italic text-[20px] text-[#FA6162] font-medium  p-4">{goulaInfo.acf?.bases.subtitulo}</h2>
          <p className="text-justify">{goulaInfo.acf?.bases.contenido}</p>
        </div>
      </div>
    </div>
  );
};

export default GoulaSection;
