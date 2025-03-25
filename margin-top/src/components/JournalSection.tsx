import Link from 'next/link';
import React from 'react';

const JournalSection: React.FC = () => {
  return (
    <section className="w-11/12 max-w-5xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Our Journal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        {/* Article 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <img 
              src="/images/journal/article1.jpg" 
              alt="Article 1" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <h3 className="text-lg font-bold mb-2">Article 1 Title</h3>                       
          <p className="text-gray-600 mb-4">    
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href="/journal/article1" className="text-blue-500 hover:underline">
            Read More
          </Link>
        </div>
 
    </section>
  );
};

export default JournalSection;  




