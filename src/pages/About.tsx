import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, Rocket, Heart, ShieldCheck, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const features = [
  "Bespoke Development",
  "Agile Methodology",
  "Future-Ready Tech",
  "Client-Centric Growth",
];

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          About Limonexa | Software & Web Development Company in Chennai
        </title>

        <meta
          name="description"
          content="Limonexa Solutions is a Chennai-based software development company specializing in web development, MERN stack applications, UI/UX design, and scalable digital solutions for startups and businesses."
        />

        <meta
          name="keywords"
          content="about Limonexa, software company Chennai, web development Chennai, MERN developers India, React Node.js company, startup tech solutions"
        />
      </Helmet>
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] relative overflow-hidden"
      >
        <div className="hidden max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Limonexa Solutions
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Limonexa Solutions is a modern{" "}
            <strong>software development company in Chennai</strong> focused on
            delivering high-quality web and mobile applications. We specialize
            in <strong>React, Node.js, MERN stack development</strong> and build
            scalable solutions for startups and businesses across India.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
            Our mission is to transform ideas into powerful digital products
            using cutting-edge technologies, intuitive UI/UX design, and
            performance-driven development strategies.
          </p>
          <h3 className="text-2xl font-semibold mt-8">Why Choose Limonexa?</h3>

          <ul className="mt-4 text-gray-600 space-y-2">
            <li>✔ Expert MERN Stack Developers</li>
            <li>✔ Scalable & Secure Applications</li>
            <li>✔ Startup to Enterprise Solutions</li>
            <li>✔ Based in Chennai, Serving Globally</li>
          </ul>
        </div>
        {/* Background Elements */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image with Realistic Badges */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                  alt="Our Vision"
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 to-transparent" />
              </div>

              {/* Realistic Badges - No Fake Large Numbers */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-blue-50"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    Premium
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    Quality Standard
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-6 -left-6 bg-[#003366] p-6 rounded-2xl shadow-xl"
              >
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80 font-bold">
                    Tech Collective
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Professional Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-5xl font-extrabold tracking-tight leading-tight">
                  Engineering{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                    Excellence
                  </span>{" "}
                  into Every Line of Code.
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  At Limonexa, we don't just build software; we architect the
                  digital future of your brand.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Founded on the principles of innovation and integrity,
                  Limonexa started with a simple goal: to provide
                  enterprise-grade solutions that are accessible to visionaries.
                  We bridge the gap between complex engineering and intuitive
                  user experiences.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-blue-200 transition-all group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-white" strokeWidth={4} />
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-tight">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-4 rounded-full bg-[#003366] text-white font-bold shadow-lg hover:bg-blue-800 transition-all flex items-center gap-2"
              >
                Our Success Story{" "}
                <Zap className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Success Story Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-[#001122]/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl flex flex-col max-h-[90vh]"
              >
                {/* Modal Header */}
                <div className="p-8 border-b flex justify-between items-center bg-gray-50 rounded-t-[2rem]">
                  <h3 className="text-2xl font-extrabold text-[#003366]">
                    The Limonexa Journey
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 hover:text-red-500 transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Scrollable Content */}
                <div className="p-8 overflow-y-auto custom-scrollbar space-y-8">
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                      <Rocket className="text-blue-600" /> Where It All Began
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      Limonexa didn't start in a boardroom; it started with a
                      passion for solving problems. In a world crowded with
                      generic software, we saw a missing piece: **Empathy.** We
                      realized that most businesses don't need "another
                      app"—they need a partner who understands their pulse.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-2xl space-y-2 border border-blue-100">
                      <Heart className="text-red-500 w-8 h-8" />
                      <h5 className="font-bold text-blue-900 uppercase text-xs tracking-widest">
                        Our Culture
                      </h5>
                      <p className="text-sm text-blue-800 font-medium">
                        We treat every project as our own child. Attention to
                        detail is not a task; it's our habit.
                      </p>
                    </div>
                    <div className="p-6 bg-indigo-50 rounded-2xl space-y-2 border border-indigo-100">
                      <ShieldCheck className="text-indigo-600 w-8 h-8" />
                      <h5 className="font-bold text-indigo-900 uppercase text-xs tracking-widest">
                        The Promise
                      </h5>
                      <p className="text-sm text-indigo-800 font-medium">
                        We promise clean code, transparent communication, and a
                        solution that grows with you.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">
                      Why the name 'Limonexa'?
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Limonexa represents **Freshness (Limon)** and **Nexus
                      (Connection)**. We believe in bringing fresh perspective
                      to the digital connection points between a business and
                      its customers. We are here to prove that timing and
                      quality matter more than just history.
                    </p>
                  </div>

                  <div className="p-6 bg-[#003366] rounded-2xl text-center">
                    <p className="text-white italic font-medium leading-relaxed">
                      "Success is not about how long you've been in the market;
                      it's about how much value you bring to the table today."
                    </p>
                    <p className="text-blue-300 text-xs mt-4 font-bold uppercase tracking-widest">
                      — Team Limonexa
                    </p>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 bg-gray-50 border-t rounded-b-[2rem] text-center">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-blue-700 font-bold hover:underline"
                  >
                    Close Story
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
