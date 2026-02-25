import React from 'react';

export const Header: React.FC = () => {
    return (
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-teal-500">MyTravelAgency.</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-teal-500 font-medium hover:text-gray-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Destinations</a>
              <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Why Us</a>
              <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Vibes</a>
            </nav>

            <div className="flex items-center space-x-4">
              {/* <button className="text-gray-600 hover:text-teal-500 transition-colors text-sm">
                Sign in
              </button> */}
              <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors text-sm">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;