'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // bloque le scroll quand le menu est ouvert
    document.body.style.overflow = open ? 'hidden' : '';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (open && menuRef.current && target && !menuRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-teal-500">MyTravelAgency.</span>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-teal-500 font-medium hover:text-gray-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Destinations</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Why Us</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Vibes</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden lg:inline bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors text-sm">
              Book Now
            </button>

            {/* hamburger toggle (toggle open/close) */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Modal overlay + centered modal (full width on xs, max-w on larger) */}
        {open && (
          <div
            className="fixed inset-12 z-50 flex items-start lg:items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu"
          >
            {/* overlay */}
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

            {/* modal content: width full on small screens, centered w/ max-w on larger */}
            <div
              ref={menuRef}
              id="mobile-menu"
              className="relative w-full max-w-3xl bg-white rounded-lg shadow-xl p-6 transform transition-all duration-200 ease-in-out max-h-[80vh] overflow-y-auto z-10"
            >
              <nav className="space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-teal-600 hover:text-teal-800">Home</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600">Destinations</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600">Why Us</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600">Vibes</a>
              </nav>

              <div className="mt-6">
                <button className="w-full bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors text-sm">Book Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;