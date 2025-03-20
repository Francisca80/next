import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';

export async function GET() {
  try {
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });

    // Fetch services data from Payload CMS
    const response = await (payload.find as any)({
      collection: 'services',
      limit: 20, // Adjust as needed
      depth: 2 // To get nested media objects
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
} 