'use client';
import React, { Suspense } from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed z-50 inset-0 bg-white flex items-center justify-center">
      <div className="relative w-full h-full">
       {/* Loading SVG - overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-full md:h-[400px]">
            <Image
              src="/loading-plane.gif"
              alt="Loading"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}