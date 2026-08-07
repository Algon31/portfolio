import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const projectsData = [
    {
      title: 'Chesso - Multiplayer Game',
      image: '/images/chesso.png',
      alt: 'chesso pic',
      description:
        'Built a full-stack real-time chess game application using React.js , Node.js , socket.io and chess.js. Implemented timer-based matches and resigning option, ensuring fair results.Developed a fully responsive using TailwindCSS and delivering an intuitive and user-friendly UI/UX',
      link: 'https://chesso-tau.vercel.app/',
    },
    {
      title: 'Spot - Music Player',
      image: '/images/spot_sc.png',
      alt: 'weather pic',
      description:
        'My music player is a versatile and user-friendly application that offers seamless audio playback with features like play, previous/next track navigation, volume control. It supports dynamic albums, allowing users to organize and browse their music effortlessly, enhancing the listening experience.',
      link: 'https://github.com/Algon31/spot-a-musicplayer',
    },
    {
      title: 'Weather App',
      image: '/images/screenshot-weather2.png',
      alt: 'weather pic',
      description:
        'My weather app is a dynamic and user-friendly tool that fetches real-time weather data using API calls and JavaScript. It provides users with mostly accurate and up-to-date weather conditions such as temperature, humidity, wind speed, and more for any desired location.',
      link: 'https://weather-app31.vercel.app/',
    },
    {
      title: 'Dockerized ToDo List',
      image: '/images/ToDo-lists.png',
      alt: 'dockerized todolist pic',
      description:
        'A containerized full-stack task manager built using React, Node.js, and Docker. Powered by Docker Compose and multi-stage builds for seamless container orchestration, isolated environments, persistent data storage, and smooth production deployment.',
      link: 'https://to-do-list-iota-red-26.vercel.app/',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section id="projects" className="my-10 sm:my-16">
      {/* Heading */}
      <h2 className="text-[28px] sm:text-[35px] font-semibold text-slate-900 dark:text-white px-6 sm:px-12 lg:px-[100px] mb-6">
        I have done these for now..
      </h2>

      {/* Touch Carousel (Mobile & Tablet) */}
      <div className="md:hidden px-4 relative flex flex-col items-center">
        {/* Card Container with Touch Listeners */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-[290px] flex items-center justify-center select-none"
        >
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 z-10 p-2 rounded-full bg-[#B75A48]/90 dark:bg-slate-800 text-[#E8ECD6] dark:text-cyan-400 shadow-md border border-white/20 dark:border-slate-700 hover:scale-110 active:scale-95 transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Active Card */}
          {(() => {
            const project = projectsData[currentIndex];
            return (
              <div
                key={project.title}
                className="w-[270px] min-h-[425px] bg-[#B75A48] dark:bg-[#161e31] dark:border dark:border-slate-800 rounded-[7px] flex flex-col justify-between items-center p-2 shadow-xl transition-all duration-300"
              >
                <div className="w-full flex flex-col items-center">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-[255px] h-[163px] object-cover object-center border-2 border-black rounded-[2px] mt-2 mb-3"
                  />
                  <div className="text-[17px] font-bold text-[#E8ECD6] dark:text-cyan-300 text-center px-1">
                    {project.title}
                  </div>
                  <p className="mt-1.5 text-center px-2 text-[13.5px] leading-snug text-[#E8ECD6] dark:text-slate-300">
                    {project.description}
                  </p>
                </div>

                {/* Card Action Link Button */}
                <button
                  onClick={() => window.open(project.link, '_blank')}
                  className="mt-4 mb-2 bg-white dark:bg-cyan-500 dark:text-slate-950 w-[250px] h-[40px] text-center rounded-[2px] text-black font-semibold text-base border-none cursor-pointer project-btn-hover flex items-center justify-center gap-1.5"
                >
                  <span>Link</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            );
          })()}

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-4 z-10 p-2 rounded-full bg-[#B75A48]/90 dark:bg-slate-800 text-[#E8ECD6] dark:text-cyan-400 shadow-md border border-white/20 dark:border-slate-700 hover:scale-110 active:scale-95 transition-all"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-7 bg-[#B75A48] dark:bg-cyan-400'
                  : 'w-2.5 bg-slate-400/60 dark:bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Grid Layout (Desktop & Larger Screens) */}
      <div className="hidden md:flex px-6 sm:px-12 flex-wrap lg:flex-nowrap justify-center items-stretch gap-6 py-4">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="w-[270px] flex-shrink-0 bg-[#B75A48] dark:bg-[#161e31] dark:border dark:border-slate-800 rounded-[7px] flex flex-col justify-between items-center p-2 shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="w-full flex flex-col items-center">
              <img
                src={project.image}
                alt={project.alt}
                className="w-[255px] h-[163px] object-cover object-center border-2 border-black rounded-[2px] mt-2 mb-3"
              />
              <div className="text-[17px] font-bold text-[#E8ECD6] dark:text-cyan-300 text-center px-1">
                {project.title}
              </div>
              <p className="mt-1.5 text-center px-2 text-[13.5px] leading-snug text-[#E8ECD6] dark:text-slate-300">
                {project.description}
              </p>
            </div>

            {/* Card Action Link Button */}
            <button
              onClick={() => window.open(project.link, '_blank')}
              className="mt-4 mb-2 bg-white dark:bg-cyan-500 dark:text-slate-950 w-[250px] h-[40px] text-center rounded-[2px] text-black font-semibold text-base border-none cursor-pointer project-btn-hover flex items-center justify-center gap-1.5"
            >
              <span>Link</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
