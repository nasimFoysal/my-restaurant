import React from "react";
import Header from "../../../Header/Header";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto mt-16">
        <Welcome></Welcome>
      </div>
    </div>
  );
};

export default Home;
