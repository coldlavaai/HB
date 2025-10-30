import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Store submissions in memory (persists during function lifetime)
const submissions: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Store in memory
    submissions.push(data);

    // Also send to n8n webhook for persistent storage
    try {
      await fetch('https://otdm22.app.n8n.cloud/webhook/lcb-form-submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (webhookError) {
      console.error('Webhook error (non-fatal):', webhookError);
    }

    console.log('LCB FORM SUBMISSION:', JSON.stringify(data, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Error saving form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Error submitting form' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    success: true,
    count: submissions.length,
    submissions
  });
}
