
import { HeartHandshake } from "lucide-react"; // You can replace this with an inline SVG if needed

export default function Partnership() {
  return (
    <div className="min-h-screen bg-[#0d0b1e] text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="flex flex-col items-center text-center w-full max-w-6xl">
        {/* Icon */}
        <div className="bg-[#ad9665] p-4 rounded-xl mb-6">
          <HeartHandshake className="w-10 h-10 text-white" />
        </div>

        {/* Title & Description */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#ad9665]">
          Strategic Partnership Opportunity
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl">
          We're seeking strategic partners to accelerate our go-to-market
          strategy. Join us in revolutionizing secure development for
          enterprise teams.
        </p>

        {/* Offer + Need Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 text-left ">
          {/* What We Offer */}
          <div>
            <h3 className="font-semibold text-2xl mb-4 text-[#ad9665]">
              What We Offer
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ad9665] mt-2 mr-3" />
                Proven, production-ready platform
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ad9665] mt-2 mr-3" />
                Technical expertise and support
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ad9665] mt-2 mr-3" />
                Flexible partnership terms
              </li>
            </ul>
          </div>

          {/* What We Need */}
          <div>
            <h3 className="font-semibold text-2xl mb-4 text-[#ad9665]">
              What We Need
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ad9665] mt-2 mr-3" />
                Go-to-market strategy
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ad9665] mt-2 mr-3" />
                Customer onboarding expertise
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ad9665] mt-2 mr-3" />
                Business development leadership
              </li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-14 flex flex-wrap gap-6 justify-center">
          <button className="bg-[#ad9665] px-7 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition">
            Explore Partnership
          </button>
          <button className="border border-[#ad9665] text-[#ad9665] px-7 py-3 rounded-lg font-semibold hover:bg-[#ad9665] hover:text-white transition">
            Schedule Call
          </button>
        </div>
      </div>
    </div>
  );
}
