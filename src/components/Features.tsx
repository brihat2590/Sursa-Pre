"use client"



import { DownFeatures } from "./ui/downfeatures"
import { Sparkles } from "lucide-react";

export default function FeaturesSectionDemo() {
  

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gray-900" />
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" 
        style={{ backgroundColor: "rgba(173, 150, 101, 0.1)" }} 
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" 
        style={{ backgroundColor: "rgba(173, 150, 101, 0.1)" }} 
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 animate-fade-in"
            style={{
              backgroundColor: "rgba(173, 150, 101, 0.1)",
              borderColor: "rgba(173, 150, 101, 0.2)",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#ad9665" }} />
            <span className="text-sm font-medium" style={{ color: "#ad9665" }}>
              Powered by AI
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Code Smarter with{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #ad9665, #ad9665)" }}
            >
              SursaKit
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Experience the future of development with our AI-powered cloud IDE. Write, debug, and deploy code faster
            than ever before.
          </p>
        </div>

        {/* Features Grid */}
        {/* You can add your feature cards here */}

        {/* Bottom CTA Section */}
        <DownFeatures />
      </div>
    </section>
  )
}
