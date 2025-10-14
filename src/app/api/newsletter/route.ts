import { NextRequest, NextResponse } from 'next/server';
import { subscribeToNewsletter } from '@/lib/brevo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Subscribe to newsletter
    const result = await subscribeToNewsletter({ email });

    if (result.success) {
      return NextResponse.json({
        message: result.message || 'Successfully subscribed to newsletter!',
        success: true
      });
    } else {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}