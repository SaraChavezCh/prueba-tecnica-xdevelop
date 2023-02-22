import Categories from "@/components/Categories";
import GoulaSection from "@/components/GoulaSection";
import Judges from "@/components/Judges";



const Home = () => {

  

  

  return (
    <div className="min-h-[calc(100vh_-_143px)] relative bg-blue-gray-100 overflow-hidden">

    <GoulaSection/>
    <Categories/>
    <Judges/>
</div>
 
  );
};

export default Home;
