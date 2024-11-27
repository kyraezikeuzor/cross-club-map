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


export function getCurrentLocalTimeWithTimezone() {
  // Create a date object for the current time
  const now = new Date();
  
  // Define options for formatting the time with timezone
  const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit' as const,
      minute: '2-digit' as const,
      second: '2-digit' as const,
      timeZoneName: 'short' as const,
      hour12: true // Use 12-hour format
  };
  
  // Format the date object to include the time and timezone
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedTime = formatter.format(now);

  return formattedTime;
}

// Example usage
console.log(getCurrentLocalTimeWithTimezone()); // Outputs something like "04:08:03 PM PDT"
