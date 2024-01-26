import React from "react";
import Header from "../../../Header/Header";
import Welcome from "../Welcome/Welcome";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto mt-16">
        <Welcome></Welcome>
        <div className="mt-36">
          <NewsLetter></NewsLetter>
        </div>
      </div>
    </div>
  );
};

export default Home;
