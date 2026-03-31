'use client';

import { useState } from 'react';
import { Plane, MapPin, Calendar, Users, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoading } from './LoadingProvider';

export default function Hero() {
    const [activeTab, setActiveTab] = useState('hotelery');
    const { isLoading } = useLoading();

    const words = "Explore the whole world and enjoy its beauty".split(" ");

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
            <div className="relative bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 rounded-3xl overflow-hidden shadow-2xl">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    style={{ animationPlayState: 'paused', opacity: 0.8 }}
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-400/50 to-transparent"></div>

                {/* Hero text section */}
                <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-32">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="relative inline-block">
                            <Plane className="absolute -left-20 top-0 text-white/60 w-6 h-6 rotate-45" />
                            <div className="absolute -left-16 top-2 w-12 h-px border-t-2 border-dashed border-white/40"></div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                {words.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        className="inline-block mr-[0.3em]"
                                        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                                        animate={!isLoading ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                                        transition={{
                                            duration: 0.9,
                                            delay: i * 0.07,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        {word}
                                        {/* line break after "world" */}
                                        {word === 'world' && <br />}
                                    </motion.span>
                                ))}
                            </h1>

                            <Plane className="absolute -right-20 top-8 text-white/60 w-6 h-6 -rotate-12" />
                            <div className="absolute -right-16 top-10 w-12 h-px border-t-2 border-dashed border-white/40"></div>
                        </div>

                        <motion.p
                            className="text-white/80 text-lg mt-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={!isLoading ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: words.length * 0.07 + 0.1, ease: 'easeOut' }}
                        >
                            Find and write about your experiences around the world.
                        </motion.p>
                    </div>
                </div>

                {/* Reservation section */}
                <motion.div
                    className="relative z-20 px-8 sm:px-12 lg:px-16 pb-8 -mt-16"
                    initial={{ opacity: 0, y: 60 }}
                    animate={!isLoading ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="bg-white rounded-2xl shadow-xl mt-16 p-6">
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                            <div className="flex space-x-6">
                                {['hotelery', 'flights', 'cars'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`text-sm font-medium pb-2 border-b-2 transition-colors capitalize ${
                                            activeTab === tab
                                                ? 'text-gray-900 border-teal-500'
                                                : 'text-gray-400 border-transparent hover:text-gray-600'
                                        }`}
                                    >
                                        {tab === 'hotelery' ? 'Hotelery' : tab === 'flights' ? 'Flights' : 'Cars & Shuttle'}
                                    </button>
                                ))}
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
                </motion.div>
            </div>
        </section>
    );
}