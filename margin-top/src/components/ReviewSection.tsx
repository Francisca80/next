'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  source: string;
  image: string;
  quote: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Florencio Rojas',
    role: 'Owner',
    source: 'Google reviews',
    company: 'Red Flower Temple',
    image: '/cases/redflowertemple/rftlogo.png',
    quote: 'Super efficient, knowledge and structure super nice to work with Francisca',
    rating: 5
  },
  {
    id: '2',
    name: 'Samantha Maaswinkel',
    role: 'Owner',
    source: 'Google reviews',
    company: 'Jodaro Gym',
    image: '/cases/jodaro/jodarogymlogo.png',
    quote: 'Wij zijn super blij met onze website. We hadden eerst een website die niet goed werkte en erg oud was. Francisca heeft voor ons een hele nieuwe website gebouwd, deze is helemaal van deze tijd en super leuke gadgets. Ze luistert goed naar je wensen en samen bekijk je de mogelijkheden. Wil jij ook een super mooie en goed werkende website? Dan ben je hier aan het perfecte adres!',
    rating: 5
  },

];

const ReviewSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="w-11/12 max-w-5xl mx-auto py-12 md:py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mb-12"
      >
        <div className="inline-block mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Wat onze klanten zeggen</h2>
          <hr className="border-gray-600 mb-4 w-full" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl">
          Ontdek waarom onze klanten voor Margin-Top kiezen
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  sizes="(max-width: 768px) 48px, 48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <p className="text-gray-600 text-sm">{review.role} bij {review.company}</p>
                <p className="text-gray-600 text-sm">{ review.source}</p>
                <div className="flex mt-4">
              {[...Array(review.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
              </div>
             
            </div>
            <div className="relative">
              <FaQuoteLeft className="text-[#4F8BD2] opacity-20 text-4xl absolute -top-2 -left-2" />
              <p className="text-gray-700 relative z-10 pl-4">{review.quote}</p>
            </div>
       
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewSection; 