import React from "react";
import AboutImg from "../../assets/avatar-chiling.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="about img" />

          <ul>
            <div data-aos="zoom-in">
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-[35rem]">
                  <h1 className="text-xl md:text-2xl font-semibold leading-tight">
                    React Developer
                  </h1>
                  <p className="text-sm md:text-md leading-tight">
                    With over 3.5+ years of experience as a React Developer, I
                    specialize in crafting dynamic, intuitive web applications
                    using React, Redux, and modern JavaScript frameworks. My
                    expertise lies in front-end development, component-based
                    architecture, and optimizing performance, all aimed at
                    delivering smooth and responsive user interfaces. I have
                    contributed to several successful projects, working closely
                    with cross-functional teams to build high-quality web
                    applications. My skills in integrating RESTful APIs,
                    managing state with Redux, and leveraging React Hooks enable
                    me to create efficient and scalable solutions. I am also
                    adept at writing clean, maintainable code and ensuring
                    cross-device and cross-browser compatibility.
                  </p>
                </span>
              </div>
            </div>
            <div data-aos="zoom-in">
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-[35rem]">
                  <h1 className="text-xl md:text-2xl font-semibold leading-tight">
                    FrontEnd Developer
                  </h1>
                  <p className="text-sm md:text-md leading-tight">
                    As a Front-End Developer with 3.5+ years of experience, I am
                    dedicated to building visually engaging, interactive, and
                    high-performance web applications. I specialize in
                    developing responsive and user-friendly interfaces using
                    HTML, CSS, Tailwind, Bootstrap, JavaScript, and React.js. I
                    possess a strong foundation in modern front-end development
                    practices, including responsive design, cross-browser
                    compatibility, and performance optimization. My expertise
                    extends to integrating third-party libraries and utilizing
                    Git for version control to ensure efficient and organized
                    workflows. I am experienced in collaborating with designers
                    and back-end developers to deliver seamless user interfaces
                    and exceptional user experiences.
                  </p>
                </span>
              </div>
            </div>
            <div data-aos="zoom-in">
              {" "}
              <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-[35rem]">
                  <h1 className="text-xl md:text-2xl font-semibold leading-tight">
                    AEM FrontEnd Developer (AEM Author Dev)
                  </h1>
                  <p className="text-sm md:text-md leading-tight">
                    As an AEM Front-End Developer with 3.5+ years of experience, I
                    specialize in building and maintaining dynamic, responsive,
                    and high-performance websites using Adobe Experience Manager
                    (AEM). My expertise includes developing AEM components,
                    templates, and workflows, ensuring seamless content
                    management and integration of front-end technologies with
                    AEM’s robust content management platform. I am skilled in
                    customizing and extending AEM components to align with
                    project requirements. I leverage front-end technologies such
                    as HTML, CSS, Bootstrap, JavaScript, and React to create
                    efficient, user-friendly interfaces. Additionally, I have
                    extensive experience working with AEM’s authoring tools,
                    ensuring an intuitive content creation process for
                    non-technical users.
                  </p>
                </span>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
