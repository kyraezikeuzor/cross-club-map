import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

let map: google.maps.Map;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getGeocode(address:string) {
  return 'hi'
}

// utils/getPlace.js

// utils/getPlace.js

export async function getPlaces() {
  return new Promise((resolve, reject) => {
    // Ensure the Google Maps API is loaded
    if (!window.google) {
      return reject(new Error('Google Maps JavaScript API not loaded'));
    }

    const center = new google.maps.LatLng(52.369358, 4.889258);

    const request = {
      location: center,
      radius: 10,
      type: 'school', // Specify place types like "restaurant"
    };

    const service = new google.maps.places.PlacesService(document.createElement('div'));

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(results);
      } else {
        reject(new Error('Failed to fetch nearby places'));
      }
    });
  });
}
