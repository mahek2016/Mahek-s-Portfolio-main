import React from "react";
import { experiences } from "../../constants"; // Import your data
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const Experience = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="pt-20 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans reveal"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1f1f1f]">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-600 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative experience-timeline">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="relative flex w-full mb-12 md:mb-16 md:justify-end md:pr-12 lg:pr-20"
          >
            <div className="experience-card experience-card-left max-w-xl w-full md:text-left">
              <div className="flex items-start gap-4">
                {/* Company Logo/Image - positioned on outer side */}
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0 mt-1"
                />

                {/* Role, Company Name, Date, Description, Achievements, Skills */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                  <h4 className="text-lg font-medium text-gray-300">
                    {experience.company}
                  </h4>
                  {experience.location && (
                    <p className="text-sm text-gray-300">{experience.location}</p>
                  )}
                  <p className="text-sm text-gray-400 mt-1">{experience.date}</p>
                  <p className="text-base text-gray-400 mt-2">
                    {experience.desc}
                  </p>
                  {experience.achievements && (
                    <ul className="mt-2 list-disc list-inside text-gray-400 space-y-1">
                      {experience.achievements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-3">
                    <h5 className="font-medium text-white">Skills:</h5>
                    <ul className="flex flex-wrap mt-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="bg-[#8245ec] text-gray-100 px-3 py-1 text-xs rounded-lg mr-2 mb-2 border border-purple-300/60"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
