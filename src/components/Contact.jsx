import React, { useState } from "react";
import { motion } from "framer-motion"; 
import emailjs from "@emailjs/browser"; 

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } }
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2wlhwh5", // Replace with your EmailJS Service ID
        "template_84tlvg4", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "OPyWerjRBGin63hy9" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully! ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatusMessage("Failed to send message ❌. Try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div id="contact" className="py-8">
      <motion.form
        className="relative bg-[#0A0A0A] border-4 border-gray-700 rounded-xl overflow-hidden p-4 md:p-6 mx-auto max-w-md mt-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        initial="hidden"
        animate="visible"
        variants={formVariants}
        onSubmit={sendEmail} // Handle form submission
      >
        <div className="px-4 py-6 md:px-6">
          <h2 className="text-2xl font-extrabold text-center text-white">
            Get in Touch!
          </h2>
          <div className="mt-4">
            <div className="relative">
              <label className="block mb-1 text-sm font-medium text-zinc-300" htmlFor="name">Name</label>
              <input
                placeholder="Your Name"
                className="block w-full px-3 py-2 text-white bg-[#0A0A0A] border-2 border-gray-700 rounded-lg focus:border-blue-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="name"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-sm font-medium text-zinc-300" htmlFor="email">Email</label>
              <input
                placeholder="you@example.com"
                className="block w-full px-3 py-2 text-white bg-[#0A0A0A] border-2 border-gray-700 rounded-lg focus:border-blue-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-sm font-medium text-zinc-300" htmlFor="message">Message</label>
              <textarea
                placeholder="Your Message"
                className="block w-full px-3 py-2 text-white bg-[#0A0A0A] border-2 border-gray-700 rounded-lg focus:border-blue-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="message"
                id="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <motion.div
                className="relative group"
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
              >
                <button
                  type="submit"
                  className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">Send Message</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </motion.div>
            </div>
            {statusMessage && (
              <p className="text-center text-sm mt-4 text-white">{statusMessage}</p>
            )}
          </div>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
