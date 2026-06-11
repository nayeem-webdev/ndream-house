import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const countries = [
    {
      name: "Australia",
      flag: "🇦🇺",
      image: "https://i.ibb.co.com/Kx9t58TP/002-flag.png",
    },
    {
      name: "USA",
      flag: "🇺🇸",
      image: "https://i.ibb.co.com/23Kxjs6L/016-usa-flag.png",
    },
    {
      name: "Malaysia",
      flag: "🇲🇾",
      image: "https://i.ibb.co.com/JWk6pDCg/004-flag-1.png",
    },
    {
      name: "UK",
      flag: "🇬🇧",
      image: "https://i.ibb.co.com/mCrmkVmx/003-united-kingdom.png",
    },
    {
      name: "Scotland",
      flag: "🇬🇧",
      image: "https://i.ibb.co.com/Hf0b0RSf/012-scotland.png",
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      image: "https://i.ibb.co.com/8gL99WKj/005-canada.png",
    },
    {
      name: "Europe",
      flag: "🇪🇺",
      image: "https://i.ibb.co.com/5W4kS4Jr/006-european-union.png",
    },
    {
      name: "Finland",
      flag: "🇫🇮",
      image: "https://i.ibb.co.com/LhJjjjsT/017-finland.png",
    },
    {
      name: "Sweden",
      flag: "🇸🇪",
      image: "https://i.ibb.co.com/jPLYB0Vb/007-sweden.png",
    },
    {
      name: "Denmark",
      flag: "🇩🇰",
      image: "https://i.ibb.co.com/73s1rLx/008-denmark.png",
    },
    {
      name: "Netherlands",
      flag: "🇳🇱",
      image: "https://i.ibb.co.com/j9zd7BZf/011-netherlands.png",
    },
    {
      name: "Hungary",
      flag: "🇭🇺",
      image: "https://i.ibb.co.com/21sFLJsj/010-hungary.png",
    },
    {
      name: "Belgium",
      flag: "🇧🇪",
      image: "https://i.ibb.co.com/DfrRTRKG/009-belgium.png",
    },
    {
      name: "Belarus",
      flag: "🇧🇾",
      image: "https://i.ibb.co.com/Tx68VyrW/015-flag-3.png",
    },
    {
      name: "China",
      flag: "🇨🇳",
      image: "https://i.ibb.co.com/rK4fShDQ/001-china.png",
    },
    {
      name: "Thailand",
      flag: "🇹🇭",
      image: "https://i.ibb.co.com/97F0RZK/014-flag-2.png",
    },
    {
      name: "Singapore",
      flag: "🇸🇬",
      image: "https://i.ibb.co.com/r2YCvgNv/013-singapore.png",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "#" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "#" },
    { name: "Contact", href: "/contact" },
  ];
  const services = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "#" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "#" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, label: "Facebook", href: "https://facebook.com" },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: "https://wa.me/yournumber",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://instagram.com",
    },
    { icon: <FaYoutube />, label: "YouTube", href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-[#0f1729] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="w-44">
              <img
                src="/assets/Logo-White.png"
                alt="Brand Logo"
                className="w-full object-contain"
              />
              <div className="w-20 h-1 bg-secondary mt-3 rounded-full"></div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Cubic Education Chittagong is one of most established and trusted
              student consultancy and IELTS preparation centers in Chittagong.
              Proudly serving students since 2012.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-secondary  transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-all duration-300 flex items-center group"
                  >
                    {/* Text slides right on hover without getting cut off */}
                    <span className="transform transition-transform duration-300 group-hover:translate-x-3">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-all duration-300 flex items-center group"
                  >
                    {/* Text slides right on hover without getting cut off */}
                    <span className="transform transition-transform duration-300 group-hover:translate-x-3">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-secondary text-xl mt-1" />
                <div>
                  <p className="text-sm text-gray-300">
                    1512, Lane #1, Shuborna R/A, Goalpahar More, O R Nizam Road,
                    Chattogram, Bangladesh.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="text-secondary text-lg mt-1" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+8801327299676"
                    className="text-sm text-gray-300 hover:text-secondary transition"
                  >
                    +880 1327-299676
                  </a>
                  <a
                    href="tel:+8801701048078"
                    className="text-sm text-gray-300 hover:text-secondary transition"
                  >
                    +880 1701-048078
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-secondary text-lg mt-1" />
                <a
                  href="mailto:cubiceducationctg@gmail.com"
                  className="text-sm text-gray-300 hover:text-secondary transition truncate"
                >
                  cubiceducationctg@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Countries Section */}
        <div className="mt-16">
          <h3 className="text-lg font-bold text-center mb-6 uppercase tracking-wider text-white">
            Study Destinations
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {countries.map((country, index) => (
              <a
                key={index}
                href="#"
                className="p-2 bg-gray-800/50 border border-gray-700/50 rounded-md hover:border-primary/80 hover:bg-primary/30 transition-all duration-300 flex items-center gap-3 group"
              >
                {/* Rectangular Flag - Centered */}
                <div className="w-7 h-4 rounded-xs overflow-hidden flex items-center justify-center bg-gray-700 shrink-0">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<span class="text-[10px] leading-none">${country.flag}</span>`;
                    }}
                  />
                </div>

                {/* Country Name - Centered */}
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors leading-none">
                  {country.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Cube Education. All rights
            reserved.
          </p>
          <p className="text-gray-500">
            Designed with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/nayeem-webdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary font-medium transition"
            >
              nayeem-webdev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
