'use client';

import React from 'react';
import GridMotion from './GridMotion';
// import DomeGallery from './DomeGallery';

export default function ExploreMore(){
    const galleryItems = [
      "/more-place/1.webp",
      "/more-place/2.webp",
      "/more-place/3.webp",
      "/more-place/4.webp",
      "/more-place/5.webp",
      "/more-place/6.webp",
      "/more-place/7.webp",
      "/more-place/8.webp",
      "/more-place/9.webp",
      "/more-place/10.webp",
      "/more-place/11.webp",
      "/more-place/12.webp",
    ];

    return (
    <section className="py-16 bg-white">
      {/* header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Explore more</h2>
          <p className="text-gray-600 max-w-2xl">
            Let's go on a journey to discover the most beautiful places in the world and experience incredible moments.
          </p>
        </div>
       </div>
       {/* gallery */}
        {/* <div style={{ width: '100%', height: '100vh' }}>
          <DomeGallery
            fit={0.8}
            minRadius={650}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
          />
        </div> */}
        <div style={{ width: '100%', height: '100vh' }}>
            <GridMotion items={galleryItems} gradientColor="grey" />
        </div>
    </section>
    );
};
