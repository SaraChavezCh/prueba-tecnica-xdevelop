import Categories from "@/components/Categories";
import GoulaSection from "@/components/GoulaSection";
import Judges from "@/components/Judges";
import Image from "next/image";



const Home = () => {

  return (
    <div className="min-h-[100vh] overflow-hidden relative">
      <div className="w-full h-[400px]"  style={{backgroundImage:"url(/corn.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPositionY:"-15rem"}}></div>
      
    <GoulaSection className="mt-8"/>
    <Categories/>
    <Judges/>
    <Image
      className="absolute top-[400px] left-6"
      width={200}
      height={100}
       src="/trophy.png"/>
</div>
 
  );
};

export default Home;
