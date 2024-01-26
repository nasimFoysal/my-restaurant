import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center bg-[#16191E] py-14 rounded-2xl" >
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div className="text-xl font-bold  w-36 h-36 bg-yellowish  text-white rounded-full px-3 py-3 flex items-center justify-center flex-col">
            <p className="font-great-vibes text-6xl">20%</p>
            <p>OFF!!</p>
          </div>
          <div className="text-center">
            <h2 className="font-great-vibes text-4xl md:text-6xl text-[#999966]">Subscribe to our</h2>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">NEWSLETTER</h2>
          </div>
        </div>
        <p className="mt-4 text-white text-center">
          Subscribe to our newsletter and receive 20% discount from your order.
        </p>
        <div className="mt-4 text-center lg:space-x-4 space-y-3 ">
          <input
            type="email"
            name=""
            id="newsletter-input"
            placeholder="my@mail.com"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <button className="text-[#CC9933] btn btn-outline btn-warning">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
