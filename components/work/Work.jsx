"use client";

import { motion } from "framer-motion";

export default function Work() {
  const works = [
    {
      title: "E-Commerce Platform",
      desc: "Developed a full-stack e-commerce store with authentication, shopping cart, and secure payment gateway.",
      tag: "Full Stack",
      img: "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=800&auto=format&fit=crop&q=80",
      liveUrl: "https://your-ecommerce-demo.com",
    },
    {
      title: "Portfolio Website",
      desc: "Designed and developed a modern portfolio with smooth animations, responsive UI, and SEO optimization.",
      tag: "Frontend",
      img: "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=800&auto=format&fit=crop&q=80",
      liveUrl: "https://your-portfolio.com",
    },
    {
      title: "Portfolio Website",
      desc: "Designed and developed a modern portfolio with smooth animations, responsive UI, and SEO optimization.",
      tag: "Frontend",
      img: "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=800&auto=format&fit=crop&q=80",
      liveUrl: "https://your-portfolio.com",
    },
    {
      title: "Portfolio Website",
      desc: "Designed and developed a modern portfolio with smooth animations, responsive UI, and SEO optimization.",
      tag: "Frontend",
      img: "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=800&auto=format&fit=crop&q=80",
      liveUrl: "https://your-portfolio.com",
    },
    {
      title: "Business Dashboard",
      desc: "Built an interactive admin dashboard for analytics, blogs, and user management.",
      tag: "Dashboard",
      img: "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=800&auto=format&fit=crop&q=80",
      liveUrl: "https://your-dashboard-demo.com",
    },
    {
      title: "API Integrations",
      desc: "Created secure REST APIs and integrated third-party services like Stripe, Google Auth, and Firebase.",
      tag: "Backend",
      img: "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=800&auto=format&fit=crop&q=80",
      liveUrl: "https://your-api-demo.com",
    },
  ];

  return (
    <section
      id="work"
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
            My <span className="text-green-500">Projects</span>
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-32 bg-gradient-to-r from-green-500/80 via-green-500/30 to-transparent rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Some of my featured projects showcasing design, development, and
            deployment skills.
          </p>
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
              {/* Project Image (clickable) */}
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

              {/* Content */}
              <div className="p-6">
                {/* Tag above heading */}
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
