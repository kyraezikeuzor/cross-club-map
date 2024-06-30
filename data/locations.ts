import { LatLngTuple } from 'leaflet';
import { LocationDto } from '@/types'


export const locations: LocationDto[] = [
    {
        "school": "St. Agnes Academy",
        "county": "Harris County",
        "level": "High School",
        "geocode": [29.713475926684026, -95.54399779895033],
        "phone": "713-555-9010",
        "email": "redcross@gmail.com",
        "sponsor": {
            "name":"Alexis Bledel",
            "phone":"123-320-2390",
            "email":""
        },
    },
    {
        "school":"Seven Lakes High School",
        "county":"Harris County",
        "level": "High School",
        "geocode":[29.707747914141724, -95.80817706581954],
        "phone": "713-555-9010",
        "email": "redcross@gmail.com",
        "sponsor": {
            "name":"Alexis Bledel",
            "phone":"123-320-2390",
            "email":""
        }
    },
    {
        "school":"Houston Baptist University",
        "county":"Harris County",
        "level": "College",
        "geocode":[29.707747914141724, -95.80817706581832],
        "phone": "713-555-9010",
        "email": "redcross@gmail.com",
        "sponsor": {
            "name":"Alexis Bledel",
            "phone":"123-320-2390",
            "email":""
        }
    }
];