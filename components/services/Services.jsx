"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, fast, and scalable websites with React / Next.js and clean architectures.",
      icon: <FaCode className="text-3xl text-green-400" />,
    },
    {
      title: "UI/UX Design",
      desc: "Pixel-perfect, user-centric interfaces with smooth flows and consistent design systems.",
      icon: <FaPaintBrush className="text-3xl text-green-400" />,
    },
    {
      title: "Responsive Design",
      desc: "Seamless experiences across mobile, tablet, and desktop with robust layouts.",
      icon: <FaMobileAlt className="text-3xl text-green-400" />,
    },
    {
      title: "Backend Development",
      desc: "Secure and optimized APIs with Node.js, Express, and scalable databases.",
      icon: <FaServer className="text-3xl text-green-400" />,
    },
    {
      title: "E-Commerce Solutions",
      desc: "High-conversion online stores with modern integrations and payment gateways.",
      icon: <FaShoppingCart className="text-3xl text-green-400" />,
    },
    {
      title: "SEO & Performance",
      desc: "Boost visibility and speed with SEO strategies and performance optimization.",
      icon: <FaSearch className="text-3xl text-green-400" />,
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
                  className="relative h-full rounded-2xl bg-[#141414] border border-white/10 
                             p-8 lg:p-9 overflow-hidden transition-all duration-500 
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
