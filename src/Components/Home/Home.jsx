import React from "react";
import avatarImg from "../../assets/avatar-sittings.png";
import TextChanger from "../../TextChanger";
const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p
          data-aos="zoom-in"
          className="text-sm md:text-xl tracking-tight pt-5"
        >
          I'm a React Developer , FrontEnd Developer and AEM FrontEnd Developer
          (AEM Author Dev). Proficient in delivering exceptional customer
          experiences through collaborative work. Skilled in crafting visually
          appealing and user-centric interfaces to ensure optimal usability and
          accessibility. Eager to remain updated on industry trends. My
          expertise lies in Reaxt Js, HTML, CSS, Tailwind, Bootstrap, AEM, Baisc
          JS and Linux. I hold Certified Ethical Hacker (CEH), Az-900: Microsoft
          Azure Fundamentals and AI-900: Microsoft Azure AI Fundamentals
          certifications.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:mohitsinghrajput460@gmail.com">
          <button
            data-aos="zoom-in"
            className="mt-5 md:md-10 text-white py-2 px-9 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Contact ME
          </button>
        </a>
        <a href="https://drive.google.com/file/d/1TuK5R8NJKQdwE4EJn5SvIvKSojbWC7Et/view" target="_blank">
          <button
            data-aos="zoom-in"
            className="mt-5 md:md-10 text-white py-2 px-9 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Resume
          </button>
        </a>
        </div>

      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
