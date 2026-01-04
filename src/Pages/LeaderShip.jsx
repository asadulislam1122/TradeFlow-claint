import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const leaders = [
  {
    name: "Md Asadullah",
    title: "Co-founder and CEO",
    img: "https://i.ibb.co.com/C5VCKBmz/574844188-822685373960919-6143056544719542289-n.jpg",
    color: "text-sky-600",
    desc: "Founder and CEO of Airtable. Founded in 2012, Airtable enables over 500,000 organizations to accelerate work and automate workflows.",
    linkdin: (
      <a
        href="https://www.linkedin.com/in/md-asadullah-a62863396"
        className="inline-flex items-center text-blue-500 hover:text-blue-700 text-sm"
      >
        <FaLinkedin className="mr-1" /> LinkedIn
      </a>
    ),
  },
  {
    name: "Ambereen Toubassy",
    title: "Chief Financial Officer",
    img: "https://i.ibb.co.com/nN7L5sJ8/Airtable-280-blue.png",
    color: "text-amber-500",
    desc: "Leads Airtable’s finance and legal teams. Previously CFO at Quibi and operating partner at WndrCo with experience in investment banking.",
    linkdin: (
      <a
        href="https://www.linkedin.com/in/ambereen-toubassy-816694"
        className="inline-flex items-center text-blue-500 hover:text-blue-700 text-sm"
      >
        <FaLinkedin className="mr-1" /> LinkedIn
      </a>
    ),
  },
  {
    name: "David Azose",
    title: "Chief Technology Officer",
    img: "https://i.ibb.co.com/Kc8jH3Fn/images-38.jpg",
    color: "text-amber-500",
    desc: "Heads engineering, security, and IT at Airtable. Joined in 2025 from OpenAI, leading enterprise AI product scaling.",
    linkdin: (
      <a
        href="https://www.linkedin.com/in/david-azose-4b80757"
        className="inline-flex items-center text-blue-500 hover:text-blue-700 text-sm"
      >
        <FaLinkedin className="mr-1" /> LinkedIn
      </a>
    ),
  },
  {
    name: "Paul Ohls",
    title: "Chief Revenue Officer",
    img: "https://i.ibb.co.com/6RzWJCKN/images-37.jpg",
    color: "text-sky-600",
    desc: "Leads customer-facing teams including sales and success. Former CRO at Sprinklr and held leadership roles at Tenfold and Zilliant.",
    linkdin: (
      <a
        href="https://www.linkedin.com/in/paulohls"
        className="inline-flex items-center text-blue-500 hover:text-blue-700 text-sm"
      >
        <FaLinkedin className="mr-1" /> LinkedIn
      </a>
    ),
  },
];

const LeaderShip = () => {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-green-600">
          Leader<span className="text-blue-600"> Ship</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6 text-left"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="w-32 h-32 rounded-lg object-cover mr-0 sm:mr-6 mb-4 sm:mb-0"
              />
              <div>
                <h3 className="text-xl font-semibold text-pink-500">
                  {leader.name}
                </h3>
                <p className={`${leader.color} font-medium mb-2`}>
                  {leader.title}
                </p>
                <p className="text-gray-600 text-sm mb-3">{leader.desc}</p>
                <p>{leader.linkdin}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderShip;
