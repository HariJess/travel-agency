import React, { useState } from "react";
import {
  Mail,
  User,
  ArrowRight,
  Facebook,
  Twitter,
  Globe,
} from "lucide-react";

export default function ContactCard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      // simulate request - replace with real API call
      await new Promise((r) => setTimeout(r, 800));
      setUsername("");
      setEmail("");
      setMessage("");
      alert("Message submitted (demo). Replace with real submit logic.");
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  // social links data 
  
  const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: Facebook,
    bg: "bg-blue-600",
    hover: "hover:bg-blue-700",
  },
  {
    label: "Twitter",
    href: "#",
    icon: Twitter,
    bg: "bg-cyan-400",
    hover: "hover:bg-cyan-500",
  },
  {
    label: "Website",
    href: "#",
    icon: Globe,
    bg: "bg-red-500",
    hover: "hover:bg-red-600",
  },
];

  return (
    <section className="bg-teal-500 relative z-10 w-full max-w-7xl mx-auto py-16 px-4 sm:px-8 lg:px-16">
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* LEFT - Video */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-12 flex items-center justify-center relative">
            <div className='flex items-center justify-center w-full'>
              <video
                src="/contact/contact.mp4"
                autoPlay
                loop
                muted
                className="rounded-2xl overflow-hidden shadow-2xl h-[500px] w-4/5 object-cover"
              />
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact us</h2>

            <form id="contact-form" data-readdy-form="true" onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    placeholder="Username"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    aria-label="Username"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    placeholder="Email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message..."
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full px-4 py-4 bg-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-label="Message"
                />
                <div className="text-xs text-gray-500 mt-1 text-right">{message.length}/500</div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-4 rounded-2xl font-semibold hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                aria-label="Submit"
                disabled={submitting}
              >
                Get My Free Quote <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* social connect */}
            <div className="text-center mt-8">
              <div className="text-gray-500 text-sm mb-4">Or</div>
                <div className="flex justify-center gap-4">
                  {socialLinks.map(({ label, href, icon: Icon, bg, hover }) => (
                    <a
                      key={label}
                      href={href}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-12 h-12 rounded-full ${bg} ${hover} flex items-center justify-center text-white transition-colors cursor-pointer shadow-lg`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </section>
  );
}
