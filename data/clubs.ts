import { LatLngTuple } from 'leaflet';

interface club {
    school: string;
    geocode: LatLngTuple;
    phone: string;
    email:string;
}

export const CLUBS: club[] = [
    {
        "school": "St. Agnes Academy",
        "geocode": [29.713475926684026, -95.54399779895033],
        "phone": "713-555-9010",
        "email": "redcross@gmail.com"
    },
    {
        "school":"George Ranch Memorial",
        "geocode": [29.51657823925303, -95.69124451979916],
        "phone": "713-555-9010",
        "email": "redcross@gmail.com"
    },
    {
        "school":"Stephen F. Austin High School",
        "geocode":[29.668655280073885, -95.67452778826124],
        "phone": "713-555-9010",
        "email": "redcross@gmail.com"
    },
    {
        "school":"The Village School",
        "geocode":[29.746676407928852, -95.61949697505969],
        "phone": "713-555-9010",
        "email": "redcross@gmail.com"
    },
    {
        "school":"Seven Lakes High School",
        "geocode":[29.707747914141724, -95.80817706581954],
        "phone": "713-555-9010",
        "email": "redcross@gmail.com"
    }
];