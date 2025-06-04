import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';
import type { Journal } from '@/payload-types';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });

    // Fetch journal posts from Payload CMS
    const response = await payload.find({
      collection: 'posts',
      where: {
        status: {
          equals: 'published'
        }
      },
      sort: '-updatedAt', // Sort by most recently updated
      limit: 10,
      depth: 2 // To get nested media objects
    });

    // Add slug to each post if not present
    const posts = response.docs.map((doc: Journal) => ({
      ...doc,
      slug: doc.slug || doc.title.toLowerCase().replace(/\s+/g, '-')
    }));
    response.docs = posts;

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching journal data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch journal data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 