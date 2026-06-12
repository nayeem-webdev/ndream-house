import { useState } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";
const ContactSection = () => {
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
    // Add your submission logic here
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto py-28 px-4">
        {/* Section Title Component Logic */}
        <div className="max-w-3xl px-4 mb-10 mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Phone size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-zinc-900 mb-4 text-center">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="leading-relaxed text-center text-xl text-zinc-600 max-w-3xl mx-auto">
            Ready to start your journey? Reach out to us for a free
            consultation{" "}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-linear-to-br from-accent/5 to-secondary/5 rounded-3xl p-8 border border-zinc-200">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-primary/80 outline-none transition-all"
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-primary/80 outline-none transition-all"
                    placeholder="your.email@example.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-primary/80 outline-none transition-all"
                    placeholder="+880 XXXX-XXXXXX"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">
                    Preferred Country
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-primary/80 outline-none transition-all"
                    placeholder="e.g., Canada, UK, Australia"
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-primary/80 outline-none transition-all"
                  placeholder="Tell us about your study plans..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-white hover:bg-black shadow-sm hover:shadow-md w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
                Send Message
              </button>
            </form>
          </div>

          {/* Info Cards Column */}
          <div className="space-y-8">
            {/* Office Address */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-zinc-100 flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-text" />
              </div>
              <div>
                <h4 className="font-bold text-text mb-1">Our Office</h4>
                <p className="text-zinc-600 leading-relaxed">
                  5042, Stadium Market (5th Floor), Nur Ahmed Road, Kazirdewri,
                  Chattogram, Bangladesh.
                </p>
              </div>
            </div>

            {/* Phone List */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-zinc-100 flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="text-text" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-text mb-1">Phone Numbers</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {phoneNumbers.map((num, idx) => (
                    <a
                      key={idx}
                      href={`tel:${num.replace(/\s+/g, "")}`}
                      className="text-zinc-600 hover:text-primary/70 transition-colors text-sm font-medium"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email List */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-zinc-100 flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-text" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-text mb-1">Email Addresses</h4>
                {emails.map((email, idx) => (
                  <a
                    key={idx}
                    href={`mailto:${email}`}
                    className="block text-zinc-600 hover:text-primary/70 transition-colors text-sm break-all mb-1"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-linear-to-br from-primary to-accent rounded-2xl p-6 text-white shadow-lg">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-lg">
                Office Hours
              </h4>
              <div className="space-y-3 opacity-95">
                <div className="flex justify-between border-b border-primary/80/50 pb-2">
                  <span>Saturday - Thursday</span>
                  <span className="font-bold text-white">
                    11:00 AM - 7:00 PM
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Friday</span>
                  <span className="bg-white/20 px-3 py-0.5 rounded-full text-sm">
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

export default ContactSection;
