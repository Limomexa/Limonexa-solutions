import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Rocket } from "lucide-react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    projectType: "Web App",
    budget: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "918939720567"; // Apna WhatsApp number yahan dale
    const text = `*New Project Inquiry from Limonexa*%0A%0A*Name:* ${formData.name}%0A*Project:* ${formData.projectType}%0A*Budget:* ${formData.budget}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    setIsModalOpen(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Next-Gen Software Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900"
          >
            Transforming Ideas into{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Powerful Digital Reality
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium"
          >
            At Limonexa, we build enterprise-grade software solutions that scale
            with your vision. From innovative startups to industry leaders, we
            deliver excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center flex-wrap gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest"
          >
            {/* Mobile Hover/Touch for spans */}
            <motion.span
              whileTap={{ scale: 0.95 }}
              className="hover:text-blue-600 transition-colors cursor-default"
            >
              Cloud Native
            </motion.span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <motion.span
              whileTap={{ scale: 0.95 }}
              className="hover:text-indigo-600 transition-colors cursor-default"
            >
              AI Driven
            </motion.span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <motion.span
              whileTap={{ scale: 0.95 }}
              className="hover:text-purple-600 transition-colors cursor-default"
            >
              Secure by Design
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#004488" }} // Mobile hover fix
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-full bg-[#003366] text-white font-bold shadow-xl shadow-blue-900/20 transition-all duration-300"
            >
              Launch Your Project
            </motion.button>

            <motion.a
              href="#services"
              whileHover={{
                scale: 1.05,
                borderColor: "#2563eb",
                color: "#2563eb",
              }} // Mobile hover fix
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Services
            </motion.a>
          </motion.div>
        </div>

        {/* Right 3D Elements */}
        <div className="relative h-[600px] hidden lg:block">
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80"
            style={{ perspective: 1000 }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-80 blur-sm" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-tl from-blue-300 via-purple-400 to-pink-400" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -40, 0], rotateX: [0, 360], rotateY: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-24 h-24"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 rounded-lg shadow-2xl"
              style={{ transform: "rotateY(0deg) translateZ(12px)" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-60 rounded-lg"
              style={{ transform: "rotateY(90deg) translateZ(12px)" }}
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 35, 0], rotateX: [0, -360], rotateZ: [0, 180] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-32 right-16 w-20 h-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 opacity-80 rounded-lg shadow-2xl" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -25, 0], rotateY: [0, 360] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-40 right-32 w-16 h-16"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 opacity-80 rounded-lg shadow-xl" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-gray-200"
          >
            <div className="flex gap-1.5 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <code className="text-xs text-gray-700 block">
              <span className="text-purple-600">const</span> Limonexa ={" "}
              <span className="text-blue-600">Innovate</span>();
            </code>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 left-20 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-gray-200"
          >
            <div className="flex gap-1.5 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <code className="text-xs text-gray-700 block">
              <span className="text-purple-600">function</span>{" "}
              <span className="text-blue-600">Success</span>() &#123; return
              "Scale"; &#125;
            </code>
          </motion.div>
        </div>
      </div>

      {/* Project Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              {/* Close button with tap effect */}
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600" />
              </motion.button>

              <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center p-8">
                <div className="flex items-center gap-3 text-white">
                  <Rocket className="w-8 h-8" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight">
                    Start Your Journey
                  </h3>
                </div>
              </div>

              <form onSubmit={handleWhatsAppRedirect} className="p-8 space-y-4">
                {/* Form fields remain same */}
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    Your Name
                  </label>
                  <input
                    required
                    name="name"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:outline-none transition-all"
                  >
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>Custom SaaS</option>
                    <option>AI Integration</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    Budget Range
                  </label>
                  <input
                    required
                    name="budget"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="e.g. $5k - $10k"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    Quick Message
                  </label>
                  <textarea
                    required
                    name="message"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:outline-none transition-all h-24 resize-none"
                    placeholder="Tell us briefly about your vision..."
                  />
                </div>
                {/* Submit button with mobile tap effect */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#003366] text-white font-bold shadow-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
                >
                  Send to WhatsApp <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
