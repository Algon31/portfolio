import React from 'react';

export default function Contact() {
  const email = "ravibhuvan31@gmail.com";

  return (
    <section id="contact" className="my-20 sm:my-24 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-[28px] sm:text-[35px] font-semibold text-slate-900 dark:text-white">
        Get In Touch With Me
      </h2>

      <button
        onClick={() => window.location.href = `mailto:${email}`}
        className="mt-5 bg-[#B75A48] dark:bg-cyan-500 text-[#E8ECD6] dark:text-slate-950 h-[48px] px-6 text-sm font-semibold flex items-center justify-center rounded-[7px] border-none cursor-pointer btn-hover-scale shadow-md"
      >
        {email}
      </button>
    </section>
  );
}
