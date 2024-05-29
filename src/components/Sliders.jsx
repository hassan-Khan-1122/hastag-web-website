
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const clone = slider.innerHTML;
    slider.insertAdjacentHTML("beforeend", clone); // Clone the content

    gsap.to(slider, {
      x: -slider.scrollWidth / 2, // Move by half of the total scroll width
      duration: 10, // Adjust the duration as needed
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="w-full h-[150px] bg-blue-500 overflow-hidden mt-10">
      <div
        className="w-full h-[150px] bg-blue-500 flex justify-center items-center gap-28"
        ref={sliderRef}
        id="slider"
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-angular-3521273-2944777.png?f=webp"
          alt=""
          className="w-[100px]"
          id="angular"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"
          alt=""
          className="w-[100px]"
          id="vite"
        />
        <img
          src="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"
          alt=""
          className="w-[100px]"
          id="flutter"
        />
        <img
          src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
          alt=""
          className="w-[100px]"
          id="nodejs"
        />
        <img
          src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png"
          alt=""
          className="w-[100px]"
          id="mongodb"
        />
        <img
          src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"
          alt=""
          className="w-[100px]"
          id="github"
        />
      </div>
    </div>
  );
};

export default Slider;
