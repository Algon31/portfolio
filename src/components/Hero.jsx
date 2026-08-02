import React from 'react';

export default function Hero() {
  return (
    <section className="px-6 sm:px-12 lg:px-16 py-12 lg:py-16 max-w-5xl">
      <div className="flex flex-col gap-1">
        <div className="text-[36px] sm:text-[40px] font-normal text-slate-800 dark:text-slate-200">
          Hey! Im
        </div>
        <div className="text-[28px] sm:text-[32px] font-bold text-slate-900 dark:text-cyan-400">
          Ravi Bhuvan,
        </div>
        <p className="mt-2.5 text-[18px] sm:text-[20px] leading-relaxed text-slate-700 dark:text-slate-300 font-normal max-w-4xl">
          I am a tech-savvy student focusing on building a gud technical base. My goal is to achieve something big in my technical field. Trying new things and facing new challenges are some of the things that excite me. Problem-solving and collaborating with others are my assets.
        </p>
      </div>
    </section>
  );
}
