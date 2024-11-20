import html from "../images/html.svg";
import express from "../images/express.svg";
import github from "../images/github.svg";
import js from "../images/js.svg";
import mongodb from "../images/mongodb.svg";
import nodejs from "../images/nodejs.svg";
import react from "../images/react.svg";
import tailwind from "../images/tailwind.svg";
import cloudinary from "../images/cloudinary.svg"
import { useState } from "react";

const Technologies = () => {
  const logos = [html, js, tailwind, react, nodejs, express, cloudinary, mongodb, github];

  const [style, setStyle] = useState("");
  const [shadow, setShadow] = useState("");
  const [shadowTH, setShadowTH] = useState("");
  const [inputValue, setInputValue] = useState(50);

  const handleStyle = (e) => {
    setStyle(e.target.value);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleShadow = (e) => {
    setShadow(e.target.value);
  };
  const handleShadowTH = (e) => {
    setShadowTH(e.target.value);
  };
  const reset =()=>{
    setStyle('')
    setInputValue(50)
    setShadow('')
    setShadowTH('')
  }

  const myStyle = ` ${shadowTH} ${shadow} rounded-full mx-4 mt-12 ${style} `;

  return (
    <div className="h-svh mb-[50px] shadow- ml-[120px] md:mt-[120px] md:ml-0 p-8 bg-gradient-to-b from-stone-50 via-stone-400 to-stone-50">
      <div className="bg-stone-300 w-[100%] h-24 grid grid-cols-2 md:flex place-content-between items-center px-16 ">
        <button onClick={reset} className="rounded-full w-16 bg-white ">Reset</button>
        <div> Size Control: 
          <input
            onChange={handleChange}
            value={inputValue}
            type="range"
            min="100"
            max="500"
          />
        </div>
        <div> <strong>Animation Style: </strong>
          <select className="w-[50%]" onChange={handleStyle} name="" id="">
            <option value="">None</option>
            <option value="animate-pulse">Animate Pulse</option>
            <option value="animate-bounce">Animate Bounce</option>
            <option value="animate-ping">Animate Ping</option>
          </select>
        </div>

        <div> <strong>Shadow Style-Color: </strong>
          <select className="w-24" onChange={handleShadow} name="" id="">
            <option value="">NONE</option>
            <option value="shadow-black border-black">BLACK</option>
            <option value="shadow-orange-900 border-orange-900">ORANGE</option>
            <option value="shadow-red-900 border-red-900">RED</option>
            <option value="shadow-green-900 border-green-900">GREEN</option>
            <option value="shadow-blue-900 border-blue-900">BLUE</option>
            <option value="shadow-white border-white">WHITE</option>
            <option value="shadow-yellow-900 border-yellow-900">YELLOW</option>
            <option value="shadow-violet-900 border-violet-900">VIOLET</option>
            <option value="shadow-purple-900 border-purple-900">PURPLE</option>
            <option value="shadow-cyan-900 border-cyan-900">CYAN</option>
          </select>
        </div>
        <div> <strong>Shadow Size: </strong>
          <select className="w-24" onChange={handleShadowTH} name="" id="">
            <option value="">None</option>
            <option value="shadow-sm">Small</option>
            <option value="shadow-md">Medium</option>
            <option value="shadow-lg">Large</option>
            <option value="shadow-xl">X Large</option>
            <option value="shadow-2xl">2X Large</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap place-content-center place-items-center py-10 md:py-5">
        {logos.map((logo, index) => (
          <img
            width={`${inputValue}px`}
            className={myStyle}
            key={index}
            src={logo}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
