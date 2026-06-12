import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Services", href: "services" },
    { id: 3, name: "About", href: "about" },
    { id: 4, name: "Projects", href: "projects" },
    { id: 5, name: "Reviews", href: "reviews" },
    { id: 6, name: "Legal Docs", href: "legal-docs" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="pt-4 px-4">
        <div className="max-w-7xl mx-auto p-4 bg-white shadow-lg border-b-4 border-b-primary rounded-t-md rounded-b-xl flex justify-between">
          {/* Nav Content starts here */}
          {/* First Section - Logo Part */}
          <div className="w-20 relative">
            <img
              src="/src/assets/logo-500.png"
              alt="Brand Logo"
              className="h-full w-full object-contain object-left"
            />
          </div>
          {/* Second Part - Desktop Navigation */}
          <div className="flex gap-6">
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              {/* Desktop Register Button */}
              <button className="bg-primary hover:bg-black text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 active:scale-95">
                Book Now
              </button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition duration-300"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div
                  className={`w-6 h-6 flex flex-col justify-center ${isMobileMenuOpen ? "burger-active" : ""}`}
                >
                  <div
                    className={`burger-line w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                  ></div>
                  <div
                    className={`burger-line w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                  ></div>
                  <div
                    className={`burger-line w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  ></div>
                </div>
              </button>
            </div>
          </div>

          {/* Nav Content ends here */}
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="max-w-7xl mx-auto px-4 lg:hidden">
        <div
          className={`transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="p-2 space-y-1 sm:px-3 bg-white shadow-inner rounded-xl">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={"contact"}
              className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-3 rounded-md text-base font-medium transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
