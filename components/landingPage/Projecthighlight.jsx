"use client";

import { motion } from "framer-motion";

export default function Projecthighlight() {
  const works = [
    {
      title: "E-Commerce Platform",
      desc: "A scalable full-stack e-commerce solution with authentication, cart, and secure payments built for seamless online shopping.",
      tag: "Full Stack",
      img: "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=800&auto=format&fit=crop&q=80",
      liveUrl: "https://your-ecommerce-demo.com",
    },
    {
      title: "Portfolio Website",
      desc: "A modern, responsive, and animated portfolio designed to showcase skills and projects with SEO optimization.",
      tag: "Frontend",
      img: "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=800&auto=format&fit=crop&q=80",
      liveUrl: "https://your-portfolio.com",
    },
    {
      title: "Blog Management System",
      desc: "A complete blogging platform with admin dashboard, user authentication, comments, likes, and dynamic content.",
      tag: "MERN Stack",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      liveUrl: "https://your-blog-app.com",
    },
  ];

  return (
    <section
      id="work"
      className="bg-[#0d0d0d] text-white py-20 px-6 md:px-12 font-[Poppins]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading with link */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold">
              Featured <span className="text-green-500">Projects</span>
            </h2>
            <div className="mx-auto md:mx-0 mt-4 h-[2px] w-32 bg-gradient-to-r from-green-500/80 via-green-500/30 to-transparent rounded-full" />
            <p className="text-gray-400 max-w-2xl mt-6">
              Here are some of my most impactful projects that highlight my
              expertise in design, development, and deployment.
            </p>
          </div>

          {/* Right side link */}
          <a
            href="/work"
            className="mt-6 md:mt-0 inline-block text-green-400 hover:text-green-300 font-medium border border-green-500/30 px-4 py-2 rounded-lg transition-all duration-300"
          >
            View All Projects →
          </a>
        </motion.div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-white/10 
                         hover:border-green-500/40 hover:shadow-[0_30px_70px_-20px_rgba(0,255,128,0.3)] 
                         transition-all duration-500"
            >
              {/* Project Image */}
              <a href={w.liveUrl} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={w.img}
                    alt={w.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-500">
                    <h3 className="text-lg font-semibold text-green-400">
                      {w.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-gray-300">
                      {w.tag}
                    </span>
                  </div>
                </div>
              </a>

              {/* Card Content */}
              <div className="p-6">
                <span className="inline-block mb-3 text-xs font-bold uppercase tracking-wider text-green-400/90 bg-green-500/10 px-3 py-1 rounded-full">
                  {w.tag}
                </span>

                <a
                  href={w.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                    {w.title}
                  </h3>
                </a>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {w.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
