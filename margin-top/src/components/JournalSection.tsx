import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface JournalPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  publishedDate: string;
}

interface JournalSectionProps {
  posts: JournalPost[];
}

const JournalSection: React.FC<JournalSectionProps> = ({ posts }) => {
  return (
    <section className="w-11/12 max-w-5xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Our Journal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4 relative h-48">
              <Image 
                src={post.featuredImage?.url || '/images/placeholder.jpg'} 
                alt={post.featuredImage?.alt || post.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
                priority={false}
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <Link href={`/journal/${post.slug}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
              <span className="text-sm text-gray-500">
                {new Date(post.publishedDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/journal" className="header-button">
          View All Posts
        </Link>
      </div>
    </section>
  );
};

export default JournalSection;  




