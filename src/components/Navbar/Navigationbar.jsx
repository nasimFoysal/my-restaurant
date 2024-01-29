import { NavLink } from "react-router-dom";
import "./Navigationbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../../assets/logo.jpg"

const Navigationbar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const middleNavLinks = <>
      <li><NavLink  to="/">Home</NavLink></li>
      <li><NavLink  to="/about">About</NavLink></li>
      <li><NavLink  to="/reviews">Reviews</NavLink></li>
      <li><NavLink  to="/reservation">Reservation</NavLink></li>
      <li><NavLink  to="/contact"> Contact Us</NavLink></li>
  </>
  return (
    <>
      <div className="flex justify-between lg:items-center bg-[#0B0D0F] text-white py-6">
          <div className="flex items-center">
            <button onClick={()=>setIsHamburgerClicked(!isHamburgerClicked)} className="mr-2 text-2xl lg:hidden">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="h-10 lg:h-12 w-10 lg:w-12 rounded-full">
               <img className="w-full h-full rounded-full" src={logo} alt="" />
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold ml-2">My Restaurant</h1>
          </div>
          <div className="hidden lg:flex space-x-4">
            {middleNavLinks}
          </div>
          <div className="space-x-4">
            <NavLink  to="/user/login">Login</NavLink>
            <NavLink  to="/user/register">Register</NavLink>
          </div>
      </div>
      {isHamburgerClicked?
        <div className="bg-[#050505]">
            <div className="flex flex-col w-36 ml-0 bg-[#0B0D0F] text-white lg:hidden">
                {middleNavLinks}
            </div>
        </div> : null
      }
    </>
  );
};

export default Navigationbar;
