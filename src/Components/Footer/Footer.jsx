import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div data-aos="zoom-in">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To Reach Out !!!!! <br />
        </h3>
        <li className="flex gap-1 items-center">
          <BsFillTelephoneFill size={20} />
          <a href="tel:+918878697473">+91-8878697473</a> &nbsp;/&nbsp;
          <a href="tel:+918717918409">+91-8717918409</a>
        </li>
      </div>
      <ul data-aos="zoom-in" className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:mohitsinghrajput460@gmail.com">
            mohitsinghrajput460@gmail.com
          </a>
        </li>

        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/mohit-singh-rajput-916243158"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/mohit-singh-rajput-916243158
          </a>
        </li>

        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/virus100460"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/virus100460
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;