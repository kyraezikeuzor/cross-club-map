import { LatLngTuple } from 'leaflet';
import { LocationDto } from '@/types'


export const locations: LocationDto[] = [
    {
        "school": "St. Agnes Academy",
        "county": "Harris County",
        "address":"9000 Bellaire Blvd, Houston, TX 77036, USA",
        "level": "High School",
        "geocode": [29.707356956000226, -95.54264866067486],
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
        "address":"9251 S Fry Rd, Katy, TX 77494",
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
        "address":"9000 Bellaire Blvd, Houston, TX 77036",
        "level": "College",
        "geocode":[29.707747914141724, -95.80817706581832],
        "phone": "713-555-9010",
        "email": "redcross@gmail.com",
        "sponsor": {
            "name":"Alexis Bledel",
            "phone":"123-320-2390",
            "email":""
        }
    },
    {
        "school":"Thomas Jefferson High School",
        "county":"Virginia County",
        "address":"6560 Braddock Rd, Alexandria, VA 22312",
        "level":"High School",
        "geocode":[38.82181637960834, -77.16863274430496],
        "phone":"555-555-555",
        "email":"redcrossgmail",
        "sponsor":{
            "name":"Beyonce Knowles",
            "phone":"535-434-553",
            "email":"bey@gmail.com"
        }
    },
    {
        "school":"The White House",
        "county":"Virginia County",
        "address":"1600 Pennsylvania Avenue NW, Washington, DC 20500",
        "level":"High School",
        "geocode":[38.89787666943701, -77.03651907520559],
        "phone":"555-555-555",
        "email":"redcrossgmail",
        "sponsor":{
            "name":"Beyonce Knowles",
            "phone":"535-434-553",
            "email":"bey@gmail.com"
        }
    },
    {
        "school":"Disney Land Park",
        "county":"Virginia County",
        "address":"Anaheim, CA 92802",
        "level":"High School",
        "geocode":[44.62533500483525, -124.0482046550178],
        "phone":"555-555-555",
        "email":"redcrossgmail",
        "sponsor":{
            "name":"Beyonce Knowles",
            "phone":"535-434-553",
            "email":"bey@gmail.com"
        }
    }
];
