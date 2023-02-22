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
    <div>
      <h1>{goulaInfo.title?.rendered}</h1>
    </div>
  )
}

export default GoulaSection

