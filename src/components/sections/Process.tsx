import { motion } from "motion/react";
import { FileSearch, Palette, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "Understanding your needs and defining project scope",
    icon: FileSearch,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Development",
    description: "Building robust and scalable solutions",
    icon: Code,
    gradient: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    title: "Testing",
    description: "Ensuring quality and performance excellence",
    icon: TestTube,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    number: "05",
    title: "Deployment",
    description: "Launching your product to the world",
    icon: Rocket,
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A streamlined approach to deliver exceptional results
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200" />

            {/* Animated Progress Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute top-24 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"
            />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                      {/* Icon Circle */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        className="relative mx-auto w-20 h-20 mb-6"
                      >
                        {/* Connecting dot on line */}
                        <div className="absolute -top-[4.5rem] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-500 z-10" />

                        {/* Icon background */}
                        <div
                          className={`w-full h-full rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>

                      {/* Number */}
                      <div
                        className={`text-4xl bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-30 mb-2`}
                      >
                        {step.number}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl mb-3 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-900 group-hover:to-blue-900 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile/Tablet (Vertical) */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex gap-6"
              >
                {/* Left - Icon and Line */}
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      className={`w-1 flex-1 mt-4 bg-gradient-to-b ${step.gradient} opacity-30`}
                    />
                  )}
                </div>

                {/* Right - Content Card */}
                <div className="flex-1 pb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div
                      className={`text-3xl bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-30 mb-2`}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-2xl mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
