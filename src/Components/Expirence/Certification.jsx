import React from "react";
import { PiCertificateFill } from "react-icons/pi";
const Certification = () => {
  return (
    <div>
      <div id="Certification">
        <h1 className="pl-10 text-2xl md:text-4xl p-10 text-white font-bold">
          Certification
        </h1>
        <div className="flex flex-wrap gap-4 justify-center ">
          <div
            data-aos="zoom-in"
            className="flex gap-10 bg-slate-200 bg-opacity-45 mt-4 rounded-lg p-4 items-center md:w-2/5"
          >
            <PiCertificateFill color="#00c4de" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Certified Ethical Hacker (CEH) By EC – Council (Certificate no.
                ECC6405231978)
              </h2>
            </span>
          </div>

          <div
            data-aos="zoom-in"
            className="flex gap-10 bg-slate-200 bg-opacity-45 mt-4 rounded-lg p-4 items-center md:w-2/5"
          >
            <PiCertificateFill color="#00c4de" size={50} />
            <span className="text-white">
              <a
                href="https://learn.microsoft.com/en-us/users/mohitsinghrajput-1609/credentials/312a0818c70042f7"
                target="_blank"
              >
                <h2 className="leading-tight">
                  SC-900: Microsoft Certified: Security, Compliance, and
                  Identity Fundamentals
                </h2>
              </a>
            </span>
          </div>

          <div
            data-aos="zoom-in"
            className="flex gap-10 bg-slate-200 bg-opacity-45 mt-4 rounded-lg p-4 items-center md:w-2/5"
          >
            <PiCertificateFill color="#00c4de" size={50} />
            <span className="text-white">
              <a
                href="https://learn.microsoft.com/en-us/users/mohitsinghrajput-1609/credentials/7f965132e243fac2"
                target="_blank"
              >
                <h2 className="leading-tight">
                  Az-900: Microsoft Azure Fundamentals
                </h2>
              </a>
            </span>
          </div>
          <div
            data-aos="zoom-in"
            className="flex gap-10 bg-slate-200 bg-opacity-45 mt-4 rounded-lg p-4 items-center md:w-2/5"
          >
            <PiCertificateFill color="#00c4de" size={50} />
            <span className="text-white">
              <a
                href="https://learn.microsoft.com/en-us/users/mohitsinghrajput-1609/credentials/be89db4db5b780ca"
                target="_blank"
              >
                <h2 className="leading-tight">
                  AI-900: Microsoft Azure AI Fundamentals
                </h2>
              </a>
            </span>
          </div>
          <div
            data-aos="zoom-in"
            className="flex gap-10 bg-slate-200 bg-opacity-45 mt-4 rounded-lg p-4 items-center md:w-2/5"
          >
            <PiCertificateFill color="#00c4de" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                International Cyber Security Institute Certificate Certified
                Network Security Specialist (Certificate no. 17441867)
              </h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
