import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });

    // Fetch cases data from Payload CMS
    const response = await (payload.find as any)({
      collection: 'portfolio',
      where: {
        status: {
          equals: 'published'
        }
      },
      sort: 'id', // Sort by ID
      limit: 10,
      depth: 2 // To get nested media objects
    });

    // Add slug to each case
    const cases = response.docs.map((doc: any) => ({
      ...doc,
      slug: doc.slug || doc.title.toLowerCase().replace(/\s+/g, '-')
    }));
    response.docs = cases;

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching cases:', error);
    // Return empty response instead of error when Payload is not available
    return NextResponse.json({
      docs: [],
      totalDocs: 0,
      limit: 10,
      totalPages: 0,
      page: 1,
      pagingCounter: 1,
      hasPrevPage: false,
      hasNextPage: false,
      prevPage: null,
      nextPage: null
    });
  }
} 