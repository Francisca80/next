import { CollectionSlug, getPayload } from 'payload';
import { headers as GetHeaders } from 'next/headers';
import config from '@/payload.config';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import type { Journal } from '@/payload-types';

export const metadata = {
  title: 'Journal | Margin Top',
  description: 'Read our latest thoughts, ideas, and stories.',
};

const getImageUrl = (featuredImage: any) => {
  if (!featuredImage) return '';
  if (typeof featuredImage === 'string') return featuredImage;
  if (typeof featuredImage === 'object' && featuredImage?.url) {
    // If NEXT_PUBLIC_SERVER_URL is not set, use relative URL
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';
    return `${baseUrl}${featuredImage.url}`;
  }
  return '';
};

async function JournalPage() {
  const headers = await GetHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const response = await payload.find({
    collection: 'journal' as CollectionSlug,
    depth: 1,
  });

  console.log('Journal response:', response); // Debug log
  const posts = response.docs as Journal[];
  console.log('Posts:', posts); // Debug log

  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return 'No date';
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid date';
      return format(date, 'MMMM d, yyyy');
    } catch (error) {
      console.error('Error formatting date:', dateString, error);
      return 'Invalid date';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] bg-black/50 flex items-center justify-center">
        <div className="text-center !text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Journal</h1>
          <p className="text-xl max-w-2xl mx-auto px-4">
            Thoughts, stories and ideas about design, development and digital experiences.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Journal) => {
          const imageUrl = getImageUrl(post.featuredImage);
          
          return (
            <article
              key={post.id}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/journal/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={post.title || 'Journal post image'}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{formatDate(post.publishedDate)}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <Link href={`/journal/${post.slug}`} className="block">
                  <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.categories?.map((cat: { category: string }, index: number) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600"
                    >
                      {cat.category}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default JournalPage; 