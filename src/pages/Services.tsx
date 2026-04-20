import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Monitor,
  Smartphone,
  Cloud,
  ShieldCheck,
  Cpu,
  Code2,
  X,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Application Development",
    description:
      "Developing high-performance, scalable web architectures using React, Next.js, and robust backend ecosystems.",
    details:
      "We build fast, SEO-friendly, and highly secure web applications tailored to your business. From E-commerce platforms to complex Dashboard systems, we ensure a premium user experience.",
    features: [
      "Custom UI/UX",
      "SEO Optimization",
      "PWA Ready",
      "API Integration",
    ],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Crafting seamless iOS and Android experiences with React Native and Flutter for high-user engagement.",
    details:
      "Your vision turned into a powerful mobile app. We specialize in cross-platform development that looks and feels native, ensuring smooth performance on every device.",
    features: [
      "iOS & Android",
      "Push Notifications",
      "Offline Support",
      "App Store Deployment",
    ],
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    description:
      "Streamlining deployments with AWS/Azure integration, CI/CD pipelines, and serverless architecture.",
    details:
      "Scale your business with confidence. We provide managed cloud services and automated deployment pipelines to keep your software running 24/7 with zero downtime.",
    features: [
      "AWS/Azure Setup",
      "CI/CD Automation",
      "Serverless Architecture",
      "24/7 Monitoring",
    ],
    gradient: "from-purple-600 to-pink-500",
  },
  {
    icon: ShieldCheck,
    title: "SEO Optimization & Security",
    description:
      "Implementing end-to-end encryption, secure API integrations, and rigorous vulnerability assessments.",
    details:
      "Protect your data and rank higher. We combine advanced cybersecurity protocols with data-driven SEO strategies to keep your brand safe and visible online.",
    features: [
      "SSL & Data Privacy",
      "Performance Tuning",
      "Keyword Strategy",
      "Secure Audits",
    ],
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    icon: Cpu,
    title: "UI/UX Design & Prototyping",
    description:
      "Creating user-centric designs and interactive prototypes that turn visitors into loyal customers.",
    details:
      "Design that speaks for your brand. We focus on psychological user behavior to create interfaces that are not just beautiful, but also highly functional and intuitive.",
    features: [
      "User Research",
      "Wireframing",
      "High-Fidelity UI",
      "Interactive Prototypes",
    ],
    gradient: "from-orange-600 to-amber-500",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "End-to-end product development from MVP to full-scale SaaS platforms tailored to your business model.",
    details:
      "Unique problems require unique software. We develop bespoke tools and enterprise software designed specifically to solve your internal business challenges.",
    features: [
      "Scalable Architecture",
      "Legacy Migration",
      "Custom CRM/ERP",
      "Future-proof Tech",
    ],
    gradient: "from-red-600 to-rose-500",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  const handleWhatsAppRedirect = (title: string) => {
    const phoneNumber = "918939720567"; // Apna WhatsApp number yahan dale (with country code)
    const message = encodeURIComponent(
      `Hi Limonexa, I am interested in your "${title}" service. Could you please provide more details?`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>
          Best Web Development & mobile app development & software
          servicesCompany in Chennai | Limonexa Solutions
        </title>

        <meta
          name="description"
          content="Limonexa Solutions is a top web development company in Chennai offering React, Node.js, UI/UX design, and mobile app development services."
        />

        <meta
          name="keywords"
          content="web development Chennai, software company Chennai, MERN developer Chennai, website design Chennai, mobile app development Chennai"
        />
      </Helmet>
      <h2 className="hidden">
        Our Web Development & Software Services in Chennai
      </h2>

      <p className="hidden">
        We provide complete digital solutions including web development, mobile
        apps, and UI/UX design for businesses in Chennai.
      </p>
      <div className="hidden">
        <h3>Web Development Services in Chennai</h3>
        <p>We build fast and SEO-friendly websites...</p>

        <h3>Mobile App Development in Chennai</h3>
        <p>We create Android and iOS apps...</p>

        <h3>UI/UX Design Services in Chennai</h3>
        <p>We design modern user experiences...</p>

        <h3>Custom Software Development</h3>
        <p>We develop scalable MERN stack apps...</p>
      </div>
      <section
        id="services"
        className="py-10 bg-[#fcfcfd] relative overflow-hidden"
      >
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[120px] -z-10 opacity-60" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              What We Do Best
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                Software Solutions
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedService(service)}
                  className="group relative cursor-pointer"
                >
                  <div className="h-full p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl overflow-hidden">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 shadow-lg text-white`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider group-hover:gap-4 transition-all">
                      View Details <Icon className="w-4 h-4" />
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                <div
                  className={`h-32 bg-gradient-to-r ${selectedService.gradient} flex items-end p-8`}
                >
                  <h3 className="text-2xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                    {selectedService.details}
                  </p>

                  <div className="space-y-3 mb-8">
                    {selectedService.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      handleWhatsAppRedirect(selectedService.title)
                    }
                    className={`w-full py-4 rounded-2xl bg-gradient-to-r ${selectedService.gradient} text-white font-bold shadow-lg hover:brightness-110 active:scale-[0.98] transition-all`}
                  >
                    Get This Service
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
