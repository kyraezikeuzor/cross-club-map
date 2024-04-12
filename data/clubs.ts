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
    },
    {
        "school":"Stephen F. Austin High School",
        "geocode":[29.668655280073885, -95.67452778826124]
    },
    {
        "school":"The Village School",
        "geocode":[29.746676407928852, -95.61949697505969]
    },
    {
        "school":"Seven Lakes High School",
        "geocode":[29.707747914141724, -95.80817706581954]
    }
];