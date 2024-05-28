import React from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import Whatdo from "./Whatdo"


export default function Header() {
  return (
    <div className="w-full h-100 flex justify-between   item-center shadow-lg py-6 fixed px-6">
      <div className="logo w-[180px] ml-14">
        <img src="https://hashtag-web-portfolio.vercel.app/hashtagweb.png" />
      </div>


      <div className=" flex justify-center items-center gap-10">

        <Link to="/hastag">The Hashtag Web Way</Link>

        {/* <NavLink to="/" className="flex items-center">
          What We do <IoMdArrowDropdown size={20} />
        </NavLink> */}
      <Whatdo />
        <NavLink to="/">How We Engage</NavLink>
      </div>
      <Dropdown/>


      <div className = "flex items-center px-6">
      <button className ="px-5 py-1.5 rounded-xl bg-gradient-to-b from-blue-500 via-blue-500 to-blue-800 text-white font-semibold font-sans transition duration-900 hover:bg-gradient-to-b hover:from-blue-700 hover:via-blue-400 hover:to-blue-700 hover:text-gray-50 ml-3" >Contact Us</button>

        </div>
        
     
    </div>
  );
}
