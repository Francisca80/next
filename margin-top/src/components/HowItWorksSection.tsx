'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface HowItWorksStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

const HowItWorksSection = () => {
  const [steps, setSteps] = useState<HowItWorksStep[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await fetch('/api/how-it-works');
        const data = await response.json();
        const sortedSteps = data.docs.sort((a: HowItWorksStep, b: HowItWorksStep) => a.order - b.order);
        setSteps(sortedSteps);
      } catch (error) {
        console.error('Error fetching how it works steps:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSteps();
  }, []);

  if (isLoading) {
    return (
      <section className="py-24 bg-white">
        <div className="w-11/12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 h-12 w-12 rounded-full mb-4"></div>
                <div className="bg-gray-200 h-6 w-3/4 mb-2"></div>
                <div className="bg-gray-200 h-4 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="w-11/12 max-w-5xl mx-auto">
        <div className="inline-block relative mb-8 mt-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Hoe werkt het?
          </h2>
          <hr className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6EC1E4] to-[#4F8BD2]" />
        </div>
        
        <p className="text-lg text-gray-600 max-w-3xl mb-16">
          Ons bewezen proces zorgt ervoor dat uw project op tijd, binnen budget en boven verwachting wordt opgeleverd.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={ref}
              className={`transform transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-xl p-6 h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3  hover:bg-[#3A6BA3] transition-colors duration-300"
          >
            <span>Start uw project</span>
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 