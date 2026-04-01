import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface Review {
  id: string;
  name: string;
  rating: number;
  image: string;
}

const features: Feature[] = [
  { id: '1', number: '01', title: 'Find trips that fit your freedom', description: 'Traveling offers freedom and flexibility, solitude and spontaneity, and privacy and purpose.' },
  { id: '2', number: '02', title: 'Got back to nature by travel', description: "The world is a playground and you can finally explore Mother Nature's immediate canvas." },
  { id: '3', number: '03', title: 'Reignite those travel tastebuds', description: 'There are infinite reasons to love travel, one of them being the food glorious food.' }
];

const reviews: Review[] = [
  { id: '1', name: 'Kamelia Diana', rating: 4.8, image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: '2', name: 'Hasian Adam', rating: 4.9, image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: '3', name: 'Joe Johnny', rating: 4.7, image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' }
];

const reviewPositions = [
  { className: "absolute top-8 right-0 md:right-8", delay: 0.2 },
  { className: "absolute bottom-1/2 left-0 md:left-8", delay: 0.4 },
  { className: "absolute bottom-24 right-0 md:right-4", delay: 0.6 },
];

export default function TravelDiscover() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Travel to make sweet memories
          </h2>
          <p className="text-gray-600 text-lg">Find trips that fit a flexible lifestyle</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features — slide depuis la gauche */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="flex gap-6"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg ${
                    index === 0 ? 'bg-blue-400' : index === 1 ? 'bg-cyan-400' : 'bg-red-500'
                  }`}>
                    {feature.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-md">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.button
              className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: features.length * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Start your explore
            </motion.button>
          </div>

          {/* Image + review cards */}
          <div className="relative">
            <div className="flex items-center justify-center w-full">
              {/* Image — fade in sur place */}
              <motion.img
                src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel destination"
                className="rounded-2xl overflow-hidden shadow-2xl h-[650px] w-full mx-6 md:mx-0 md:w-2/3 object-cover"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>

            {/* Review cards — un après l'autre */}
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className={`${reviewPositions[index].className} bg-white rounded-2xl shadow-lg p-4 max-w-xs`}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: reviewPositions[index].delay, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start gap-3">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-gray-700 font-semibold text-sm">{review.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(review.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}