import { LatLngTuple } from 'leaflet';
import { LocationDto } from '@/types'


export const locations: LocationDto[] = [
    {
        "name": "St. Agnes Academy",
        "category":"Red Cross Club",
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
        "name":"Seven Lakes High School",
        "category":"Red Cross Club",
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
        "name":"Houston Baptist University",
        "category":"Red Cross Club",
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
        "name":"Thomas Jefferson High School",
        "category":"Red Cross Club",
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
        "name":"The White House",
        "category":"Red Cross Club",
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
        "name":"Disney Land Park",
        "category":"Red Cross Club",
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
