import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, sendContactConfirmation } from '@/lib/brevo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Send contact email to team
    const contactResult = await sendContactEmail({ fullName, email, message });
    
    if (!contactResult.success) {
      return NextResponse.json(
        { error: contactResult.error },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const confirmationResult = await sendContactConfirmation({ fullName, email, message });
    
    if (!confirmationResult.success) {
      console.warn('Failed to send confirmation email:', confirmationResult.error);
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json({
      message: 'Message sent successfully! We\'ll get back to you soon.',
      success: true
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}