import React, { useState } from "react";

const roles = [
  {
    title: "Web Development Internship Program",
    duration: "1 month / 2 months",
    location: "Virtual",
    stipend: "-",
    startDate: "05/11/2026",
    details:
      "In this internship, you'll work on front-end and back-end web technologies such as HTML, CSS, JavaScript, React, and Node.js. You'll gain hands-on experience building responsive websites and web applications.",
  },
  {
    title: "App Development Internship Program",
    duration: "1 month / 2 months",
    location: "Virtual",
    stipend: "-",
    startDate: "05/11/2026",
    details:
      "Work on building Android and iOS apps using Flutter or React Native. Learn how to connect APIs, handle UI/UX design, and publish apps efficiently.",
  },
  {
    title: "Python Programming Internship Program",
    duration: "1 month / 2 months",
    location: "Virtual",
    stipend: "-",
    startDate: "05/11/2026",
    details:
      "This internship focuses on Python basics, automation, and real-world projects like web scraping, data handling, and mini machine learning apps.",
  },
  {
    title: "Java Programming Internship Program",
    duration: "1 month / 2 months",
    location: "Virtual",
    stipend: "-",
    startDate: "05/11/2026",
    details:
      "You'll work on Java fundamentals, JDBC, and simple applications. Ideal for students who want to strengthen backend development concepts.",
  },
];

const Roles = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <section className="py-20 px-8 bg-white text-gray-900">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        Internship Opportunities
      </h2>

      {/* Grid of Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center"
          >
            <h3 className="text-lg font-bold mb-4">{role.title}</h3>
            <ul className="text-gray-700 text-sm mb-6 space-y-1 text-left">
              <li>• Duration: {role.duration}</li>
              <li>• Location: {role.location}</li>
              <li>• Stipend: {role.stipend}</li>
              <li>• Start Date: {role.startDate}</li>
            </ul>
            <button
              onClick={() => setSelectedRole(role)}
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Popup / Modal */}
      {selectedRole && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-gray-900">
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✖️
            </button>
            <h3 className="text-2xl font-bold mb-3">{selectedRole.title}</h3>
            <p className="text-gray-700 mb-4">{selectedRole.details}</p>
            <ul className="text-gray-600 text-sm mb-6 space-y-1">
              <li>📅 Duration: {selectedRole.duration}</li>
              <li>🌍 Location: {selectedRole.location}</li>
              <li>💰 Stipend: {selectedRole.stipend}</li>
              <li>🚀 Start Date: {selectedRole.startDate}</li>
            </ul>
            <div className="flex justify-center gap-4">
              <a
                href="https://example.com/apply"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                Apply Now
              </a>
              <button
                onClick={() => setSelectedRole(null)}
                className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-400 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Roles;