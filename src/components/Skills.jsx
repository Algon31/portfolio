import React from 'react';

export default function Skills() {
  const skillLogos = [
    { src: '/images/react.svg', alt: 'react', title: 'React.js' },
    { src: '/images/nodejs.svg', alt: 'nodejs', title: 'Node.js' },
    { src: '/images/javascript.svg', alt: 'js', title: 'JavaScript' },
    { src: '/images/docker.svg', alt: 'docker', title: 'Docker' },
    { src: '/images/sql.svg', alt: 'sql', title: 'SQL' },
    { src: '/images/figma.svg', alt: 'figma', title: 'Figma' },
    { src: '/images/c++.png', alt: 'c++', title: 'C++' },
    { src: '/images/python.svg', alt: 'python', title: 'Python' },
  ];

  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-[100px] my-10 sm:my-12">
      {/* Heading */}
      <h2 className="text-[28px] sm:text-[35px] font-semibold text-slate-900 dark:text-white mb-6 text-center sm:text-left">
        I am Gud at these...
      </h2>

      {/* Skills Image Grid / Flex - Centered on Mobile */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 my-8 mx-auto">
        {skillLogos.map((skill) => (
          <div
            key={skill.alt}
            className="group relative flex flex-col items-center justify-center p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-sm"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className="w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] object-cover rounded-[5px] transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer"
            />
            <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 mt-1 mb-0.5">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
