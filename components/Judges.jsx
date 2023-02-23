import { Button } from "@material-tailwind/react";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Judges = () => {
  const [judgesInfo, setJudgesInf] = useState({});
  const [judgeInfo, setJudgeInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://awards.goula.lat/cms/wp-json/wp/v2/convocatoria/69")
      .then((res) => setJudgesInf(res.data))
      .catch((error) => console.log(error));

    axios
      .get("https://awards.goula.lat/cms/wp-json/wp/v2/jueces?per_page=6")
      .then((res) => setJudgeInfo(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(judgesInfo);
  console.log(judgeInfo);
  return (
    <div className="text-center">
      <div className="mb-28 w-3/4 m-auto">
        <h1 className="italic text-[#FA6162] font-medium p-4  text-[30px]">
          {judgesInfo.title?.rendered}
        </h1>
        <p className="text-justify">{judgesInfo.acf?.descripcion}</p>
        <div className="flex flex-row gap-4 mt-6">
          <p>{judgesInfo.acf?.comparte_a_los_jueces.texto}</p>
          <a href={judgesInfo.acf?.comparte_a_los_jueces.link_facebook}>
            <Image
              width={22}
              height={22}
              alt="social media logo"
              src="/sm2.svg"
            />
          </a>
          <a href={judgesInfo.acf?.comparte_a_los_jueces.link_instragram}>
            <Image
              width={22}
              height={22}
              alt="social media logo"
              src="/linkedin.svg"
            />
          </a>
        </div>
      </div>
      <section className="w-full m-auto grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center content-around place-content-center lg:w-2/3 gap-4">
        {judgeInfo.map((judge) => (
          <div
            key={judge.id}
            className="text-center m-auto w-[250px] md:w-[330px] h-[300px] "
          >
            <div className=" w-40 h-40 mx-auto my-4 bg-[#261e8293] rounded-full text-center p-10 ">
              Image
            </div>
            <h3 className="italic text-center text-lg font-bold text-[#261e8293]">
              {judge.acf.apellido}
            </h3>
            <p className="text-center m-auto font-bold w-10/12 ">
              {judge.acf.cargo_y_especialidad}
            </p>
          </div>
        ))}
      </section>
        <Button className="bg-[#FA6162] mt-6">¡Conocelos a todos!</Button>
    </div>
  );
};

export default Judges;
