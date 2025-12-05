import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/image.jpg.jpeg';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';

const About = () => {
  const sectionRef = useRevealOnScroll();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans pt-32 pb-16 reveal"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-20 w-full">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="text-[#8245ec]">Mahek</span> 
  <span className="text-white"> Gupta</span>
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Software Developer',
                'Frontend Developer',
                'Unity 3D Developer',
                'API Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-10 mt-8 leading-[1.7]">
            I am a passionate and dedicated student working toward becoming a Software
            Engineer. I enjoy coding, problem-solving, and continuous learning while shipping
            polished experiences. Right now I am expanding my skills in web development, Unity
            3D, API development, Python, the .NET Framework, and data structures, and I am
            actively exploring UI/UX design to craft seamless digital journeys.
          </p>
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download="Mahek_Gupta_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-xl backdrop-blur-sm bg-opacity-80 border border-white/20"
            style={{
              boxShadow: '0 4px 15px rgba(130, 69, 236, 0.3), 0 0 20px rgba(168, 85, 247, 0.2)',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Gradient Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 blur-sm">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl"></div>
            {/* Depth Shadow */}
            <div className="absolute inset-0 rounded-full bg-black/20 blur-2xl transform translate-y-4"></div>
            <Tilt
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full overflow-hidden"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Mahek Gupta"
                className="w-full h-full object-cover"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
