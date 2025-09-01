"use client";
import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../assects/jpg/logo.jpg";
import Projecthighlight from "../landingPage/Projecthighlight";

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HeroSection = () => {
  const titles = ["Zain ul Abideen", "Web Developer", "Fronted Developer"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Stats Data
  const stats = [
    { number: 1, label: "Years of experience" },
    { number: 10, label: "Projects completed" },
    { number: 5, label: "Technologies mastered" },
    { number: 300, label: "Code commits" },
  ];

  return (
    // <>
    <section id="home" className="bg-[#0d0d0d] text-white font-[Poppins] py-10">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-16 px-6 md:px-12">
        {/* Left Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.p
            className="text-gray-400 text-sm mb-2 tracking-widest uppercase"
            variants={fadeInUp}
          >
            Software Developer
          </motion.p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-snug">
            Hello, I&apos;m{" "}
            <span className="block md:inline bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 bg-clip-text text-transparent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titles[index]}
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {titles[index].split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            className="text-gray-400 mb-8 text-base md:text-lg"
            variants={fadeInUp}
          >
            I am a passionate Frontend Developer with experience in building
            modern, responsive, and user-friendly web applications using
            React.js, Next.js, and modern frameworks. With a solid understanding
            of PHP & MySQL for backend development, I enjoy working across the
            full stack to deliver seamless digital solutions. My focus is on
            clean code, performance, and creating impactful user experiences.
          </motion.p>

          {/* Buttons + Social */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
            variants={fadeInUp}
          >
            {/* Button replaced */}
            <button className="border border-green-500 text-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-400 hover:text-black hover:scale-105 transition duration-300">
              <Link href="/contact">Contact Me</Link>
            </button>
            <div className="flex gap-6 text-2xl">
              {[
                { icon: <FaLinkedin />, href: "#" },
                // { icon: <FaTwitter />, href: "#" },
                {
                  icon: <FaInstagram />,
                  href: "https://www.instagram.com/zain_codes5/",
                },
                {
                  icon: <FaFacebook />,
                  href: "https://www.facebook.com/profile.php?id=61579212897305",
                },
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
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-50 h-50 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_25px_60px_-10px_rgba(0,255,128,0.4)]">
            <Image
              // src={profileImg}
              alt="Profile"
              fill
              className="object-cover rounded-full"
              priority
            />

            <motion.div className="absolute -bottom-6 left-0 right-0 h-12 bg-green-400/20 blur-2xl rounded-full"></motion.div>

            <motion.svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 300 300"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <circle
                cx="150"
                cy="150"
                r="145"
                stroke="#00ff80"
                strokeWidth="3"
                strokeDasharray="15,15"
                fill="none"
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 bg-[#0d0d0d]">
        <div className="max-w-8xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-white">{stat.number}</h3>
              <p className="text-gray-400 text-sm mt-2 text-base md:text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    // <Projecthighlight />
    // </>
  );
};

export default HeroSection;
