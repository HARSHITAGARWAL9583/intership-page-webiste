import React from "react";

const faqs = [
  {
    q: "Is the internship remote?",
    a: "Yes, it’s fully remote. You can work from anywhere in the world.",
  },
  {
    q: "Do I need prior experience?",
    a: "No, but basic programming knowledge helps. We value enthusiasm more!",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes! Every participant receives a verified internship certificate.",
  },
  {
    q: "Is there any stipend?",
    a: "Yes, top performers will receive a performance-based stipend.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {faqs.map((item, i) => (
          <div key={i} className="bg-white/10 p-6 rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
            <p className="text-white/80">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
