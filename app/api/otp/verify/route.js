import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { identifier, otp } = await request.json()

    if (otp === '123456') {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
