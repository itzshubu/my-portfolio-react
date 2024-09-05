import React from "react";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaIdCardAlt } from "react-icons/fa";

const herosection = () => {
  
  return (
    <div className="flex text-white p-[50px]">
      <div className="w-[40%]">
        <h4>Hi,i'm</h4>
        <h1 className="text-4xl">Shubham</h1>
        <h4>Front-End web-devloper</h4>
        <p>
          A Frontend Web developer passionate about building engaging web
          applications and solving complex problems with code
        </p>
        <button className="bg-[#0f9df8] my-[10px] px-[15px] py-[5px] rounded-md border border-[#0f9df8]">
          Contect me
        </button>
      </div>
      <div className="bg-gradient-to-br from-blue-950 to-slate-900 p-6 w-[40%] text-center rounded-md">
        <div className="">
          <img
            src=""
            alt=""
            className="w-[139px] h-[139px] rounded-full bg-slate-400 m-auto"
          />
        </div>
        <div className="bg-[#061840] mt-3 p-4 rounded-md">
          <p>Shubham</p>
          <p className="text-slate-500">Himachal pradesh</p>
          <p className="text-slate-500">
            <MdLocationPin className="inline h-5 relative top-[-2px]" /> India
          </p>
        </div>
        <div className="bg-[#061840] mt-3 p-4 rounded-md">
          <p>
            <MdEmail className="inline mr-[6px]" />
            shubuchoudhary@gmail.com
          </p>
        </div>
        <div className="bg-[#061840] mt-3 p-4 rounded-md">
          <p>
            <FaIdCardAlt className="inline mr-[6px] relative top-[-2px]" />
            Experience Holder
          </p>
        </div>
        <div className="mt-3 p-4">
          <span className="span1 m-2">React.js</span>
          <span className="span1 m-2">React.js</span>
          <span className="span1 m-2">React.js</span>
          <span className="span1 m-2">React.js</span>
          <span className="span1 m-2">React.js</span>
          <span className="span1 m-2">React.js</span>
          <span className="span1 m-2">React.js</span>
          <span className="span1 m-2">React.js</span>
          <span className="span1 m-2">React.js</span>
        </div>
      </div>
    </div>
  );
};

export default herosection;
