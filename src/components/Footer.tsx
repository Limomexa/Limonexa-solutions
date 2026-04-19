import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Phone, X, ShieldCheck, FileText } from "lucide-react";
import Logo1 from "../assets/Logo-with-bg.jpeg";

export default function Footer() {
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  const services = [
    { name: "Web Systems", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#001529] to-[#1a0b2e]">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5">
          {/* Logo Section - Text removed, only image with text integrated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <img
                src={Logo1}
                alt="Limonexa Logo"
                className="h-34 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm font-medium">
              Architecting the digital future with precision. We deliver
              enterprise-grade software solutions that scale with your business
              vision.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <div className="lg:ml-10">
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm font-semibold transition-all flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-blue-500 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">
              Our Expertise
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-purple-400 text-sm font-semibold transition-all flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[2px] bg-purple-500 transition-all" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-[0.2em]">
              Connect With Us
            </h4>
            <div className="space-y-5">
              <a
                href="mailto:limonexa.solutions@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-all shadow-inner">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">
                    Email
                  </p>
                  <p className="text-sm text-gray-300 font-medium">
                    limonexa.solutions@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+918939720567"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-all shadow-inner">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">
                    Call Now
                  </p>
                  <p className="text-sm text-gray-300 font-medium">
                    +91 89397 20567
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">
                    HQ Location
                  </p>
                  <p className="text-sm text-gray-300 font-medium">
                    Chennai, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Split Layout: Left Copyright, Right Links */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-xs font-bold tracking-widest"
          >
            © 2026 LIMONEXA SOLUTIONS. ALL RIGHTS RESERVED.
          </motion.p>

          <div className="flex items-center gap-8">
            <button
              onClick={() => setModalType("privacy")}
              className="text-gray-500 hover:text-white text-xs font-bold transition-colors tracking-widest"
            >
              PRIVACY POLICY
            </button>
            <button
              onClick={() => setModalType("terms")}
              className="text-gray-500 hover:text-white text-xs font-bold transition-colors tracking-widest"
            >
              TERMS OF SERVICE
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modals with Detailed Content */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalType(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col"
            >
              <div className="p-6 border-b flex justify-between items-center bg-gray-50">
                <div className="flex items-center gap-3">
                  {modalType === "privacy" ? (
                    <ShieldCheck className="text-blue-600" />
                  ) : (
                    <FileText className="text-purple-600" />
                  )}
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">
                    {modalType === "privacy"
                      ? "Privacy & Data Policy"
                      : "Service Terms & Conditions"}
                  </h3>
                </div>
                <button
                  onClick={() => setModalType(null)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 overflow-y-auto custom-scrollbar space-y-8 text-gray-600 leading-relaxed text-sm">
                {modalType === "privacy" ? (
                  <>
                    <section className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base underline decoration-blue-500 underline-offset-4">
                        1. Commitment to Privacy
                      </h4>
                      <p>
                        At Limonexa Solutions, we believe that data privacy is a
                        fundamental right. We are committed to protecting the
                        personal information of our clients and website visitors
                        through rigorous security standards and transparent data
                        handling practices.
                      </p>
                    </section>
                    <section className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base underline decoration-blue-500 underline-offset-4">
                        2. Information We Collect
                      </h4>
                      <p>
                        We only collect data that is essential for providing our
                        software services. This includes:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Personal Identifiers:</strong> Name, Email,
                          and Phone provided during consultations.
                        </li>
                        <li>
                          <strong>Technical Data:</strong> IP addresses and
                          browser types for security monitoring.
                        </li>
                        <li>
                          <strong>Project Data:</strong> Information shared
                          during project discovery and development phases.
                        </li>
                      </ul>
                    </section>
                    <section className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base underline decoration-blue-500 underline-offset-4">
                        3. How We Use Your Data
                      </h4>
                      <p>
                        Your information is never sold to third-party
                        advertisers. We use it solely for:
                      </p>
                      <p>
                        - Executing software development contracts.
                        <br />- Improving site performance via analytics.
                        <br />- Communicating critical project updates or legal
                        notices.
                      </p>
                    </section>
                    <section className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base underline decoration-blue-500 underline-offset-4">
                        4. Data Retention & Security
                      </h4>
                      <p>
                        Limonexa employs AES-256 encryption for data at rest. We
                        retain your information only as long as necessary to
                        fulfill the purposes outlined in this policy or as
                        required by Indian law.
                      </p>
                    </section>
                  </>
                ) : (
                  <>
                    <section className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base underline decoration-purple-500 underline-offset-4">
                        1. Acceptance of Terms
                      </h4>
                      <p>
                        By engaging with Limonexa Solutions, you agree to be
                        bound by these Terms of Service. These terms constitute
                        a legally binding agreement between the client and
                        Limonexa.
                      </p>
                    </section>
                    <section className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base underline decoration-purple-500 underline-offset-4">
                        2. Scope of Services
                      </h4>
                      <p>
                        Limonexa provides bespoke software, web, and mobile
                        application development. The specific deliverables,
                        timelines, and milestones are defined in the Project
                        Service Level Agreement (SLA) signed before project
                        commencement.
                      </p>
                    </section>
                    <section className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base underline decoration-purple-500 underline-offset-4">
                        3. Intellectual Property Rights
                      </h4>
                      <p>
                        All custom code developed specifically for a client
                        becomes the property of said client upon final payment.
                        Limonexa retains the right to use its proprietary
                        frameworks and base libraries used across multiple
                        projects.
                      </p>
                    </section>
                    <section className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base underline decoration-purple-500 underline-offset-4">
                        4. Payment & Cancellation
                      </h4>
                      <p>
                        Payments are structured based on project milestones. In
                        the event of project cancellation by the client,
                        Limonexa is entitled to compensation for all man-hours
                        and resources utilized up to the date of cancellation.
                      </p>
                    </section>
                    <section className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base underline decoration-purple-500 underline-offset-4">
                        5. Limitation of Liability
                      </h4>
                      <p>
                        Limonexa is not liable for business interruptions caused
                        by third-party hosting providers, domain registrars, or
                        external API failures.
                      </p>
                    </section>
                  </>
                )}
                <div className="p-6 bg-gray-50 border-l-4 border-blue-600 rounded-r-2xl">
                  <p className="text-xs text-gray-500 italic uppercase font-bold tracking-widest">
                    Copyright © 2026 Limonexa Solutions Legal Department
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
