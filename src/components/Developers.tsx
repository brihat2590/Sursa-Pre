'use client';

import React from 'react';
import { Users, CheckCircle, Rocket, Code, Shield, Zap, Building } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => (
  <div 
    className="group relative bg-[#1a1638]/60 backdrop-blur-lg border border-[#ad9665]/20 rounded-2xl p-6 hover:bg-[#1a1638]/80 transition-all duration-300 hover:border-[#ad9665]/40 hover:shadow-xl"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start space-x-5">
      <div className="flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#ad9665] to-[#d4b970] p-3 rounded-full">
        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  delay?: number;
}

const StatCard = ({ icon: Icon, title, subtitle, color, delay = 0 }: StatCardProps) => (
  <div 
    className={`group relative bg-gradient-to-br ${color} rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl border border-[#ad9665]/20`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex flex-col items-center text-center">
      <Icon className="w-9 h-9 mb-3 text-white group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{title}</h3>
      <p className="text-white/80 text-xs font-medium uppercase tracking-wide">{subtitle}</p>
    </div>
  </div>
);

export default function DeveloperLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0b1e] to-[#1a1638] overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-80 h-80 bg-[#ad9665]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/5 right-1/5 w-96 h-96 bg-[#d4b970]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="w-full max-w-7xl">
          {/* Header */}
          <div className="text-center mb-20 animate-slide-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-5 leading-tight">
              <span className="text-white">Built for </span>
              <span className="bg-gradient-to-r from-[#ad9665] to-[#d4b970] bg-clip-text text-transparent">Developers</span><br />
              <span className="text-gray-300 text-3xl md:text-4xl font-medium">by Developers</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Column - Features */}
            <div className="lg:col-span-1 space-y-4">
              <FeatureCard
                icon={Users}
                title="Technical Founders"
                description={
                  <>
                    We're experienced technical founders who've lived through the pain of managing distributed development teams.
                  </>
                }
                delay={100}
              />
              <FeatureCard
                icon={CheckCircle}
                title="Problem-First Approach"
                description={
                  <>
                    We built SursaKit because we had to. Every feature solves a real-world problem from remote collaboration.
                  </>
                }
                delay={200}
              />
              <FeatureCard
                icon={Rocket}
                title="Ready for Production"
                description={
                  <>
                    SursaKit isn't an MVP. It's production-ready for critical sectors like FinTech, government, and healthcare.
                  </>
                }
                delay={300}
              />
            </div>

            {/* Right Column - Stats */}
            <div className="lg:col-span-1 grid grid-cols-2 gap-4 items-center">
              <StatCard
                icon={Code}
                title="Full IDE"
                subtitle="Browser-Based"
                color="from-blue-900/80 to-blue-700/80"
                delay={400}
              />
              <StatCard
                icon={Shield}
                title="100%"
                subtitle="Secure"
                color="from-yellow-900/80 to-yellow-700/80"
                delay={500}
              />
              <StatCard
                icon={Zap}
                title="AI"
                subtitle="Powered"
                color="from-purple-900/80 to-purple-700/80"
                delay={600}
              />
              <StatCard
                icon={Building}
                title="Enterprise"
                subtitle="Ready"
                color="from-indigo-900/80 to-indigo-700/80"
                delay={700}
              />
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
        .animate-slide-in {
          animation: slideIn 1s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}