import React from 'react'
import gsap from 'gsap'

const Section = () => {

  gsap.fromTo(".icons", {
    x: 0,
    y : 0,
    repeat: -1,
    yoyo : true,
  }, 
{
  x: 50,
  y : 50,
  repeat: -1,
  yoyo : true,

})


  return (
    <div className='bg-[#e3f0f9] w-full h-[600px] p-5'>
      <div className="logos">
        <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="" className='w-[130px] absolute top-[150px] left-20 icons' id='react' />
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-angular-3521273-2944777.png?f=webp" alt="" className='w-[100px] absolute right-[350px] top-[150px] icons' id='angular' />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" alt="" className='w-[100px] absolute top-[300px] left-[60px] icons' id='vite' />
        <img src="https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png" alt="" className='w-[100px] absolute top-[450px] left-[150px] icons' id='flutter' />
        <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" className='w-[100px] absolute top-[300px] right-[50px] icons' id='nodejs' />
        <img src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" alt="" className='w-[100px] absolute top-[510px] right-[190px] icons' id='mongodb' />

      </div>
      <h1 className='animateText1  text-[80px] text-black text-center mt-40 font-bold'>Transforming Digital</h1>
      <h2 className='animateText1 text-[80px] text-blue-500 text-center font-bold'>Ideas Into Reality</h2>

    </div>
  )
}

export default Section