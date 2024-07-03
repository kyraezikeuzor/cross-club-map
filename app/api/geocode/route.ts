// pages/api/reverseGeocode.ts

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const address = searchParams.get('address');
    console.log(address)

  if (!address) {
    return NextResponse.json({ error: 'Address is required' }, { status: 400 });
  }

  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&amp&key=${key}`;

  try {
    const response = await axios.get(url);
    const geocode = response.data.results[0].geometry.location;

    if (!geocode) {
      throw new Error('No geocode found.');
    }

    console.log(geocode)

    return NextResponse.json(geocode);

  } catch (error) {
    console.error('Error obtaining geocoding:', error);
    return NextResponse.json({ error: 'Failed to obtain geocode' }, { status: 500 });
  }
}
