import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';

export async function GET() {
  try {
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });

    const response = await (payload.find as any)({
      collection: 'development',
      where: {
        status: {
          equals: 'published',
        },
      },
      sort: 'order',
      depth: 2,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching development services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch development services' },
      { status: 500 }
    );
  }
} 