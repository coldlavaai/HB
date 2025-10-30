import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Create data directory if it doesn't exist
    const dataDir = join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Create filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `lcb-form-submission-${timestamp}.json`;
    const filepath = join(dataDir, filename);

    // Save individual submission
    await writeFile(filepath, JSON.stringify(data, null, 2));

    // Also append to an all-submissions file
    const allSubmissionsPath = join(dataDir, 'all-lcb-submissions.json');
    let allSubmissions = [];

    if (existsSync(allSubmissionsPath)) {
      const existingData = await readFile(allSubmissionsPath, 'utf-8');
      allSubmissions = JSON.parse(existingData);
    }

    allSubmissions.push(data);
    await writeFile(allSubmissionsPath, JSON.stringify(allSubmissions, null, 2));

    // Log to console for immediate visibility
    console.log('='.repeat(80));
    console.log('NEW LCB FORM SUBMISSION RECEIVED');
    console.log('='.repeat(80));
    console.log(`Time: ${data.timestamp}`);
    console.log(`Submitted by: ${data.submittedBy}`);
    console.log('\nKey Responses:');
    console.log(`- Time spent weekly: ${data.timeSpentWeekly}`);
    console.log(`- Biggest pain point: ${data.biggestPainPoint}`);
    console.log(`- Number of clients: ${data.numberOfClients}`);
    console.log(`- Top priority: ${data.topPriority}`);
    console.log('\nFull details saved to:', filepath);
    console.log('='.repeat(80));

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      filename
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
  try {
    const allSubmissionsPath = join(process.cwd(), 'data', 'all-lcb-submissions.json');

    if (!existsSync(allSubmissionsPath)) {
      return NextResponse.json({ submissions: [] });
    }

    const data = await readFile(allSubmissionsPath, 'utf-8');
    const submissions = JSON.parse(data);

    return NextResponse.json({
      success: true,
      count: submissions.length,
      submissions
    });
  } catch (error) {
    console.error('Error reading submissions:', error);
    return NextResponse.json(
      { success: false, message: 'Error reading submissions' },
      { status: 500 }
    );
  }
}
