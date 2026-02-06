'use client';

import Hero from '@/components/hero';
import Header from '@/components/header';
import PopularPlace from '@/components/popular-place';
import TravelDiscover from '@/components/travel-discover';
import ExploreMore from '@/components/explore-more';

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section */}
      <Header />

      {/* Main section */}
      <main className="max-w-7xl mx-auto">
        {/* hero section */}
        <Hero />
        {/* Popular Place Section */}
        <PopularPlace />

        {/* Travel Discover Section */}
        <TravelDiscover />

        {/* Explore More Section */}
        <ExploreMore />
      </main>
    </div>
  );
}
