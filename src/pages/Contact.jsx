import { useState } from "react";
import { Phone, MapPin, Mail, Send, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const phoneNumbers = ["+880 1822-334481", "+880 0174-457797"];

  const emails = [
    "ndreamhouseconstruction@gmail.com",
    "ndreamhouseinterior@gmail.com",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-text text-background font-sans selection:bg-accent selection:text-text">
      <div className="max-w-7xl mx-auto py-20 px-6 lg:py-28">
        {/* Section Header */}

        <div className="max-w-3xl px-4 mb-10 mx-auto text-center">
          <h1 className="text-4xl lg:text-8xl text-white mb-4 text-center">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="leading-relaxed text-center text-xl text-zinc-300 max-w-3xl mx-auto">
            Ready to explore our Full or Virtual Interior Design Services?
            Connect with our team to bring your dream space to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form Container (Translucent Luxury Dark Card) */}
          <div className="lg:col-span-7 bg-background/3 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-secondary/20 shadow-xl">
            <h3 className="text-2xl font-bold text-background mb-8 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-background/90 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-text/50 border border-secondary/30 text-background placeholder-background/30 focus:bg-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-background/90 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-text/50 border border-secondary/30 text-background placeholder-background/30 focus:bg-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="your.email@example.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-background/90 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-text/50 border border-secondary/30 text-background placeholder-background/30 focus:bg-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="+880 XXXX-XXXXXX"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-background/90 mb-2">
                    Preferred Country
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-text/50 border border-secondary/30 text-background placeholder-background/30 focus:bg-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="e.g., Bangladesh, Canada, UK"
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-background/90 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-text/50 border border-secondary/30 text-background placeholder-background/30 focus:bg-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="Tell us about your project plans..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-accent text-text hover:bg-primary hover:text-background w-full py-4 rounded-xl text-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md group cursor-pointer"
              >
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                />
                Send Message
              </button>
            </form>
          </div>

          {/* Info Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Address */}
            <div className="bg-background/2 rounded-2xl p-6 border border-secondary/20 flex items-start space-x-4">
              <div className="w-12 h-12 bg-background/5 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-accent" size={22} />
              </div>
              <div>
                <h4 className="font-bold text-background mb-1.5 text-base">
                  Our Office
                </h4>
                <p className="text-background/70 text-sm leading-relaxed">
                  5042, Stadium Market (5th Floor), Nur Ahmed Road, Kazirdewri,
                  Chattogram, Bangladesh.
                </p>
              </div>
            </div>

            {/* Phone List */}
            <div className="bg-background/2 rounded-2xl p-6 border border-secondary/20 flex items-start space-x-4">
              <div className="w-12 h-12 bg-background/5 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="text-accent" size={22} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-background mb-1.5 text-base">
                  Phone Numbers
                </h4>
                <div className="flex flex-col gap-1">
                  {phoneNumbers.map((num, idx) => (
                    <a
                      key={idx}
                      href={`tel:${num.replace(/\s+/g, "")}`}
                      className="text-background/70 hover:text-accent transition-colors text-sm font-medium w-max"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email List */}
            <div className="bg-background/2 rounded-2xl p-6 border border-secondary/20 flex items-start space-x-4">
              <div className="w-12 h-12 bg-background/5 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-accent" size={22} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-background mb-1.5 text-base">
                  Email Addresses
                </h4>
                <div className="flex flex-col gap-1">
                  {emails.map((email, idx) => (
                    <a
                      key={idx}
                      href={`mailto:${email}`}
                      className="text-background/70 hover:text-accent transition-colors text-sm break-all w-max"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-primary/20 rounded-2xl p-6 text-background border border-primary/40 shadow-inner">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-base text-accent">
                <Clock size={18} />
                Office Hours
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-background/10 pb-2">
                  <span className="text-background/70">
                    Saturday - Thursday
                  </span>
                  <span className="font-semibold text-background">
                    11:00 AM - 7:00 PM
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-background/70">Friday</span>
                  <span className="bg-primary text-white px-3 py-0.5 rounded-full text-xs font-medium">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
