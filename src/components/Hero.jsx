import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Join Our <span className="text-yellow-300">Internship Program</span>
      </h1>
      <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
        Learn by building real-world projects with mentorship, teamwork, and
        creativity. Experience how real products are made!
      </p>

      <a
        href="https://example.com/apply"
        target="_blank"
        rel="noreferrer"
        className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
      >
        Apply Now
      </a>
    </section>
  );
};

export default Hero;
