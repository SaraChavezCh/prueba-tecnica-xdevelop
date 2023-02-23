import axios from "axios";
import React, { useEffect, useState } from "react";

const GoulaSection = () => {
    const [goulaInfo, setGoulaInf] = useState({})

  useEffect(() => {
    axios
    .get("https://awards.goula.lat/cms/wp-json/wp/v2/convocatoria/49")
    .then((res)=> setGoulaInf(res.data))
    .catch((error)=> console.log(error))
  }, [])
  console.log(goulaInfo)
  return (
    <div className="bg-brown-100">
      <h1>{goulaInfo.title?.rendered}</h1>
      <div  dangerouslySetInnerHTML={{ __html: goulaInfo.acf?.descripcion }} />
      

      <div className="flex row-auto">
        <div className="bg-brown-400">
          <h2>{goulaInfo.acf?.fechas_importantes.subtitulo}</h2>
          <ul>
            {goulaInfo.acf?.fechas_importantes.fechas.map((item)=>(
              <li>{item.fecha}</li>
            ))}</ul>
        </div>
        <div className="bg-brown-300"> 
          <h2>{goulaInfo.acf?.bases.subtitulo}</h2>
          <p>{goulaInfo.acf?.bases.contenido}</p>
          </div>
      </div>
        
    </div>
  )
}

export default GoulaSection

