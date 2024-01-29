import "./Reservation.css";

const Reservation = () => {
  return (
    <div className="mt-10">
      <div className="lg:h-[75vh] flex  justify-center items-center text-center relative reservation-bg  z-10 rounded-xl text-white p-12">
        <div className="absolute top-0 left-0 h-full w-full bg-[#0f0f137f] rounded-xl"></div>
        <div className="z-20 pt-6 ">
          <div className="flex items-center gap-3 text-[#CC9933] justify-center mb-2 lg:mb-5">
            <hr className="w-10 border border-[#CC9933]" />
            <p className="text-bold text-xl lg:text-2xl "> Online Reservation</p>
            <hr className="w-10 border border-[#CC9933]" />
          </div>
          <h2 className="text-2xl md:text-5xl font-semibold md:font-bold">
            BOOK A TABLE
          </h2>
          <div className="lg:space-x-14 mt-4 lg:mt-10 flex flex-col lg:flex-row gap-3">
            <select
              name=""
              id=""
              className="bg-[#CD9933] text-white font-semibold rounded-md"
            >
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
              <option value="5">5 Persons</option>
            </select>
            <select
              name=""
              id=""
              className="bg-[#CD9933] text-white font-semibold rounded-md "
            >
              <option value="9">9:00 am</option>
              <option value="10">10:00 am</option>
              <option value="11">11:00 am</option>
              <option value="12">12 pm</option>
              <option value="1">1:00 pm</option>
            </select>
            <select
              name=""
              id=""
              className="bg-[#CD9933] text-white font-semibold rounded-md "
            >
              <option value="9">9:00 am</option>
              <option value="10">10:00 am</option>
              <option value="11">11:00 am</option>
              <option value="12">12 pm</option>
              <option value="1">1:00 pm</option>
            </select>
          </div>
          <div className="mt-6 w-full">
            <button className="text-white  bg-[#CC9933]  py-2 px-4 rounded-md hover:bg-[#705727] font-semibold w-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
