export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand section */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div>
                  <img src="https://sursakit.com/logo.svg" className="h-8 w-10" />
                </div>
                <span
                  className="ml-3 text-xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(to right, #ad9665, #ad9665)",
                  }}
                >
                  SursaKit
                </span>
              </div>
              <p className="text-sm max-w-xs">
                AI-powered cloud editor for the modern developer. Transform your coding experience with intelligent assistance.
              </p>
            </div>
  
            {/* USA Address */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">United States</h3>
              <address className="not-italic">
                <p className="text-sm">Sursa LLC</p>
                <p className="text-sm mt-2">777 Ashington Dr</p>
                <p className="text-sm">Middletown, DE 19709</p>
                <p className="text-sm mt-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "#ad9665" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+13024646096">+1 (302) 464-6096</a>
                </p>
              </address>
            </div>
  
            {/* Nepal Address */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Nepal</h3>
              <address className="not-italic">
                <p className="text-sm">Sursa Tech Pvt. Ltd.</p>
                <p className="text-sm mt-2">Baluwatar, Kathmandu – 04</p>
                <p className="text-sm">Bagmati, Nepal, 44600</p>
                <p className="text-sm mt-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "#ad9665" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+977-(01)-4543720">+977-(01)-4543720</a>
                </p>
              </address>
            </div>
  
            {/* Contact & Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Stay Updated</h3>
              <p className="text-sm mb-4">
                If you have any queries , you can mail us at the following mail id.
              </p>
              {/* <form className="mt-2" onSubmit={()=>{}}>
                <div className="flex">
                  <input
                    type="email"  
                    placeholder="Your email"
                    disabled={true}
                    className="flex-grow bg-gray-800 border border-gray-700 rounded-l-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1"
                    style={{ borderColor: "#ad9665" }}
                  />
                  <button
                    className="bg-gray-800 text-white font-medium rounded-r-lg py-2 px-4 text-sm"
                    style={{ borderColor: "#ad9665" }}
                  >
                    Subscribe
                  </button>
                </div>
              </form> */}
              <div className="mt-6">
                <a
                  href="mailto:info@sursatech.com"
                  className="text-sm flex items-center hover:text-opacity-80"
                  style={{ color: "#ad9665" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "#ad9665" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@sursatech.com
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright section */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Sursakit. All rights reserved.<br></br>
            Built by technical founders for secure development.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  