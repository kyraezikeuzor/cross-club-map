import { LatLngTuple } from 'leaflet';

interface clubType {
    school: string;
    geocode: LatLngTuple;
}

export const clubs: clubType[] = [
    {
        "school": "St. Agnes Academy",
        "geocode": [29.713475926684026, -95.54399779895033]
    },
    {
        "school":"George Ranch Memorial",
        "geocode": [29.51657823925303, -95.69124451979916]
    }
];