import React from "react";
import { heroImages } from "../../../utils/assets";
import { CAboutUs } from "./content";
const AboutUs: React.FC = () => {
  const aboutUsImage = heroImages.nightSky;

  return (
    <section
      id="o-nas"
      className="container-custom mt-8 py-8 md:py-12 lg:py-24"
    >
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="card">
          <img
            src={aboutUsImage}
            width="550"
            height="550"
            alt="Dom i altana na tle lasu"
            className="aspect-square w-full object-cover object-center"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-balance">{CAboutUs.heading}</h2>
            <p className="text-pretty text-lg text-gray-800">
              {CAboutUs.welcome}{" "}
              <span className="font-bold text-primary-500">
                {CAboutUs.title}
              </span>
              {CAboutUs.section1}
            </p>
          </div>

          <div>
            <p className="text-pretty text-lg text-gray-800">
              {CAboutUs.section2}
            </p>
          </div>

          <div className="space-y-4">
            <h3>Wypoczynek</h3>
            <p className="text-pretty text-lg text-gray-800">
              {CAboutUs.section3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
