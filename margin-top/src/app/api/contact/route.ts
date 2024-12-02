import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { RateLimiter } from 'limiter';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined in environment variables');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const limiter = new RateLimiter({
  tokensPerInterval: 5,
  interval: 15 * 60 * 1000
});

export async function POST(req: Request) {
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (!(await limiter.tryRemoveTokens(1))) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' }, 
      { 
        status: 429,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
  
  try {
    const { name, email, message } = await req.json();

    const msg = {
      to: 'francisca@margin-top.com', // Replace with your email
      from: 'francisca@margin-top.com', // Replace with your SendGrid verified sender
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Message:</strong> ${message}<br>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json(
      { success: true },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  } catch (error) {
    console.error('SendGrid Error:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
}