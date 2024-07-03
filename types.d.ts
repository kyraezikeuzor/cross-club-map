import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

type LocationDto = {
    school: string;
    county:string;
    address:string;
    level: "College" | "High School" | "Middle School"
    phone: string;
    email:string;
    sponsor: {
        "name":string,
        "phone":string,
        "email":string
    },
}

// Extend LocationDto to include geocode
interface GeocodedLocationDto extends LocationDto {
    geocode: [number, number];
  }