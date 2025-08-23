"use client";
import React, { useState, useEffect } from "react";
import { Code2, Layers, Database, GitBranch, Monitor, Cpu, User } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const skills = [
    { name: "Next.js", icon: <Layers size={28} />, level: "Advanced", percent: 90 },
    { name: "Node.js", icon: <Cpu size={28} />, level: "Advanced", percent: 85 },
    { name: "React", icon: <Monitor size={28} />, level: "Expert", percent: 95 },
    { name: "TailwindCSS", icon: <Code2 size={28} />, level: "Advanced", percent: 88 },
    { name: "MongoDB", icon: <Database size={28} />, level: "Intermediate", percent: 80 },
    { name: "Git/GitHub", icon: <GitBranch size={28} />, level: "Advanced", percent: 92 },
  ];

  const tabs = ["experience", "education", "skills", "about"];

  return (
    <section
      id="resume"
      className="bg-[#0d0d0d] text-white py-20 px-6 md:px-12 font-[Poppins]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold">
            My <span className="text-green-500">Resume</span>
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-32 bg-gradient-to-r from-green-500/80 via-green-500/30 to-transparent rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            A blend of experience, knowledge and technical expertise to build impactful solutions.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-medium border border-green-500 cursor-pointer rounded-full transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-xl hover:scale-105"
                    : "bg-transparent text-green-500 hover:bg-green-500/20 hover:scale-105"
                }`}
            >
              {tab === "experience"
                ? "Experience"
                : tab === "education"
                ? "Education"
                : tab === "skills"
                ? "Skills"
                : "About Me"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-12 space-y-8">
          {/* Experience */}
          {activeTab === "experience" && (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Full Stack Developer @ ABC Corp",
                  date: "2021 - Present",
                  desc: "Building scalable applications with Next.js, Node.js and MongoDB.",
                },
                {
                  title: "Frontend Developer @ XYZ",
                  date: "2019 - 2021",
                  desc: "Designed responsive UI with React and TailwindCSS.",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-6 bg-[#141414] rounded-2xl shadow-lg border-l-4 border-green-500 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,255,128,0.3)] transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-green-400">{exp.title}</h3>
                  <p className="text-gray-400 mt-1">{exp.date}</p>
                  <p className="text-gray-300 mt-4">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "BS Computer Science",
                  date: "XYZ University | 2016 - 2020",
                  desc: "Specialized in software engineering and web technologies.",
                },
                {
                  title: "Intermediate in Science",
                  date: "Govt. College | 2014 - 2016",
                  desc: "Focused on Mathematics & Computer Science.",
                },
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-6 bg-[#141414] rounded-2xl shadow-lg border-t-4 border-green-500 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,255,128,0.3)] transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-green-400">{edu.title}</h3>
                  <p className="text-gray-400 mt-1">{edu.date}</p>
                  <p className="text-gray-300 mt-4">{edu.desc}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Skills */}
          {activeTab === "skills" && (
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <SkillCard key={i} skill={skill} delay={i * 0.15} />
              ))}
            </div>
          )}

          {/* About Me */}
          {activeTab === "about" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-[#141414] backdrop-blur-sm rounded-2xl shadow-lg border border-green-500/20 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_15px_30px_rgba(0,255,128,0.4)] transition-transform duration-300"
            >
              <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl font-bold">
                <User size={40} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-green-400">About Me</h3>
              <p className="text-gray-300 leading-relaxed mt-4 max-w-2xl">
                I am a passionate Full Stack Developer who loves crafting web applications
                that merge creativity with technology. With strong expertise in modern
                frameworks and a problem-solving mindset, I aim to deliver impactful
                digital experiences. Always eager to learn and adapt to new technologies
                to stay ahead in the industry.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

// SkillCard Component with number counting
function SkillCard({ skill, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; // animation duration in ms
    const increment = skill.percent / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= skill.percent) {
        start = skill.percent;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(counter);
  }, [skill.percent]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 bg-[#141414] rounded-2xl shadow-lg border border-green-500/20 text-center flex flex-col items-center hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,255,128,0.3)] transition-transform duration-300"
    >
      <div className="text-3xl font-bold text-green-400 mb-2">{count}%</div>
      <div className="text-green-400 text-4xl mb-2">{skill.icon}</div>
      <h4 className="mt-2 text-lg font-semibold">{skill.name}</h4>
      <p className="text-gray-400 text-sm mb-4">{skill.level}</p>

      <div className="w-full h-3 bg-green-500/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-green-500 rounded-full shadow-[0_0_10px_rgba(0,255,128,0.5)]"
        />
      </div>
    </motion.div>
  );
}
