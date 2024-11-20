import { ReactTyped } from "react-typed";

import express from '../images/express.svg'


import mongodb from '../images/mongodb.svg'
import nodejs from '../images/nodejs.svg'
import react from '../images/react.svg'

const Dashboard = () => {
    const logos=[mongodb, express, react, nodejs]
  return (
    <div className="h-svh mb-[50px] ml-[120px] md:mt-[120px] md:ml-0 p-8 bg-gradient-to-b from-stone-50 via-stone-400 to-stone-50">
        
      <h1 className="text-2xl my-10 text-center">
        <ReactTyped strings={["Hello! I'm <strong>Alaa Al Hafez</strong>, a Passionate Web Developer."]} typeSpeed={70} backSpeed={20}  loop></ReactTyped>
      </h1>
        
      <p className="my-2 font-medium">
        Are you looking to build a dynamic, responsive, and user-friendly
        website or web application? Look no further!
      </p>
      <p className="my-2 font-light text-justify">
        With my current web development experience, I specialize in
        creating clean, modern websites that are both visually appealing and
        highly functional. From front-end development to integrating complex
        back-end systems, I've got the skills and passion to bring your ideas to
        life.
      </p>

      
      <h2 className="my-5 underline font-medium font-serif text-[20px] text-center">What I Offer:</h2>
      <ul className="list-disc">
        <li className="ml-8 mt-1 italic">
          <strong>Custom Website Development:</strong> Tailored designs that fit
          your brand's vision.
        </li>
        <li className="ml-8 mt-1 italic">
          <strong>Responsive Design:</strong> Websites that look great on all
          devices, from desktops to smartphones.
        </li>
        <li className="ml-8 mt-1 italic">
          <strong>Front-End Expertise:</strong> Proficient in HTML, CSS,
          JavaScript, React, and more.
        </li>
        <li className="ml-8 mt-1 italic">
          <strong>Back-End Development:</strong> Building scalable and secure
          applications using Node.js, Express, MongoDB, and more.
        </li>
        <li className="ml-8 mt-1 italic">
          <strong>SEO-Friendly Coding:</strong> Ensuring your site is optimized
          for search engines from the start.
        </li>
        <li className="ml-8 mt-1 italic">
          <strong>Fast and Secure:</strong> I prioritize website performance and
          security, so your users get the best experience.
        </li>
      </ul>
      <h2 className="my-5 underline font-medium font-serif text-[20px] text-center ">My Approach:</h2>
      <ul className="list-decimal">
        <li className="ml-8 mt-1 italic">
          <strong>Listen & Understand:</strong> I take the time to fully
          understand your business goals and vision.
        </li>
        <li className="ml-8 mt-1 italic">
          <strong>Design & Develop:</strong> I craft personalized solutions that
          align with your brand and target audience.
        </li>
        <li className="ml-8 mt-1 italic">
          <strong>Deliver & Support:</strong> I ensure timely delivery with
          ongoing support and updates as needed.
        </li>
      </ul>
      <div className="flex text-3xl flex-wrap place-content-center place-items-center py-10 md:py-5">MERN Stack:{logos.map((logo, index)=>(
        <img className="w-24 mx-5 shadow-md rounded-full shadow-stone-500 my-8 md:my-10" key={index} src={logo} alt="" />
      ))}</div>
    </div>
  );
};

export default Dashboard;
