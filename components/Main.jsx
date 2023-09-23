import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]">Rashid Ali</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto hyphens-manual ">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>

          

       
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="#" target="_blank" rel="noreferrer">
              <div className="rounded-full hover:text-[#5651e5] shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <div className="rounded-full hover:text-[#5651e5] shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full hover:text-[#5651e5] shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full hover:text-[#5651e5] shadow-sm shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>


            
          </div>

{/* <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-col-1 gap-10 ">
<button className="p-2">Lorem, ipsum dolor.</button>
<button className="p-2">Lorem, ipsum.</button>
<button className="p-2 grid sm:col-span-2 md:col-span-1">Lorem ipsum dolor sit amet.</button>
</div> */}



         

        </div>
      </div>
    </div>
  );
};

export default Main;
