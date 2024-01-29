import welcomeImg1 from "../../../../assets/welcome1.jpg";
import welcomeImg2 from "../../../../assets/welcome2.jpg";
import welcomeImg3 from "../../../../assets/welcome3.jpg";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around lg:gap-2 gap-4">
      <div className=" lg:h-96 lg:w-5/6 lg:relative flex flex-col  gap-4 justify-center items-center md:flex-row">
        <div className="w-56 rounded-lg shadow-lg lg:absolute -top-6 left-16">
          <img className="rounded-lg" src={welcomeImg1} alt="" />
        </div>
        <div className="w-56 rounded-lg shadow-lg lg:absolute -top-6 right-28">
          <img className="rounded-lg" src={welcomeImg2} alt="" />
        </div>
        <div className="w-56 hidden shadow-lg md:block rounded-lg lg:absolute top-24 left-1/3">
          <img className="rounded-lg" src={welcomeImg3} alt="" />
        </div>
      </div>
      <div className="w-11/12 lg:w-1/3">
        <h2 className="text-2xl lg:text-4xl font-bold">
          <span className="font-great-vibes text-[#999966]"> Welcome to</span>
          <br /> My Restaurant
        </h2>
        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          deleniti veritatis nostrum quas a, iusto ratione natus, minima
          provident saepe dolorum officia voluptatem perspiciatis illum
          asperiores earum eaque voluptatum quia?
        </p>
        <div className="mt-4 border-l border-s-2 border-indigo-500 pl-4">
          <button className="font-bold text-gray-700">About Us</button>
        </div>
      </div>
      
    </div>
  );
};

export default Welcome;
