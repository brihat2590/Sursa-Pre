'use client';

import { DownFeatures } from "./ui/downfeatures";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const words = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "apps",
  },
  {
    text: "with",
  },
  {
    text: "SursaKit.",
    className: "text-[#ad9665] dark:text-[#ad9665]",
  },
];

export default function FeaturesSectionDemo() {
  return (
    <section id="features" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0d0b1e] to-[#1a1638]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-10 left-1/5 w-80 h-80 rounded-full blur-3xl animate-pulse-slow" 
          style={{ backgroundColor: "rgba(173, 150, 101, 0.15)" }} 
        />
        <div 
          className="absolute bottom-10 right-1/5 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" 
          style={{ backgroundColor: "rgba(173, 150, 101, 0.15)", animationDelay: '2s' }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border bg-[#1a1638]/60 shadow-lg"
            style={{ borderColor: "rgba(173, 150, 101, 0.3)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-5 h-5 text-[#ad9665]" />
            <span className="text-sm font-semibold text-[#ad9665]">
              Powered by AI
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Code Smarter with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ad9665] to-[#d4b970]">
              SursaKit
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of development with our AI-powered cloud IDE. Write, debug, and deploy code faster than ever before.
          </motion.p>
        </div>

        
        

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <DownFeatures />
        </motion.div>
      </div>

      <style >{`
        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}