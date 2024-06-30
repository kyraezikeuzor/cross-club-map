import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

type LocationDto = {
    school: string;
    county:string;
    level: "College" | "High School" | "Middle School"
    geocode: LatLngTuple;
    phone: string;
    email:string;
    sponsor: {
        "name":string,
        "phone":string,
        "email":string
    },
}