import React from "react";
import { Input } from "@material-tailwind/react";

const Home = () => {
  return (
    <div className="w-72">
    <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />
  </div>
  );
};

export default Home;
