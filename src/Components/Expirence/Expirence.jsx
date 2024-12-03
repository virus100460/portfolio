import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaFigma,
  FaBootstrap,
  FaJs,
  FaGithub,
  FaGit,
  FaJira,
  FaLinux,
  FaBuilding,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiAdobexd,
  SiAdobephotoshop,
  SiAccenture,
} from "react-icons/si";
import { VscCode, VscVscode } from "react-icons/vsc";
// import { PiCertificateFill } from "react-icons/pi";
import Certification from "./Certification";
const Expirence = () => {
  return (
    <div id="Experience" className="p-10 md:p-15 ">
      <h1 className="text-2xl md:text-4xl pl-10 text-white font-bold">
        Expirence
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <SiTailwindcss color="#60b2ec" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaBootstrap color="#69419B" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaGithub color="#FFFFFF" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaGit color="#E84E31" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaJira color="#095AD2" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <FaLinux color="#FFFFFF" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <SiAdobexd color="#450135" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <SiAdobephotoshop color="#095AD2" size={50} />
          </span>
          <span
            data-aos="zoom-in"
            className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          >
            <VscCode color="#2d0688" size={50} />
          </span>
        </div>

        <div>
          <div
            data-aos="zoom-in"
            className="flex gap-10 bg-slate-200 bg-opacity-45 mt-4 rounded-lg p-4 items-center"
          >
            <SiAccenture color="#8C00DE" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Accenture</h2>
              <p className="text-sm leading-tight font-thin">
                November 2021 - Present{" "}
              </p>
              <ul className="text-sm py-2">
                <li>
                  Work as Reat Developer, FrontEnd Developer & AEM Developer
                </li>
                <li>Application Developer Analyst</li>
              </ul>
            </span>
          </div>
          <div
            data-aos="zoom-in"
            className="flex gap-10 bg-slate-200 bg-opacity-45 mt-4 rounded-lg p-4 items-center
          "
          >
            <FaBuilding color="#0f0e2b" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Idensic Private Limited</h2>
              <p className="text-sm leading-tight font-thin">
                November 2020 - January 2021
              </p>
              <ul className="text-sm py-2">
                <li>
                  Work as Web Application Penetration tester and Ethical Hacker
                </li>
                <li>Cyber Security Analyst</li>
              </ul>
            </span>
          </div>
        </div>
      </div>

      <Certification />
    </div>
  );
};

export default Expirence;
