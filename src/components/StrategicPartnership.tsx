import { HeartHandshake } from "lucide-react";

export default function Partnership() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0b1e] to-[#1a1638] text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <div className="flex flex-col items-center text-center w-full max-w-6xl">
        {/* Icon with animation */}
        <div className="bg-gradient-to-r from-[#ad9665] to-[#d4b970] p-5 rounded-2xl mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <HeartHandshake className="w-12 h-12 text-white" />
        </div>

        {/* Title & Description */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#ad9665] to-[#d4b970] animate-fade-in">
          Strategic Partnership Opportunity
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl leading-relaxed animate-fade-in-up">
          We're seeking strategic partners to accelerate our go-to-market strategy. Join us in revolutionizing secure development for enterprise teams.
        </p>

        {/* Offer + Need Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-left">
          {/* What We Offer */}
          <div className="bg-[#1a1638]/50 p-8 rounded-xl shadow-xl border border-[#ad9665]/20 hover:border-[#ad9665]/40 transition-all duration-300">
            <h3 className="font-semibold text-2xl mb-6 text-[#ad9665]">
              What We Offer
            </h3>
            <ul className="space-y-5 text-gray-200">
              <li className="flex items-start group">
                <span className="w-3 h-3 rounded-full bg-[#ad9665] mt-2 mr-4 group-hover:scale-125 transition-transform duration-200" />
                <span className="group-hover:text-white transition-colors">Proven, production-ready platform</span>
              </li>
              <li className="flex items-start group">
                <span className="w-3 h-3 rounded-full bg-[#ad9665] mt-2 mr-4 group-hover:scale-125 transition-transform duration-200" />
                <span className="group-hover:text-white transition-colors">Technical expertise and support</span>
              </li>
              <li className="flex items-start group">
                <span className="w-3 h-3 rounded-full bg-[#ad9665] mt-2 mr-4 group-hover:scale-125 transition-transform duration-200" />
                <span className="group-hover:text-white transition-colors">Flexible partnership terms</span>
              </li>
            </ul>
          </div>

          {/* What We Need */}
          <div className="bg-[#1a1638]/50 p-8 rounded-xl shadow-xl border border-[#ad9665]/20 hover:border-[#ad9665]/40 transition-all duration-300">
            <h3 className="font-semibold text-2xl mb-6 text-[#ad9665]">
              What We Need
            </h3>
            <ul className="space-y-5 text-gray-200">
              <li className="flex items-start group">
                <span className="w-3 h-3 rounded-full bg-[#ad9665] mt-2 mr-4 group-hover:scale-125 transition-transform duration-200" />
                <span className="group-hover:text-white transition-colors">Go-to-market strategy</span>
              </li>
              <li className="flex items-start group">
                <span className="w-3 h-3 rounded-full bg-[#ad9665] mt-2 mr-4 group-hover:scale-125 transition-transform duration-200" />
                <span className="group-hover:text-white transition-colors">Customer onboarding expertise</span>
              </li>
              <li className="flex items-start group">
                <span className="w-3 h-3 rounded-full bg-[#ad9665] mt-2 mr-4 group-hover:scale-125 transition-transform duration-200" />
                <span className="group-hover:text-white transition-colors">Business development leadership</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-wrap gap-6 justify-center">
          <button className="bg-gradient-to-r from-[#ad9665] to-[#d4b970] px-8 py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Explore Partnership
          </button>
          <button className="border-2 border-[#ad9665] text-[#ad9665] px-8 py-4 rounded-lg font-semibold hover:bg-[#ad9665] hover:text-white hover:shadow-xl transition-all duration-300">
            Schedule Call
          </button>
        </div>
      </div>

      {/* Custom Tailwind Animations */}
      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}