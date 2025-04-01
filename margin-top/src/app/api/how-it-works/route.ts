import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';

export async function GET() {
  try {
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });

    const response = await (payload.find as any)({
      collection: 'how-it-works',
      where: {
        status: {
          equals: 'published',
        },
      },
      sort: 'order',
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching how it works steps:', error);
    return NextResponse.json(
      { error: 'Failed to fetch how it works steps' },
      { status: 500 }
    );
  }
} 