'use client'
import React, { useState, useEffect } from 'react'
import { LocationDto } from '@/types'

import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { 
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { locations } from '@/data/locations'
import { osm } from '@/data/providers'
import {
  LocationTab,
  LocationCard,
  PopupContent,
} from './Location'

import {
  Dashboard,
  DashboardNavbar,
  DashboardSidebar,
  DashboardSidebarContent
} from './Dashboard'


export default function Map() {

    const [selectedLocation, setSelectedLocation] = useState<LocationDto | null>(null)

    const LocationMarker = ({}) => {
      const map = useMap();
      const icon: Leaflet.DivIcon = new Leaflet.DivIcon({
        html: `<img style="width: 24px; height: 24px;" src="./red-cross-logo-12.png"/>`,
        className:'clear'
      });

      const flyToMarker = (coordinates: [number, number], zoom: number) => {
        if (coordinates && typeof coordinates[0] !== "undefined") {
          map.flyTo(coordinates, zoom, {
            animate: true,
            duration: 1.5,
          });
        }
      };
  
      //10. useEffect to trigger the map fly when markerData changes.
      useEffect(() => {
        if (selectedLocation) {
          if (selectedLocation.geocode && typeof selectedLocation.geocode[0] !== "undefined") {
            flyToMarker(selectedLocation.geocode, 11);
          }
        }
      }, [selectedLocation]);
    }

    return (
        <Dashboard>
          <DashboardNavbar/>

          <DashboardSidebar>
              <DashboardSidebarContent>
                <span className='font-semibold text-lg'>Search Club Locations</span>
                {locations && locations.map((item:any,index:number)=>(
                  <LocationTab
                    key={index}
                    onSelect={()=>{setSelectedLocation(item)}} 
                    onDeselect={()=>{setSelectedLocation(null)}}
                    location={item}
                    selectedLocation={selectedLocation}
                  />       
                ))} 
              </DashboardSidebarContent>
          </DashboardSidebar>

          <MapContainer 
            center={[29.76790572283977, -95.36153769473093]} 
            zoom={10}
            style={{ height: "100vh", width: "100%" }}
          >
            <TileLayer
              attribution={osm.maptiler.attribution}
              url={osm.maptiler.url}
              maxZoom={15} // Maximum zoom level supported by OpenStreetMap
              minZoom={0} // Minimum zoom level supported by OpenStreetMap
              errorTileUrl="https://www.example.com/error-tile.png" // URL of an error tile to display if tile loading fails
              noWrap={true} // Prevents the map from wrapping around the world horizontally
            />
                {locations && locations.map((item:any,index:number)=>(
                  <Marker 
                    position={item.geocode} 
                    eventHandlers={{
                      click: () => {setSelectedLocation(item)},
                    }}
                  >
                    <Popup>
                      <PopupContent location={item}/>
                    </Popup>
                  </Marker>
                ))}
                
          </MapContainer>

          {selectedLocation != null && 
            <LocationCard location={selectedLocation}/>
          }
      </Dashboard>
    )
}

const LocationMarker = ({}) => {
  
}