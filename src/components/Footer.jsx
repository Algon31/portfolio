import React from 'react';

export default function Footer() {
  const resumeUrl = "https://drive.google.com/file/d/1hfW3nmJqsfJmIGe1dkARdtBGc57qBAvQ/view?usp=drive_link";

  return (
    <footer className="w-full bg-black text-white py-8 flex flex-col items-center justify-end text-center mt-12">
      {/* Social Icons */}
      <div className="flex flex-row justify-center items-center gap-6 mb-4">
        <a
          href="https://github.com/Algon31"
          target="_blank"
          rel="noopener noreferrer"
          className="social-img-hover"
        >
          <img src="/images/github.png" alt="GitHub" className="w-[30px] h-[30px] object-cover cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/ravi-bhuvan-985399286/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-img-hover"
        >
          <img src="/images/link.png" alt="LinkedIn" className="w-[30px] h-[30px] object-cover cursor-pointer" />
        </a>
      </div>

      {/* Resume Link */}
      <div className="my-3">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline cursor-pointer hover:text-slate-300 font-medium text-base"
        >
          My Resume
        </a>
      </div>

      {/* Copyright */}
      <div className="text-slate-400 text-sm mt-2 font-normal">
        Ravi Bhuvan © 2024
      </div>
    </footer>
  );
}
