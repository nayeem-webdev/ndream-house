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
    <footer className="bg-accent text-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="w-36 px-6 py-4 bg-white rounded-lg">
              <img
                src="/src/assets/Logo-250.png"
                alt="Brand Logo"
                className="w-full object-contain"
              />
            </div>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-zinc-800 leading-relaxed text-sm">
              We create functional interiors that reflect your unique style and
              enhance living. Our design approach combines creativity and
              comfort to transform every space.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/80 hover:text-primary  transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-text">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-zinc-800 hover:text-primary transition-all duration-300 flex items-center group"
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
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-text">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-zinc-800 hover:text-primary transition-all duration-300 flex items-center group"
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
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-text">
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-primary w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-zinc-800">
                    5042, Stadium Market (5th Floor), Nur Ahmed Road,
                    Kazirdewri, Chattogram, Bangladesh.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="text-primary w-5 h-5 mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+8801822334481"
                    className="text-sm text-zinc-800 hover:text-primary transition"
                  >
                    +880 1822-334481
                  </a>
                  <a
                    href="tel:+8800174457797
"
                    className="text-sm text-zinc-800 hover:text-primary transition"
                  >
                    +880 0174-457797
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-primary w-5 h-5 mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:ndreamhouseconstruction@gmail.com"
                    className="text-sm text-zinc-800 hover:text-primary transition truncate"
                  >
                    ndreamhouseconstruction@gmail.com
                  </a>
                  <a
                    href="mailto:ndreamhouseinterior@gmail.com"
                    className="text-sm text-zinc-800 hover:text-primary transition truncate"
                  >
                    ndreamhouseinterior@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-zinc-800">
            &copy; {new Date().getFullYear()} N Dream House. All rights
            reserved.
          </p>
          <p className="text-zinc-800">
            Designed with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/nayeem-webdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary font-medium transition"
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
