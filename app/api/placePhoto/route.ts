import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const photoReference = searchParams.get('photo_reference')
  //const placeId = searchParams.get('place_id')
  
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  //console.log('Location:', location);
  //console.log('Radius:', radius);
//`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${mapsApiKey}`
//https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${key}
    //const url = `https://places.googleapis.com/v1/places/${placeId}/photos/${photoReference}/media?maxHeightPx=400&maxWidthPx=400&key=${key}`
    const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${key}`
    try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/photo`, {
      params: {
        maxwidth: 400,
        photoreference: photoReference,
        key: key,
      },
      responseType: 'arraybuffer',
    });

    
    const imageBuffer = Buffer.from(response.data, 'binary');
    const mimeType = response.headers['content-type'];

    return NextResponse.json({
      imageBuffer: imageBuffer.toString('base64'), // Return base64 string of the binary data
      mimeType: mimeType,
    });
  } catch (error:any) {
    console.error('Error status:', error.response ? error.response.status : 'No response');
    console.error('Error data:', error.response ? error.response.data : error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
