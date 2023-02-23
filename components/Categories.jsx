import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
    const [categoriesInfo, setCategoriesInf] = useState({})

  useEffect(() => {
    axios
    .get("https://awards.goula.lat/cms/wp-json/wp/v2/convocatoria/709")
    .then((res)=> setCategoriesInf(res.data))
    .catch((error)=> console.log(error))
  }, [])
  console.log(categoriesInfo)
  return (
    <div>
      <h1>¿{categoriesInfo.title?.rendered}?</h1>
      <p>{categoriesInfo.acf?.descripcion}</p>
      <section className="flex gap-2">

      {
        categoriesInfo.acf?.categorias.map((card, index)=>(
          <div className={`w-[120px] ${index%2 == 0 ? 'bg-orange-300' : 'bg-blue-gray-300'  }`}>
          <h2>{card.titulo}</h2>
          <p>{card.descripcion}</p>
        </div>
       )) 
      }
      </section>
      <div></div>
      <h2>{}</h2>
      <p>{}</p>
    </div>
  )
}

export default Categories
