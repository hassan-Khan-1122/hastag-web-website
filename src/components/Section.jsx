 
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { motion } from "framer-motion";


const Section = () => {
  useEffect(() => {
    gsap.fromTo(".icons", 
      {
        x: 0,
        y: 0,
      }, 
      {
        x: 50,
        y: 50,
        yoyo: true,
        repeat : -1
      }
    );
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <div className='bg-[#e3f0f9] w-full h-[600px] p-5'>
      <div className="logos">
        <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="React Logo" className='w-[130px] absolute top-[150px] left-20 icons' id='react' />
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-angular-3521273-2944777.png?f=webp" alt="Angular Logo" className='w-[100px] absolute right-[350px] top-[150px] icons' id='angular' />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" alt="Vite Logo" className='w-[100px] absolute top-[300px] left-[60px] icons' id='vite' />
        <img src="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png" alt="Flutter Logo" className='w-[100px] absolute top-[450px] left-[150px] icons' id='flutter' />
        <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Node.js Logo" className='w-[100px] absolute top-[300px] right-[50px] icons' id='nodejs' />
        <img src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" alt="MongoDB Logo" className='w-[100px] absolute top-[510px] right-[190px] icons' id='mongodb' />
      </div>
      <motion.div   initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 2 },
              ease: "easeIn",
              duration: 1,
            }}>
      <h1 className='animateText1 text-[80px] text-black text-center mt-40 font-bold'>Transforming Digital</h1>
            </motion.div>
            <motion.div   initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 2,
            }}>
      <h2 className='animateText1 text-[80px] text-blue-500 text-center font-bold'>Ideas Into Reality</h2>

            </motion.div>

    </div>
  );
};

export default Section;
