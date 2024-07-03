import { LatLngTuple } from 'leaflet';
import { LocationDto } from '@/types'


export const locations: LocationDto[] = [
    {
        "school": "St. Agnes Academy",
        "county": "Harris County",
        "address":"9000 Bellaire Blvd, Houston, TX 77036, USA",
        "level": "High School",
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
        "phone":"555-555-555",
        "email":"redcrossgmail",
        "sponsor":{
            "name":"Beyonce Knowles",
            "phone":"535-434-553",
            "email":"bey@gmail.com"
        }
    }
];
