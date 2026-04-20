import { motion } from "motion/react";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx3fNi2Nrz7U9dOVhS5jw8h5fGdg-HyMnHJfHcnD2Lcf4LdsrEk1jdNT-V7mBTvrCA7/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        },
      );

      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      alert("Error submitting form");
      console.error(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Limonexa | Web Development Company in Chennai</title>

        <meta
          name="description"
          content="Contact Limonexa Solutions, a Chennai-based web development and software company. Hire MERN stack developers, React, Node.js experts for your next project."
        />

        <meta
          name="keywords"
          content="contact Limonexa, web development company Chennai contact, hire MERN developer Chennai, software company India contact"
        />
      </Helmet>
      <section
        id="contact"
        className="min-h-screen relative overflow-hidden py-20 px-6"
      >
        <div className="hidden max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Looking for a <strong>web development company in Chennai</strong>?
            Get in touch with <strong>Limonexa Solutions</strong> to build
            scalable web apps, mobile apps, and software solutions.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              📞 Phone: <strong>+91 89397 20567</strong>
            </p>

            <p>
              📧 Email: <strong>info@limonexa.site</strong>
            </p>

            <p>
              📍 Location: <strong>Chennai, Tamil Nadu, India</strong>
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="https://wa.me/918939720567"
              target="_blank"
              className="px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life
            </p>
          </motion.div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-200 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-200 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Project Type Field */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-200 mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-800">
                        Select a project type
                      </option>
                      <option value="web-development" className="bg-gray-800">
                        Web Development
                      </option>
                      <option value="mobile-app" className="bg-gray-800">
                        Mobile App
                      </option>
                      <option value="ui-ux-design" className="bg-gray-800">
                        UI/UX Design
                      </option>
                      <option value="consulting" className="bg-gray-800">
                        Consulting
                      </option>

                      <option value="seo-security" className="bg-gray-800">
                        SEO Optimization & Security
                      </option>
                      <option value="other" className="bg-gray-800">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-200 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right Side - Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Company Information
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Email</p>
                      <a
                        href="mailto:contact@limonexa.com"
                        className="text-lg text-white hover:text-blue-400 transition-colors"
                      >
                        limonexa.solutions@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Location</p>
                      <p className="text-lg text-white">Chennai, India</p>
                    </div>
                  </motion.div>

                  {/* Business Hours */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">
                        Business Hours
                      </p>
                      <p className="text-lg text-white">
                        Mon - Sat: 9:00 AM - 8:00 PM
                      </p>
                      <p className="text-base text-gray-300">Sun: Closed</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Additional Info Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 shadow-2xl border border-white/20"
              >
                <h4 className="text-xl font-bold text-white mb-4">
                  Why Choose Us?
                </h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Expert team with 10+ years experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span>100% client satisfaction guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-400" />
                    <span>Agile development methodology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>24/7 support & maintenance</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
