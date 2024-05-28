import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import WebIcon from "@mui/icons-material/Web";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CampaignIcon from "@mui/icons-material/Campaign";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Whatdo() {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div>
      <NavLink
        to=""
        className="flex items-center"
        onMouseEnter={() => setIsOpen(true)}
      >
        What We do <IoMdArrowDropdown size={20} />
      </NavLink>

      {IsOpen ? (
        <div
          className="w-full absolute h-[330px] left-0 mt-7 shadow-lg bg-white"
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Cross and developement sections */}
          <div className="flex justify-center items-start gap-10 w-[100%] mt-10">
            <div className="flex flex-col gap-10 justify-center items-center mt-4">
              <Link
                to="/"
                className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm  px-1 py-2 w-[400px]"
              >
                <AppShortcutIcon sx={{ width: "50px", height: "50px" }} />
                <div className="flex flex-col gap-1">
                  <h1 style={{ fontSize: "16px" }}>
                    {" "}
                    Cross Platform App Development
                  </h1>
                  <span style={{ fontSize: "14px" }} className="text-gray-600">
                    Craft seamless cross-platform mobile apps with our
                    expertise.
                  </span>
                </div>
              </Link>
              {/* webiste development sections */}
              <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm py-2 px-1 w-[400px]">
                <WebIcon sx={{ width: "50px", height: "50px" }} />
                <Link to="/" className="flex flex-col gap-1">
                  <h1 style={{ fontSize: "16px" }}>Website Development</h1>
                  <span style={{ fontSize: "14px" }} className="text-gray-600">
                    Elevate your online presence with our expert web development
                    service.
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-10 items-center justify-center mt-4">
              <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm px-1 py-2 w-[400px]">
                <CampaignIcon sx={{ width: "50px", height: "50px" }} />
                <Link to="/marketing-service" className="flex flex-col gap-1">
                  <h1 style={{ fontSize: "16px" }}>
                    {" "}
                    Powerful Marketing Solutions
                  </h1>
                  <span style={{ fontSize: "14px" }} className="text-gray-600">
                    Maximize your brand's impact with our results-driven
                    marketing strategies!
                  </span>
                </Link>
              </div>

              <div className="flex gap-4 justify-center items-center rounded-lg shadow-lg shadow-blue-100 hover:shadow-sm py-2 px-1 w-[400px]">
                <ShoppingCartIcon sx={{ width: "50px", height: "50px" }} />
                <Link to="/" className="flex flex-col gap-1">
                  <h1 style={{ fontSize: "16px" }}>Unlock Ecommerce Success</h1>
                  <span style={{ fontSize: "14px" }} className="text-gray-600">
                    Empower your online business with our e-commerce solutions.
                  </span>
                </Link>
              </div>
            </div>

            {/* this is a process sections */}
            <div className="flex flex-col justify-start items-start gap-4">
              <h1 className="text-blue-600 text-[18px] w-[100%] ">
                Lets Get Started{" "}
                <ArrowForwardIcon
                  className="text-blue-500 ml-4"
                  sx={{ fontSize: "16px" }}
                />
              </h1>
              <div className="flex justify-center shadow-lg rounded-lg py-4 px-4 w-[250px]">
                <Link to="/" className="flex flex-col gap1">
                  <h1
                    style={{ fontSize: "18px" }}
                    className="ml-4 font-bold mb-3"
                  >
                    Process
                  </h1>
                  <span style={{ fontSize: "14px" }}>
                    Unlocking Success: Our Proven Process for Outstanding
                    Results.
                  </span>
                </Link>
              </div>

              {/* Last sections */}
              <div className="flex justify-center shadow-lg rounded-lg py-4 px-4 w-[250px] bg-[#3B82F6] text-white">
                <Link to="/" className="flex flex-col gap1">
                  <h1
                    style={{ fontSize: "18px" }}
                    className="ml-4 font-bold mb-3"
                  >
                    Contact Us
                  </h1>
                  <span style={{ fontSize: "14px" }}>
                    Unlocking Success: Our Proven Process for Outstanding
                    Results.
                  </span>
                </Link>
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

export default Whatdo;
