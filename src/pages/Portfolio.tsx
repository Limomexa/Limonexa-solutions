import { motion } from "motion/react";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "N4 Sports Infra",
    category: "Architecture & Construction",
    description:
      "Premium turf construction and sports infrastructure management platform.",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    gradient: "from-emerald-600 to-teal-500",
    link: "https://n4-sports-infra-3t8q.vercel.app/",
  },
  {
    id: 2,
    title: "Media Entirety",
    category: "Digital Marketing Agency",
    description:
      "High-converting brand identity and strategic digital marketing ecosystem.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    gradient: "from-blue-600 to-indigo-600",
    link: "https://media-entirety-ovsx.vercel.app/",
  },
  {
    id: 3,
    title: "Insure Club",
    category: "Fintech Solution",
    description:
      "Revolutionizing insurance accessibility through a simplified digital gateway.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    gradient: "from-purple-600 to-pink-600",
    link: "https://insureclub.site",
  },
  {
    id: 4,
    title: "WhatsJet AI",
    category: "Automation SaaS",
    description:
      "Meta API integration for automated lead generation and smart communication.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    gradient: "from-orange-600 to-red-600",
    link: "https://sidcom.site",
  },
  {
    id: 5,
    title: "Loom & Story",
    category: "E-Commerce & Fashion",
    description:
      "Premium clothing brand boutique with a seamless shopping experience.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    gradient: "from-rose-500 to-amber-600",
    link: "https://loomandstory.com",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-10 bg-[#fcfcfd] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Proven Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
              Featured Work
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Strategic digital solutions delivered to industry leaders.
          </p>
        </motion.div>

        {/* Updated Grid for 5 items: Will automatically wrap correctly */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-500">
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gray-900/40 md:bg-gray-900/20 md:group-hover:bg-gray-900/60 transition-colors duration-500" />
                </div>

                <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent">
                  <div className="space-y-4 transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
                    <span
                      className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-to-r ${project.gradient}`}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.link, "_blank")}
                      className="mt-4 px-6 cursor-pointer py-2.5 rounded-xl bg-white text-gray-900 text-xs font-bold uppercase tracking-wider flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 shadow-xl"
                    >
                      Visit Project <Globe className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                <div
                  className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${project.gradient} opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <button
            onClick={() => (window.location.href = "#contact")}
            className="group px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-xl shadow-gray-200/50 flex items-center gap-3 mx-auto"
          >
            Start Your Project With Us
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
