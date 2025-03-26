import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const depth = parseInt(searchParams.get('depth') || '2');
    const status = searchParams.get('status') || 'published';

    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });

    // Fetch hosting data from Payload CMS
    const response = await payload.find({
      collection: 'hosting',
      where: {
        status: {
          equals: status,
        },
      },
      depth,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching hosting data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch hosting data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 