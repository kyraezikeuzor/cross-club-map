import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios'

let map: google.maps.Map;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function getGeocode(address:string) {
  const geocodeFetchUrl = `/api/geocode?address=${address}`;
  const geocodeFetchResponse = await axios.get(geocodeFetchUrl);
  const latitude = geocodeFetchResponse.data.lat;
  const longitude = geocodeFetchResponse.data.lng;
  const geocode: [number,number] = [latitude,longitude]

  return geocode
}

// utils/getPlace.js

// utils/getPlace.js

