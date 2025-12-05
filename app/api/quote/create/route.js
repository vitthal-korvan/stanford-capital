import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()

    // Validate data using Zod (optional, duplicative of client, but good security)
    
    console.log('Received Quote:', data)

    // Insert into Supabase
    // const { error } = await supabase.from('leads').insert([data])
    
    return NextResponse.json({ success: true, message: 'Quote received' })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
