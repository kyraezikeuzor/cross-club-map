// pages/api/reverseGeocode.ts

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const geocode = searchParams.get('geocode');
    console.log(geocode)

  if (!geocode) {
    return NextResponse.json({ error: 'Geocode is required' }, { status: 400 });
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${geocode}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const address = response.data.results[0];

    if (!address) {
      throw new Error('No address found.');
    }
    console.log(address)
    return NextResponse.json({ address });
  } catch (error) {
    console.error('Error reverse geocoding:', error);
    return NextResponse.json({ error: 'Failed to reverse geocode' }, { status: 500 });
  }
}