// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="text-center px-4 sm:px-6 lg:px-8">
//         <h1
//           className="text-5xl sm:text-6xl md:text-7xl font-bold text-white"
//           data-aos="fade-down"
//           data-aos-duration="600"
//         >
//           Aabhas Gaur
//         </h1>
//         <h2
//           className="text-2xl sm:text-3xl md:text-4xl text-white mt-4"
//           data-aos="fade-up"
//           data-aos-delay="100"
//           data-aos-duration="600"
//         >
//           Full stack developer
//         </h2>
//         <p
//           className="text-lg sm:text-xl text-white mt-4 max-w-2xl mx-auto"
//           data-aos="fade-up"
//           data-aos-delay="200"
//           data-aos-duration="600"
//         >
//           Building seamless digital experiences with modern technologies.
//         </p>
//         <div className="mt-8 flex justify-center space-x-4">
//           <a
//             href="/resume.pdf"
//             className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition duration-300 text-base sm:text-lg"
//             data-aos="zoom-in"
//             data-aos-delay="300"
//             data-aos-duration="600"
//           >
//             View Resume
//           </a>
//           <a
//             href="#contact"
//             className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition duration-300 text-base sm:text-lg"
//             data-aos="zoom-in"
//             data-aos-delay="400"
//             data-aos-duration="600"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          Aabhas Gaur
        </h1>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl text-white mt-4 h-[3rem]" // height set to avoid layout shift
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
        >
          <span>
            <Typewriter
              words={[
                'Full Stack Developer',
                'Web Developer',
                'Mobile Developer',
                'ML Developer',
                'UI/UX Enthusiast',
                'Tech Explorer',
                'Good Human'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p
          className="text-lg sm:text-xl text-white mt-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          Building seamless digital experiences with modern technologies.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition duration-300 text-base sm:text-lg"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition duration-300 text-base sm:text-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
