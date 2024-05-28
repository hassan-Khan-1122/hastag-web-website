import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import WorkHistoryOutlinedIcon from "@mui/icons-material/ConnectWithoutContact";
import FileCopyOutlinedIcon from "@mui/icons-material/ConnectWithoutContact";
 import ShowChartOutlinedIcon from '@mui/icons-material/ConnectWithoutContact'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ul className="flex">
        <li
          className="flex gap-2"
          style={{
            border: "2px solid rgba(10, 0, 0, 0.2)",
            borderRadius: "18px",
            padding: "10px",
          }}
        >
          <NavLink
            to="/hastag"
            className="flex gap-[20px] items-center justify-center hover:text-blue-600"
            href="/"
          >
            <img
              src="	https://hashtag-web-portfolio.vercel.app/technical-support.png"
              alt="icon"
              className="w-[20px]"
            />
            <span
              className="flex items-center"
              onMouseEnter={() => {
                setIsOpen(true);
              }}
            >
              Who We Are <IoMdArrowDropdown />
            </span>
          </NavLink>
        </li>
      </ul>

      {isOpen ? (
        <div
          className=" w-full absolute h-[330px] left-0 mt-7 shadow-lg"
          onMouseLeave={() => {
            setIsOpen(false);
          }}
        >
          <div className="flex justify-around items-start gap-3 w-[100%] mt-5">

            <div className="flex flex-col justify-center items-start text-left">
              <h1
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Keep Up With Us
              </h1>
              <ul className="flex flex-col justify-center items-start gap-2 mt-4">
                <li
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  className="mt-2  hover:bg-blue-700 transition duration-300 rounded py-2 px-3"   >
                  <InfoOutlinedIcon
                    sx={{ fontSize: "25px", marginRight: "20px" }}
                  />
                  <Link to="/">About Us</Link>
                </li>
                <li
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  className="mt-2  hover:bg-blue-700 transition duration-300 rounded py-2 px-3" >
                  <ContactPageOutlinedIcon
                    sx={{ fontSize: "25px", marginRight: "20px" }}
                 />
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  className="mt-2   hover:bg-blue-700 transition duration-300 rounded py-2 px-3 " >
                  <RunningWithErrorsIcon
                    sx={{ fontSize: "25px", marginRight: "20px" }}
                    className="mt-2"      />
                  <Link to="/process">Process</Link>
                </li>
                <li
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  className="mt-2  hover:bg-blue-700 transition duration-300 rounded py-2 px-3"       >
                  <ConnectWithoutContactIcon
                    sx={{ fontSize: "25px", marginRight: "20px" }}
                  />
                  <Link to="/">Engagement Model</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-ceter items-start text-left">
              <h1
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Join and Learn More
              </h1>
              <ul className="flex flex-col justify-start items-start gap-6 mt-4">
                <li
                  style={{ fontSize: "20px", fontWeight: "600" }}
                  className="mt-2  hover:bg-blue-700 transition duration-300 rounded py-2 px-3"   >
                  <WorkHistoryOutlinedIcon
                    sx={{ fontSize: "20px", marginRight: "20px" }}
                  />
                  <Link to="/">Careers</Link>
                </li>
                <li
                  style={{ fontSize: "20px", fontWeight: "600" }}
                  
               className="  hover:bg-blue-700 transition duration-300 rounded py-2 px-3">
                  <FileCopyOutlinedIcon
                    sx={{ fontSize: "20px", marginRight: "20px" }}
                  />
                  <Link to="/">Blogs</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center text-left gap-2">
                <h1 style={{fontSize : "20px", fontWeight : "500", textAlign : "left"}} className="text-blue-500">Our Customer Stories</h1>
                
                <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm  py-2 w-[400px] mb-2">
                    <ShowChartOutlinedIcon sx={{width: "50px", height : "50px"}}/>
                    <div className='flex flex-col gap-1'>
                        <h1 style={{fontSize : "16px"}}> Yakka FX</h1>
                        <span style={{fontSize : "12px"}}>Yakka FX: Your One-Stop Online Marketplace for Trading and Investment Solutions</span>
                    </div>
                    
                </div>
                <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm  py-2 w-[400px] mb-2">
                    <ShowChartOutlinedIcon sx={{width: "50px", height : "50px"}}/>
                    <div className='flex flex-col gap-1'>
                        <h1 style={{fontSize : "16px"}}> Yakka FX</h1>
                        <span style={{fontSize : "12px"}}>Yakka FX: Your One-Stop Online Marketplace for Trading and Investment Solutions</span>
                    </div>
                    
                </div>
               
              

            </div>
          
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dropdown;
