import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  if (body.email === 'admin@admin.com' && body.password === 'password') {
    return NextResponse.json({
      accessToken: 'mock-jwt-token-12345',
      success: true
    });
  }
  
  return NextResponse.json({
    error: 'Invalid credentials',
    success: false
  }, { status: 401 });
}