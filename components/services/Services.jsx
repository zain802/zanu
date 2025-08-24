"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDesktop,
  FaLaptopCode,
  FaBlog,
  FaPalette,
  FaLock,
  FaRocket,
  FaTachometerAlt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      desc: "I build pixel-perfect, responsive user interfaces using React, Bootstrap, and GSAP — ensuring every website looks modern, runs fast, and works seamlessly across all devices.",
      icon: <FaDesktop className="text-3xl text-green-400" />,
    },
    {
      title: "Backend Development",
      desc: "Secure, scalable backend systems using PHP, Node.js, and MySQL — from building REST APIs to managing complex databases and server-side logic.",
      icon: <FaServer className="text-3xl text-green-400" />,
    },
    {
      title: "Full Stack Web Applications",
      desc: "From UI to database, I deliver complete web solutions with smooth frontend-backend integration — tailored to your business logic and user experience.",
      icon: <FaLaptopCode className="text-3xl text-green-400" />,
    },
    {
      title: "Portfolio & Business Websites",
      desc: "Custom-designed personal or business websites — fully responsive, animated, and SEO-ready to showcase your brand and impress your audience.",
      icon: <FaCode className="text-3xl text-green-400" />,
    },
    {
      title: "Blog & CMS Platforms",
      desc: "Dynamic blog systems with admin panels — manage content, users, comments, and categories easily, with full responsiveness and performance tuning.",
      icon: <FaBlog className="text-3xl text-green-400" />,
    },
    {
      title: "UI/UX to Code Conversion",
      desc: "I convert your Figma, Adobe XD, or PSD designs into clean, responsive, and functional frontend code — matching your exact UI vision.",
      icon: <FaPalette className="text-3xl text-green-400" />,
    },
    {
      title: "Authentication & User Management",
      desc: "Implement secure user login systems, registration forms, JWT tokens, profile pages, and role-based access — all built with best security practices.",
      icon: <FaLock className="text-3xl text-green-400" />,
    },
    {
      title: "Website Optimization & Maintenance",
      desc: "Speed up, secure, and update your site with performance audits, SEO improvements, bug fixes, and ongoing maintenance support.",
      icon: <FaRocket className="text-3xl text-green-400" />,
    },
    {
      title: "Custom Dashboards & Admin Panels",
      desc: "Interactive dashboards with charts, filters, and CRUD functionality — perfect for blogs, portfolios, CMS, or business data management.",
      icon: <FaTachometerAlt className="text-3xl text-green-400" />,
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#0d0d0d] text-white py-20 px-6 md:px-12 font-[Poppins]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            My <span className="text-green-500">Services</span>
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-32 bg-gradient-to-r from-green-500/80 via-green-500/30 to-transparent rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            I deliver end-to-end solutions—from discovery and design to
            development and deployment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent 
                           hover:from-green-500/40 hover:to-transparent transition-colors duration-500"
              >
                <div
                  className="relative h-full rounded-2xl bg-[#141414]/70 border border-white/10 
                             p-8 lg:p-9 overflow-hidden transition-all duration-500 
                             backdrop-blur-[2px] md:backdrop-blur-none
                             group-hover:backdrop-blur-[6px]
                             group-hover:-translate-y-2 group-hover:shadow-[0_30px_70px_-20px_rgba(0,255,128,0.35)]
                             group-hover:border-green-500/40"
                >
                  {/* Decorative faint big number */}
                  <span className="pointer-events-none select-none absolute -top-6 -left-3 text-8xl font-extrabold tracking-tight text-green-500/10">
                    {num}
                  </span>

                  {/* Icon + Number Badge */}
                  <div className="relative flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 shadow-md shadow-green-500/10">
                      {s.icon}
                    </div>
                    <span className="text-sm font-bold tracking-widest text-green-400/90">
                      {num}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {s.desc}
                  </p>

                  {/* Bottom gradient rule */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

                  {/* Subtle shine on hover */}
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(1200px 300px at 0% 0%, rgba(0,255,128,0.08), transparent 60%)",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
