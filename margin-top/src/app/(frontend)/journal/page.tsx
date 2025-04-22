import { CollectionSlug, getPayload } from 'payload';
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
  return typeof featuredImage === 'string' ? featuredImage : featuredImage.url || '';
};

async function JournalPage() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const response = await payload.find({
    collection: 'journal' as CollectionSlug,
    depth: 1,
  });

  const posts = response.docs as Journal[];

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
    <div className="bg-white">
    <section className="w-11/12 max-w-5xl mx-auto py-24">
      <div className="inline-block mb-16 mt-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
        Journals
        </h1>
        <hr className="border-gray-600 mb-4 border-t-2" />
      </div>
      <p className="text-xl text-gray-600 max-w-3xl mb-16">
      In onze Journal delen we verhalen, inzichten en inspiratie die ons drijven. 
      Van de laatste trends in design en technologie tot diepgaande reflecties over branding, strategie 
      en de wereld van innovatie. Hier vind je niet alleen updates over ons werk, maar ook de ideeën en visies die ons vormen.
      Of je nu op zoek bent naar praktische tips, creatieve inspiratie of gewoon nieuwsgierig bent waar we naartoe gaan.
      </p>
  

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
                  {post.excerpt && post.excerpt.length > 150 
                    ? `${post.excerpt.substring(0, 150)}...` 
                    : post.excerpt}
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
    </section>
    </div>
  );
}

export default JournalPage; 