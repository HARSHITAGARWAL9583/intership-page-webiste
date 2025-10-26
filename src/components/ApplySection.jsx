import React from "react";

const ApplySection = () => {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-yellow-400 to-pink-500">
      <h2 className="text-3xl font-extrabold mb-4 text-slate-900">
        Ready to Kickstart Your Career?
      </h2>
      <p className="text-lg text-slate-800 mb-6">
        Join our internship program and learn by doing — from real mentors.
      </p>
      <a
        href="https://example.com/apply"
        target="_blank"
        rel="noreferrer"
        className="bg-slate-900 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
      >
        Apply Now
      </a>
    </section>
  );
};

export default ApplySection;
