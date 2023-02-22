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
      
    </div>
  )
}

export default Categories
