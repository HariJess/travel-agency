'use client';

import { useState } from 'react';
import { MapPin, Calendar, Users, Search, Plane } from 'lucide-react';

import Header from '@/components/header';
import PopularPlace from '@/components/popular-place';

export default function Home() {
  const [activeTab, setActiveTab] = useState('hotelery');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section */}
      <Header />

      {/* Main section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
        <div className="relative bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 rounded-3xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/hero-bg.jpg")',
              backgroundPosition: 'center 30%'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-sky-400/40 via-transparent to-transparent"></div>
          </div>

            {/* Hero text section */}
          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-32">
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative inline-block">
                <Plane className="absolute -left-20 top-0 text-white/60 w-6 h-6 rotate-45" />
                <div className="absolute -left-16 top-2 w-12 h-px border-t-2 border-dashed border-white/40"></div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Explore the whole world<br />and enjoy its beauty
                </h1>

                <Plane className="absolute -right-20 top-8 text-white/60 w-6 h-6 -rotate-12" />
                <div className="absolute -right-16 top-10 w-12 h-px border-t-2 border-dashed border-white/40"></div>
              </div>

              <p className="text-white/50 text-lg mt-4">
                Find out write about your experiences around the world.
              </p>
            </div>
          </div>

            {/* Reservation section */}
          <div className="relative z-20 px-8 sm:px-12 lg:px-16 pb-8 -mt-16">
            <div className="bg-white rounded-2xl shadow-xl mt-16 p-6">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div className="flex space-x-6">
                  <button
                    onClick={() => setActiveTab('hotelery')}
                    className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                      activeTab === 'hotelery'
                        ? 'text-gray-900 border-teal-500'
                        : 'text-gray-400 border-transparent hover:text-gray-600'
                    }`}
                  >
                    Hotelery
                  </button>
                  <button
                    onClick={() => setActiveTab('flights')}
                    className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                      activeTab === 'flights'
                        ? 'text-gray-900 border-teal-500'
                        : 'text-gray-400 border-transparent hover:text-gray-600'
                    }`}
                  >
                    Flights
                  </button>
                  <button
                    onClick={() => setActiveTab('cars')}
                    className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                      activeTab === 'cars'
                        ? 'text-gray-900 border-teal-500'
                        : 'text-gray-400 border-transparent hover:text-gray-600'
                    }`}
                  >
                    Cars & Shuttle
                  </button>
                </div>
                <button className="text-sm text-gray-500 hover:text-teal-500 transition-colors">
                  Last Searching →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-1">
                  <label className="block text-xs text-gray-600 mb-2">Destination</label>
                  <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-teal-500 transition-colors cursor-pointer">
                    <MapPin className="w-5 h-5 text-teal-500" />
                    <span className="text-sm font-medium text-gray-900">Bali, Indonesia</span>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <label className="block text-xs text-gray-600 mb-2">Check-in</label>
                  <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-teal-500 transition-colors cursor-pointer">
                    <Calendar className="w-5 h-5 text-teal-500" />
                    <span className="text-sm font-medium text-gray-900">Sat, 2 Dec 2022</span>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <label className="block text-xs text-gray-600 mb-2">Check-out</label>
                  <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-teal-500 transition-colors cursor-pointer">
                    <Calendar className="w-5 h-5 text-teal-500" />
                    <span className="text-sm font-medium text-gray-900">Sun, 3 Dec 2022</span>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <label className="block text-xs text-gray-600 mb-2">Room & Guest</label>
                  <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-teal-500 transition-colors cursor-pointer">
                    <Users className="w-5 h-5 text-teal-500" />
                    <span className="text-sm font-medium text-gray-900">1 Room, 2 Guest</span>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <label className="block text-xs text-transparent mb-2">Search</label>
                  <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Search className="w-5 h-5" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Place Section */}
        <PopularPlace />
      </main>
    </div>
  );
}
