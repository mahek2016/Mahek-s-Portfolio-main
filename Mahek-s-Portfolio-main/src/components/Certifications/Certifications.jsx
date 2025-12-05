import cybersecurityImg from "../../assets/certifications_logo/Cybersecurity.jpg";
import arvrImg from "../../assets/certifications_logo/ar vr.jpg";
import eduskillImg from "../../assets/certifications_logo/eduskill.jpg";
import fullstackImg from "../../assets/certifications_logo/Full stack .jpg";
import hackathonImg from "../../assets/certifications_logo/hackathon.jpg";
import mumbaiHacksImg from "../../assets/certifications_logo/Mumbai hacks.png";
import pythonImg from "../../assets/certifications_logo/pythong.jpg";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const certifications = [
  { img: cybersecurityImg, title: "Cybersecurity Awareness" },
  { img: arvrImg, title: "AR/VR & Game Development Training" },
  { img: eduskillImg, title: "EduSkills Academy" },
  { img: fullstackImg, title: "Full Stack Development" },
  { img: hackathonImg, title: "Hackathon" },
  { img: pythonImg, title: "Python Course" },
  { img: mumbaiHacksImg, title: "MumbaiHacks 2025 – Participation Certificate" },
];

const Certifications = () => {
  const sectionRef = useRevealOnScroll();

  return (
  <section
    id="certifications"
    ref={sectionRef}
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] reveal"
  >
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#1f1f1f]">CERTIFICATIONS</h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
      <p className="text-gray-600 mt-4">
        Programs and hackathons that sharpened my technical toolkit.
      </p>
    </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-gray-700/80 bg-[#0d0b1e]/95 shadow-[0_0_25px_rgba(130,69,236,0.25)] transform hover:-translate-y-2 hover:shadow-purple-500/50 transition-all duration-300"
            title={cert.title}
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-40 object-cover"
            />
            <div className="bg-gradient-to-t from-black to-gray-800 p-4">
              <p className="text-center text-white font-bold">
                {cert.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;



