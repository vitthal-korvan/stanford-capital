import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { identifier, type } = await request.json()

    if (!identifier || !type) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Mock OTP generation
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    
    // In production:
    // 1. Hash OTP
    // 2. Store in DB (Supabase)
    // 3. Send via SendGrid (email) or Twilio (SMS)

    console.log(`[MOCK] Sending OTP ${otp} to ${identifier} (${type})`)

    // Simulate success
    return NextResponse.json({ success: true, message: 'OTP sent successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
