"use client";
import React, { useState, useEffect } from "react";
import {
  Code2,
  Layers,
  GitBranch,
  Monitor,
  Globe,
  Server,
  Zap,
  Cloud,
} from "lucide-react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const skills = [
    { name: "React.js", icon: Monitor, level: "Expert", percent: 95 },
    { name: "Next.js", icon: Layers, level: "Advanced", percent: 90 },
    { name: "TailwindCSS", icon: Code2, level: "Advanced", percent: 88 },
    { name: "Bootstrap", icon: Globe, level: "Advanced", percent: 82 },
    { name: "PHP & MySQL", icon: Server, level: "Intermediate", percent: 80 },
    { name: "Git / GitHub", icon: GitBranch, level: "Advanced", percent: 92 },
    {
      name: "Animations (GSAP, Framer Motion)",
      icon: Zap,
      level: "Advanced",
      percent: 85,
    },
    {
      name: "Cloud Deployment (Vercel, Netlify)",
      icon: Cloud,
      level: "Intermediate",
      percent: 78,
    },
  ];

  const tabs = ["experience", "skills", "about"];

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
            A blend of academic learning, technical expertise, and hands-on
            project experience — shaping me into a well-rounded web developer.
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
                : tab === "skills"
                ? "Skills"
                : "About Me"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-12 space-y-8">
          {/* Experience (with Education ) */}
          {activeTab === "experience" && (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Frontend Developer",
                  date: "2023 - Present",
                  desc: "Worked as a frontend developer for 1 year, building responsive, modern, and user-friendly websites with React, Next.js, TailwindCSS, and animations (GSAP, Framer Motion). Focused on creating seamless user experiences and performance-driven applications.",
                },
                {
                  title: "FSc Pre-Engineering",
                  date: "Govt. College | 2021 - 2023",
                  desc: "Studied Mathematics, Physics, and Computer Science. Built a strong foundation in problem-solving, logic, and analytical skills.",
                },
                {
                  title: "Matriculation (Science)",
                  date: "Govt. School | 2019 - 2021",
                  desc: "Completed matriculation in the science group with core subjects including Physics, Chemistry, Mathematics, and Biology.",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-6 bg-[#141414]/70 backdrop-blur-md rounded-2xl shadow-lg border-l-4 border-green-500 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,255,128,0.3)] transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-green-400">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 mt-1">{exp.date}</p>
                  <p className="text-gray-300 mt-4">{exp.desc}</p>
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
                  <h2 className="text-3xl font-bold text-green-400 mb-6">
                    About Me
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Hello, I’m{" "}
                    <span className="text-green-400 font-semibold">
                      Zain Rafiq
                    </span>
                    , a passionate Frontend Developer with 1 year of hands-on
                    experience building responsive, modern, and user-friendly
                    web applications.
                  </p>

                  <p className="text-gray-400 leading-relaxed mt-4">
                    I specialize in React, Next.js, TailwindCSS, Bootstrap, and
                    animations (GSAP, Framer Motion). My focus is always on
                    writing clean code, delivering high performance, and
                    creating smooth user experiences.
                  </p>

                  <p className="text-gray-400 leading-relaxed mt-4">
                    Besides coding, I love exploring new technologies, improving
                    my skills, and working on creative projects. My ultimate
                    goal is to become a highly skilled Full Stack Developer and
                    contribute to impactful digital solutions.
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
                        {
                          icon: <FaFacebook />,
                          href: "https://www.facebook.com/profile.php?id=61579212897305",
                        },

                        {
                          icon: <FaInstagram />,
                          href: "https://www.instagram.com/zain_codes5/",
                        },
                        { icon: <FaGithub />, href: "#" },
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
