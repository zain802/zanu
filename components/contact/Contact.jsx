"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0d0d0d] text-white py-20 px-6 md:px-12 font-[Poppins]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            Let’s Work <span className="text-green-500">Together</span>
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-40 bg-gradient-to-r from-green-500/80 via-green-500/30 to-transparent rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Fill out the form below or reach us directly through our contact
            details. We’d love to discuss your project and bring your ideas to
            life.
          </p>
        </motion.div>

        {/* Contact Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#141414] rounded-2xl p-10 shadow-[0_25px_60px_-10px_rgba(0,255,128,0.25)] border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full p-3 rounded-[50px] bg-[#0d0d0d] border border-gray-700 text-white focus:outline-none focus:border-green-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full p-3 rounded-[50px] bg-[#0d0d0d] border border-gray-700 text-white focus:outline-none focus:border-green-500 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-[50px] bg-[#0d0d0d] border border-gray-700 text-white focus:outline-none focus:border-green-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full p-3 rounded-[50px] bg-[#0d0d0d] border border-gray-700 text-white focus:outline-none focus:border-green-500 transition"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm text-gray-400 mb-2">
                Your Message
              </label>
              <textarea
                placeholder="Write your message"
                rows="5"
                className="w-full p-4 rounded-[30px] bg-[#0d0d0d] border border-gray-700 text-white focus:outline-none focus:border-green-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group mt-8 w-full py-4 rounded-[50px] font-semibold bg-green-500 text-black flex items-center justify-center gap-2 hover:bg-green-400 hover:scale-[1.02] transition duration-300"
            >
              Send Message
              <FaArrowRight className="text-lg transform transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start space-y-10 pl-2 mt-25"
          >
            <h3 className="text-2xl font-semibold mb-3 text-green-500">
              Let’s Connect
            </h3>
            <p className="text-gray-400 mb-4">
              Have questions or want to collaborate? Reach out anytime—we’re
              just one message away.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-2xl shadow-md shadow-green-500/10">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="font-semibold">(+40) 321 654 876</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-2xl shadow-md shadow-green-500/10">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-semibold">youremail@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-2xl shadow-md shadow-green-500/10">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Address</p>
                <p className="font-semibold">Code Corner, Tech Town 13579</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
