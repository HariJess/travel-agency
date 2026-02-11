'use client';

import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  // Social media links
  const socials = [
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Twitter",  href: "#", Icon: Twitter },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Linkedin", href: "#", Icon: Linkedin },
];

// Navigation items
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Destinations ", href: "#destinations" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews ", href: "#reviews" },
    { label: "Book Now ", href: "#book-now" },
  ];

  // Support links
  const supportLinks = [
  { label: "Support Center", href: "#support-center" },
  { label: "Feedback", href: "#feedback" },
  { label: "Contact Us", href: "#contact" },
];

  return (
    <footer className="bg-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <div className="flex justify-between gap-8 mb-8 items-stretch">
        {/* Brand Section */}
        <div className="flex-1 min-w-0 flex flex-col">
          <h3 className="text-2xl font-bold text-teal-500 mb-4">MyTravelAgency.</h3>
          <p className="text-sm text-gray-600 mb-4">
            Personalized travel experiences with seamless planning and trusted support.
          </p>
          <div className="flex gap-4 mt-auto">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-gray-600 hover:text-teal-500 transition-colors"
                  aria-label={label}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
            Support
          </h4>
          <ul className="space-y-2">
            {supportLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="text-sm text-gray-600 hover:text-teal-500 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex-1 min-w-0 flex flex-col">
          <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
            Newsletter
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to our newsletter and get exciting offers
          </p>
          <form onSubmit={handleSubscribe} className="flex mt-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-sm bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-r-lg transition-colors flex items-center justify-center"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-8">
          <p className="text-center text-sm text-gray-600">
            © 2024 MyTravelAgency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
