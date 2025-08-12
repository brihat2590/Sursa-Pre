import { Phone } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className=" text-gray-300 py-12 px-6 cursor-pointer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* SursaKit info */}
        <div>
          <div className="flex items-center mb-3">
            
            <span className="ml-2 font-semibold text-white text-lg">SursaKit</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            AI-powered cloud editor for the modern developer. Transform your coding experience with intelligent assistance.
          </p>
        </div>

        {/* United States */}
        <div>
          <h4 className="text-white font-semibold mb-3">UNITED STATES</h4>
          <address className="not-italic text-sm leading-relaxed space-y-1">
            <p>Sursa LLC</p>
            <p>777 Ashington Dr</p>
            <p>Middletown, DE 19709</p>
            <a href="tel:+1 (302) 464-6096" className="flex items-center gap-2">
              <Phone className="inline-block h-4 w-4 text-yellow-400" />
              +1 (302) 464-6096
            </a>
          </address>
        </div>

        {/* Nepal */}
        <div>
          <h4 className="text-white font-semibold mb-3">NEPAL</h4>
          <address className="not-italic text-sm leading-relaxed space-y-1">
            <p>Sursa Tech Pvt. Ltd.</p>
            <p>Baluwatar, Kathmandu – 04</p>
            <p>Bagmati, Nepal, 44600</p>
            <a href="tel:+977 (01) 4543720" className="flex items-center gap-2">
              <Phone className="inline-block h-4 w-4 text-yellow-400" />
              +977-(01)-4543720
            </a>
          </address>
        </div>

        {/* Stay Updated */}
        <div>
          <h4 className="text-white font-semibold mb-3">STAY UPDATED</h4>
          <p className="text-sm leading-relaxed max-w-xs mb-2">
            If you have any queries, you can mail us at the following mail id.
          </p>
          <a
            href="mailto:info@sursatech.com"
            className="flex items-center gap-2  hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0l-4 4-4-4" />
            </svg>
            info@sursatech.com
          </a>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      <div className="text-center text-gray-500 text-sm">
        © 2025 Sursakit. All rights reserved.<br />
      
      </div>
    </footer>
  );
}
