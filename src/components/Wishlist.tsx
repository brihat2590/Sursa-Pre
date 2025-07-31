"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Send, Check } from "lucide-react";
import { CherryVortex } from "./ui/CherryVortex";

// Vortex Effect Component

// Main Wishlist Component
export default function Wishlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    role: "",
    people: 1,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Clear errors when user starts typing
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrors({});
    }
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    // Role validation
    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }
    
    // People validation
    if (formData.people < 1) {
      newErrors.people = "Team size must be at least 1";
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", role: "", people: 1 });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="wishlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join Our{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #ad9665, #ad9665)",
              }}
            >
              Early Access
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to transform your development ?<br></br>
            Join the revolution in secure, AI-powered development. 

          </motion.p>
        </div>

        <motion.div
          className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border p-6 sm:p-8 shadow-xl overflow-hidden"
          style={{ borderColor: "rgba(173, 150, 101, 0.3)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Vortex background covering full form */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 -z-10">
            <CherryVortex/>
          </div>

          {submitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex justify-center mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(173,150,101,0.2) 0%, rgba(173,150,101,0.2) 100%)",
                  }}
                >
                  <Check className="w-12 h-12" style={{ color: "#ad9665" }} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300 max-w-md mx-auto">
                We've received your request. We'll notify you when SursaKit is
                ready for you.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 border  py-3 px-4 text-white placeholder-gray-400 focus:outline-none transition-all ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    style={{
                      borderColor: errors.name
                        ? "rgba(255, 0, 0, 0.5)"
                        : "rgba(173,150,101,0.5)",
                      boxShadow: errors.name
                        ? "0 0 0 2px rgba(255, 0, 0, 0.3)"
                        : "0 0 0 2px rgba(173,150,101,0.3)",
                    }}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-2 text-red-400 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 border  py-3 px-4 text-white placeholder-gray-400 focus:outline-none transition-all ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    style={{
                      borderColor: errors.email
                        ? "rgba(255, 0, 0, 0.5)"
                        : "rgba(173,150,101,0.5)",
                      boxShadow: errors.email
                        ? "0 0 0 2px rgba(255, 0, 0, 0.3)"
                        : "0 0 0 2px rgba(173,150,101,0.3)",
                    }}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-red-400 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Role/Designation
                </label>
                <input
                  type="text"
                  id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 border  py-3 px-4 text-white placeholder-gray-400 focus:outline-none transition-all ${
                      errors.role ? "border-red-500" : ""
                    }`}
                    style={{
                      borderColor: errors.role
                        ? "rgba(255, 0, 0, 0.5)"
                        : "rgba(173,150,101,0.5)",
                      boxShadow: errors.role
                        ? "0 0 0 2px rgba(255, 0, 0, 0.3)"
                        : "0 0 0 2px rgba(173,150,101,0.3)",
                    }}
                    placeholder="Software Engineer, Student, Product Manager, etc."
                  />
                  {errors.role && (
                    <p className="mt-2 text-red-400 text-sm">{errors.role}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="people"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Team Size
                  </label>
                  <input
                    type="number"
                    id="people"
                    min={1}
                    name="people"
                    value={formData.people}
                    onChange={handleChange}
                    className={`w-full bg-gray-700/50 border  py-3 px-4 text-white placeholder-gray-400 focus:outline-none transition-all ${
                      errors.people ? "border-red-500" : ""
                    }`}
                    style={{
                      borderColor: errors.people
                        ? "rgba(255, 0, 0, 0.5)"
                        : "rgba(173,150,101,0.5)",
                      boxShadow: errors.people
                        ? "0 0 0 2px rgba(255, 0, 0, 0.3)"
                        : "0 0 0 2px rgba(173,150,101,0.3)",
                    }}
                  />
                  {errors.people && (
                    <p className="mt-2 text-red-400 text-sm">{errors.people}</p>
                  )}
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    className="w-full sm:w-auto text-white font-medium rounded-xl py-3 px-8 flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg"
                    style={{
                      background: "linear-gradient(90deg, #ad9665, #ad9665)",
                      boxShadow: "0 4px 15px rgba(173,150,101,0.4)",
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Request Access</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div
            className="mt-12 text-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>
              We respect your privacy. Your information will only be used to notify
              you about SursaKit updates.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }