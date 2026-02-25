'use client';

import { useEffect, useState } from 'react';
import { PlaneTakeoff } from 'lucide-react';

export default function ScrollToTopButton() {
// état pour afficher ou cacher le bouton
  const [visible, setVisible] = useState(false);

//   affiche le bouton si on a scrollé de 400px ou si on est proche du bas (120px)
  useEffect(() => {
    const handleScroll = () => {
      const scrolledDown = window.scrollY > 400; // on a descendu de 400px
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120; // ou on est proche du bas
      setVisible(scrolledDown || nearBottom);
    };

    // écoute le scroll de façon passive pour perf
    window.addEventListener('scroll', handleScroll, { passive: true });
    // check initial position (utile si la page charge déjà scrollee)
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

// fonction pour remonter en haut, avec prise en compte de la préférence reduced-motion
  const scrollToTop = () => {
    // prend en compte la préférence reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Remonter en haut"
      title="Remonter en haut"
      className="
        fixed z-50 right-5 bottom-6
        p-3 rounded-full shadow-lg
        bg-white/90 backdrop-blur-sm
        ring-2 ring-gray-400
        hover:scale-105 transform transition
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500
        dark:bg-gray-800 dark:ring-gray-700
      "
    >
      {/* simple icône flèche vers le haut (SVG) */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg> */}

      <PlaneTakeoff className='w-5 h-5 text-gray-500'/>
      <span className="sr-only">Remonter en haut</span>
    </button>
  );
}