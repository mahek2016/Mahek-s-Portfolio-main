import { education } from "../../constants"; // Import the education data
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const Education = () => {
  const sectionRef = useRevealOnScroll();

  return (
  <section
    id="education"
    ref={sectionRef}
    className="pt-20 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans reveal"
  >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1f1f1f]">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-600 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Grid */}
      <div className="flex flex-col gap-8 items-center">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="bg-[#0b0a16]/95 border border-gray-700/80 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_0_26px_rgba(130,69,236,0.45)] max-w-md w-full"
          >
            {/* School Logo/Image */}
            <img
              src={edu.img}
              alt={edu.school}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />

            {/* Degree, School Name, Date, Description, Grade */}
            <div className="flex-1 mt-4">
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <h4 className="text-lg font-medium text-gray-300">{edu.school}</h4>
              <p className="text-sm text-gray-400">{edu.date}</p>
              <p className="text-base text-gray-400 mt-2">{edu.desc}</p>
              <p className="text-base font-medium text-gray-400 mt-2">Grade: {edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
