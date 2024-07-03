import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');

    if (!location) {
        return NextResponse.json({ error: 'location is required' }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const fields = ['formatted_address', 'name', 'photos', 'photo', 'place_id'];
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(location)}&inputtype=textquery&fields=${fields.join(',')}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        console.log('Google API call success:', response.data);
        return NextResponse.json(response.data);
    } catch (error: any) {
        console.error('Error fetching place details:', error.response ? error.response.data : error.message);
        return NextResponse.json({ error: 'Failed to fetch place details', details: error.response ? error.response.data : error.message }, { status: 500 });
    }
}
