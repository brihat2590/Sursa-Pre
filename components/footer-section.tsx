import { Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="text-gray-300 py-8 sm:py-16 md:py-12 px-4 sm:px-8 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-10 md:gap-8 lg:flex-row lg:items-center justify-evenly">
        {/* SursaKit info */}
         <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-3">
            <span className="font-semibold text-white text-lg sm:text-xl md:text-lg">SursaKit</span>
          </div>
          <p className="text-sm sm:text-base md:text-sm leading-relaxed max-w-xs sm:max-w-sm md:max-w-xs mx-auto lg:mx-0">
            AI-powered cloud editor for the modern developer. Transform your coding experience with intelligent assistance.
          </p>
        </div> 

       
        {/* <div>
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
        </div> */}

        {/* Nepal */}
        {/* <div>
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
        </div>  */}

        {/* Stay Updated */}
        <div className="text-center lg:text-left">
          <h4 className="text-white font-semibold mb-3 text-base sm:text-lg md:text-base">STAY UPDATED</h4>
          <p className="text-sm sm:text-base md:text-sm leading-relaxed max-w-xs sm:max-w-sm md:max-w-xs mb-2 mx-auto lg:mx-0">
            If you have any queries, you can mail us at the following mail id.
          </p>
          <a
            href="mailto:hello@sursakit.com"
            className="flex items-center gap-2 hover:underline cursor-pointer justify-center lg:justify-start text-sm sm:text-base md:text-sm"
          >
            <Mail className="inline-block h-5 w-5" />
            hello@sursakit.com
          </a>
        </div>
      </div>

      <hr className="border-gray-700 my-6 sm:my-10 md:my-8" />

      <div className="text-center text-gray-500 text-sm sm:text-base md:text-sm px-4">
        © 2025 Sursakit. All rights reserved.<br />
      
      </div>
    </footer>
  );
}
