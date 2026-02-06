import { MapPin } from 'lucide-react';

interface Place {
  id: string;
  title: string;
  location: string;
  image: string;
  discount: string;
}

const places: Place[] = [
  {
    id: '1',
    title: 'Bora Bora',
    location: 'Papeete, France',
    image: '#',
    discount: '30% OFF'
  },
  {
    id: '2',
    title: 'Les Maldives',
    location: 'Malé, Maldives',
    image: '#',
    discount: '25% OFF'
  },
  {
    id: '3',
    title: 'La Digue',
    location: 'Victoria, Seychelles',
    image: '#',
    discount: '35% OFF'
  },
  {
    id: '4',
    title: 'Palawan',
    location: 'Manille, Philippines',
    image: '#',
    discount: '20% OFF'
  }
];

export default function PopularPlace() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Popular Place</h2>
          <p className="text-gray-600 max-w-2xl">
            Many places are very famous, beautiful, clean, and will give a very deep impression to visitors on vacation and make them come back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place,idx) => (
            <div key={place.id} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-48">
                <img
                  src={`/popular/${idx + 1}.jpg`}
                  alt={place.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent"></div>

                <div className="absolute top-4 right-4 bg-white/70 text-black text-xs font-bold px-3 py-1 rounded-lg">
                  {place.discount}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {place.title}
                </h3>
                <div className="flex items-center mt-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-teal-500 mr-1 flex-shrink-0" />
                  <span className="text-sm">{place.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
