'use client';

import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'motion/react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Floating, {
  FloatingElement,
} from '@/fancy/components/image/parallax-floating';

interface HeroProps {
  image: {
    url: string;
    filename: string;
  } | null;
  title: string;
  tagline: string;
  buttons: {
    primary: {
      text: string;
      url: string;
    };
    secondary: {
      text: string;
      url: string;
    };
  };
  images?: Array<{
    url: string;
    filename: string;
  }>;
}

const Hero: React.FC<HeroProps> = ({ image, title, tagline, buttons = {
  primary: {
    text: 'Bekijk ons werk',
    url: 'https://calendly.com/francisca-margin-top'
  },
  secondary: {
    text: 'Laten we iets bouwen',
    url: '/cases'
  }
}, images = [] }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [animate, image]);

  // Format image URL to ensure it has proper base URL if needed
  const getImageUrl = (img: { url: string } | null) => {
    if (!img || !img.url) return '/home.jpg';
    
    // If URL is already absolute, use it directly
    if (img.url.startsWith('http')) {
      return img.url;
    }
    // If URL starts with slash, it's a relative URL
    if (img.url.startsWith('/')) {
      return img.url;
    }
    // Otherwise, prepend server URL
    return `${process.env.NEXT_PUBLIC_SERVER_URL || ''}${img.url}`;
  };

  // Get image URL for a specific index, falling back to the main image
  const getImageAtIndex = (index: number) => {
    // If we have the exact image at this index, use it
    if (images && images.length > index) {
      return getImageUrl(images[index]);
    }
    
    // If we have some images but not enough, cycle through them
    if (images && images.length > 0) {
      return getImageUrl(images[index % images.length]);
    }
    
    // Fallback to the main image if no images array is provided
    return getImageUrl(image);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center overflow-hidden bg-white" ref={scope}>    
      {/* Content overlay with higher z-index */}
      <div className="absolute inset-0 flex justify-center items-center z-50 pointer-events-none">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center space-y-2 md:space-y-4 items-center flex flex-col w-full pointer-events-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.88, delay: 1.5 }}
          >
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-['Outfit'] tracking-tight px-2 md:px-4 py-2 pb-4">{title}</h1>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6EC1E4] to-[#4F8BD2]"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-['Outfit'] my-1 md:my-2 max-w-xl mx-auto px-4 pb-4">{tagline}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Link 
                href={buttons.primary.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="header-button">
                  {buttons.primary.text}
                </button>
              </Link>
              <Link 
                href={buttons.secondary.url}
                className="inline-block"
              >
                <button className="header-button">
                  {buttons.secondary.text}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating images - lower z-index for proper layering */}
      <Floating sensitivity={-1} className="absolute inset-0 overflow-hidden z-10">
        {/* Top row - 5 elements with increased top margin */}
        <FloatingElement depth={1.2} className="absolute top-[8%] left-[3%] w-[32%] max-w-[250px] rotate-3" data-name="img1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <Image
              src={getImageAtIndex(0)}
              alt="Floating image 1"
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-sm shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-15 rounded-sm"></div>
          </motion.div>
        </FloatingElement>

        <FloatingElement depth={0.3} className="absolute top-[18%] left-[25%] w-[22%] max-w-[180px] -rotate-2" data-name="img2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative"
          >
            <Image
              src={getImageAtIndex(1)}
              alt="Floating image 2"
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-sm shadow-lg"
           />
           <div className="absolute inset-0 bg-black opacity-15 rounded-sm"></div>
          </motion.div>
        </FloatingElement>
        
        <FloatingElement depth={0.9} className="absolute top-[10%] left-[48%] w-[25%] max-w-[200px] rotate-1" data-name="img3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative"
          >
            <Image
              src={getImageAtIndex(2)}
              alt="Floating image 3"
              width={250}
              height={250}
              className="w-full h-auto object-cover rounded-sm shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-15 rounded-sm"></div>
          </motion.div>
        </FloatingElement>

        <FloatingElement depth={1.5} className="absolute top-[16%] left-[70%] w-[18%] max-w-[160px] rotate-6" data-name="img9">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <Image
              src={getImageAtIndex(8)}
              alt="Floating image 9"
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-sm shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-15 rounded-sm"></div>
          </motion.div>
        </FloatingElement>

        <FloatingElement depth={0.6} className="absolute top-[9%] right-[3%] w-[28%] max-w-[230px] -rotate-3" data-name="img4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <Image
              src={getImageAtIndex(3)}
              alt="Floating image 4"
              width={280}
              height={280}
              className="w-full h-auto object-cover rounded-sm shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-15 rounded-sm"></div>
          </motion.div>
        </FloatingElement>

        {/* Bottom row - now 5 elements with new addition */}
        <FloatingElement depth={1.1} className="absolute bottom-[5%] left-[8%] w-[28%] max-w-[220px] -rotate-2" data-name="img5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative"
          >
            <Image
              src={getImageAtIndex(4)}
              alt="Floating image 5"
              width={250}
              height={250}
              className="w-full h-auto object-cover rounded-sm shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-15 rounded-sm"></div>
          </motion.div>
        </FloatingElement>
        
        <FloatingElement depth={0.4} className="absolute bottom-[12%] left-[36%] w-[20%] max-w-[170px] rotate-2" data-name="img6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src={getImageAtIndex(5)}
              alt="Floating image 6"
              width={220}
              height={220}
              className="w-full h-auto object-cover rounded-sm shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-15 rounded-sm"></div>
          </motion.div>
        </FloatingElement>

        <FloatingElement depth={1.3} className="absolute bottom-[10%] right-[32%] w-[26%] max-w-[210px] rotate-3" data-name="img7">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="relative"
          >
            <Image
              src={getImageAtIndex(6)}
              alt="Floating image 7"
              width={240}
              height={240}
              className="w-full h-auto object-cover rounded-sm shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-15 rounded-sm"></div>
          </motion.div>
        </FloatingElement>

        <FloatingElement depth={0.7} className="absolute bottom-[3%] right-[5%] w-[32%] max-w-[260px] -rotate-1" data-name="img8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <Image
              src={getImageAtIndex(7)}
              alt="Floating image 8"
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-sm shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-15 rounded-sm"></div>
          </motion.div>
        </FloatingElement>

        {/* New bottom-middle image */}
        <FloatingElement depth={0.8} className="absolute bottom-[8%] left-[60%] w-[16%] max-w-[140px] -rotate-5" data-name="img10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.7 }}
            className="relative"
          >
            <Image
              src={getImageAtIndex(9)}
              alt="Floating image 10"
              width={180}
              height={180}
              className="w-full h-auto object-cover rounded-sm shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-15 rounded-sm"></div>
          </motion.div>
        </FloatingElement>
      </Floating>
       
    </div>
  )
}

export default Hero;
