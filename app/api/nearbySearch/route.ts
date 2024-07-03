import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get('location');
  const radius = searchParams.get('radius');
  const geocode = searchParams.get('geocode')
  const types = searchParams.get('types')
  
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  console.log('Google Maps API Key:', key);
  //console.log('Location:', location);
  //console.log('Radius:', radius);

  const data = {
    fields: ['displayName', 'location', 'businessStatus'],
    includedTypes: 'school',
    maxResultCount: 10,
    locationRestriction: {
      circle: {
        center: {
          latitude: 29.707356956000226,
          longitude: -95.54264866067486
        },
        radius: 10 // Ensure radius is an integer
      }
    },
    key: key
  };
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': key,
      'X-Goog-FieldMask': 'places.displayName,places.primaryType,places.types'
    }
  };

  try {
    const response = await axios.post(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?types=${types}&location=${geocode}&radius=${100}&key=${key}`);
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
    return NextResponse.json(response.data);
  } catch (error:any) {
    console.error('Error status:', error.response ? error.response.status : 'No response');
    console.error('Error data:', error.response ? error.response.data : error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
