import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center flex-wrap gap-5 text-center"
    >
      <div className="">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To Reach Out !!!!! <br />
        </h3>
      </div>
      <div className="">
        @mohitsinghrahput, All rights reserved...
      </div>

      <ul className="text-sm md:text-xl flex gap-4">
        <li className="flex gap-1 items-center">
          <a
            href="mailto:mohitsinghrajput460@gmail.com"
            className="flex gap-1 items-center"
          >
            <MdOutlineEmail size={20} />
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <a
            href="https://www.linkedin.com/in/mohit-singh-rajput-916243158"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center"
          >
            <CiLinkedin size={20} />
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <a
            href="https://github.com/virus100460"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center"
          >
            <FaGithub size={20} />
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <a href="tel:+918878697473" className="flex gap-1 items-center">
            <BsFillTelephoneFill size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
