import achievementLogo from "../../assets/achievements_logo/appreciation.jpg";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const achievements = [
  {
    logo: achievementLogo,
    title: "Certificate of Appreciation",
    detail: "2nd Prize, Emerging Trends in AI & ML (BIS Collaboration)",
  },
];

const Achievements = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-[#07061c] reveal"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4">
          Highlights of recognitions and milestones that fuel my curiosity.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 bg-gray-900/95 border border-gray-700/80 rounded-2xl p-6 shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.45)]"
          >
            <img
              src={achievement.logo}
              alt={achievement.title}
              className="w-16 h-16 rounded-full object-cover shadow-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-300 mt-2">{achievement.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;



