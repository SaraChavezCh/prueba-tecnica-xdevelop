import axios from "axios";
import React, { useEffect, useState } from "react";

const Judges = () => {
    const [judgesInfo, setJudgesInf] = useState({})

  useEffect(() => {
    axios
    .get("https://awards.goula.lat/cms/wp-json/wp/v2/convocatoria/69")
    .then((res)=> setJudgesInf(res.data))
    .catch((error)=> console.log(error))
  }, [])
  console.log(judgesInfo)
  return (
    <div>
      <h1>{judgesInfo.acf?.titulo}</h1>
    </div>
  )
}

export default Judges
