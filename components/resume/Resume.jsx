"use client";
import React, { useState, useEffect } from "react";
import {
  Code2,
  Layers,
  GitBranch,
  Monitor,
  Cpu,
  Globe,
  Server,
  Zap,
  Cloud,
} from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const skills = [
    { name: "React.js", icon: Monitor, level: "Expert", percent: 95 },
    { name: "Next.js", icon: Layers, level: "Advanced", percent: 90 },
    { name: "Node.js", icon: Cpu, level: "Advanced", percent: 85 },
    { name: "TailwindCSS", icon: Code2, level: "Advanced", percent: 88 },
    { name: "Bootstrap", icon: Globe, level: "Advanced", percent: 82 },
    { name: "PHP & MySQL", icon: Server, level: "Intermediate", percent: 80 },
    { name: "Git / GitHub", icon: GitBranch, level: "Advanced", percent: 92 },
    { name: "Animations (GSAP, Framer Motion)", icon: Zap, level: "Advanced", percent: 85 },
    { name: "Cloud Deployment (Vercel, Netlify)", icon: Cloud, level: "Intermediate", percent: 78 },
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
                  title: "Full Stack Developer @ TechVision",
                  date: "2023 - Present",
                  desc: "Developing scalable full-stack applications with React, Next.js, Node.js, and PHP/MySQL. Delivered enterprise dashboards, API systems, and optimized complex business workflows.",
                },
                {
                  title: "Frontend Developer (Freelance)",
                  date: "2022 - 2023",
                  desc: "Crafted modern responsive websites using React, TailwindCSS, Bootstrap, and GSAP animations. Built portfolios, business websites, and landing pages with pixel-perfect UI.",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-6 bg-[#141414]/70 backdrop-blur-md rounded-2xl shadow-lg border-l-4 border-green-500 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,255,128,0.3)] transition-transform duration-300"
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
                  date: "Govt. University | 2024 - Continue",
                  desc: "Currently pursuing Computer Science with specialization in Web Development, Cloud Computing, and Software Engineering.",
                },
                {
                  title: "Intermediate in Pre-Engineering",
                  date: "Govt. College | 2020 - 2022",
                  desc: "Focused on Mathematics, Physics, and Computer Science. Built strong logical & analytical foundation for programming.",
                },
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-6 bg-[#141414]/70 backdrop-blur-md rounded-2xl shadow-lg border-t-4 border-green-500 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,255,128,0.3)] transition-transform duration-300"
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
    className="bg-[#141414]/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-green-500/20"
  >
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
      {/* Left Side Image */}
      <div className="flex justify-center">
        <img
          src="/me.jpg"
          alt="Profile"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-green-500 shadow-[0_30px_70px_-20px_rgba(0,255,128,0.35)]"
        />
      </div>

      {/* Right Side Content */}
      <div className="text-center lg:text-left mt-6 lg:mt-0">
        <h2 className="text-3xl font-bold text-green-400 mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Hello, I’m <span className="text-green-400 font-semibold">Zain Rafiq</span>, 
          a passionate Full Stack Developer with 2+ years of experience building 
          modern, scalable web applications.
        </p>

        <p className="text-gray-400 leading-relaxed  mt-4">
          Skilled in React, Next.js, Node.js, PHP/MySQL, and cloud deployment platforms, 
          I always focus on creating seamless user experiences with performance-driven 
          coding and modern animations.
        </p>

        <p className="text-gray-400 leading-relaxed mt-4">
          Beyond coding, I love exploring new technologies, contributing to open-source projects, 
          and sharing my knowledge with others. My goal is to bring creativity, innovation, and 
          precision to every project I work on.
        </p>

        {/* Button + Social Icons */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4 justify-center lg:justify-start">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full shadow-lg hover:shadow-[0_10px_20px_rgba(0,255,128,0.4)] transition-all duration-300">
            Download CV
          </button>

          <div className="flex gap-6 text-2xl justify-center lg:justify-start">
            {[
              { icon: <FaLinkedin />, href: "#" },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className="w-12 h-12 flex items-center justify-center rounded-full 
                         bg-black/80 border border-green-500/40 backdrop-blur-md
                         shadow-lg shadow-green-500/10 
                         hover:border-green-500 hover:shadow-green-500/30
                         transition-all duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)}

        </div>
      </div>
    </section>
  );
}

// SkillCard Component
function SkillCard({ skill, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
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

  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 bg-[#141414]/70 backdrop-blur-md rounded-2xl shadow-lg border border-green-500/20 text-center flex flex-col items-center hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,255,128,0.3)] transition-transform duration-300"
    >
      <div className="text-3xl font-bold text-green-400 mb-2">{count}%</div>
      <div className="text-green-400 text-4xl mb-2">
        <Icon size={28} />
      </div>
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
