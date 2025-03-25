import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';

export async function GET() {
  try {
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });

    // Fetch cases data from Payload CMS
    const response = await (payload.find as any)({
      collection: 'case',
      where: {
        status: {
          equals: 'published'
        }
      },
      sort: 'order', // Sort by order field (ascending)
      limit: 5,
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
    return NextResponse.json(
      { error: 'Failed to fetch cases' },
      { status: 500 }
    );
  }
} 