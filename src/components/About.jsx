import React from "react";

const About = () => {
  return (
    <section className="py-16 px-8 text-center md:text-left">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Why Join This Internship?</h2>
        <p className="text-white/90 mb-8">
          Get hands-on experience with real projects, guidance from mentors, and
          exposure to technologies used in the industry. We focus on learning by
          doing — from design to deployment.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">💡 Learn by Building</h3>
            <p className="text-white/80">
              Work on live features, improve your coding and problem-solving
              skills, and collaborate with team members.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">🎓 Certificate + Stipend</h3>
            <p className="text-white/80">
              Earn a verified internship certificate and a stipend on successful
              completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
