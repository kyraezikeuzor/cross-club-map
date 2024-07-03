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
  MapPositionCard,
  MapPositionPopupCard,
  MapPositionImage,
  MarkerPopupContent,
} from '../map/MapTools'

import {
  Dashboard,
  DashboardContent,
  DashboardNavbar,
  DashboardNavbarTitle,
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarDescription,
  DashboardSidebarTitle,
  DashboardSidebarContent,
  DashboardPopup
} from '../ui/Dashboard'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/Command"

export default function Map() {

    const [selectedLocation, setSelectedLocation] = useState<LocationDto | null>(null)

    const LocationMarker = () => {
      const map = useMap();

      const flyToMarker = (coordinates: [number, number], zoom: number) => {
        if (coordinates && typeof coordinates[0] !== "undefined") {
          map.flyTo(coordinates, zoom, {
            animate: true,
            duration: .5,
          });
        }
      };
  
      // useEffect to trigger the map fly when selectedLocation changes.
      useEffect(() => {
        if (selectedLocation) {
          if (selectedLocation.geocode && typeof selectedLocation.geocode[0] !== "undefined") {
            flyToMarker(selectedLocation.geocode, 11);
          }
        }
      }, [selectedLocation, map]);

      return null;
    }


    return (
      <Dashboard>

        <DashboardNavbar>
          <span className='text-base font-semibold flex flex-row items-center justify-start gap-2'>
            <img src='red-cross-logo.png' className='w-5 h-5'/>
            Texas Gulf Coast Red Cross Clubs Map
          </span>
        </DashboardNavbar>

        <DashboardSidebar>
            <DashboardSidebarHeader>
              <DashboardSidebarTitle>
                Red Cross Club Locations
              </DashboardSidebarTitle>
              <DashboardSidebarDescription className='text-sm bg-blue-300 text-gray-500'>
                According to Axios, the majority of Americans do not have access 
                to emergency services that should be guaranteed to them.
              </DashboardSidebarDescription>
            </DashboardSidebarHeader>
            <DashboardSidebarContent className='flex flex-col gap-2'>
                <Command className="rounded-lg border">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList className='hidden'>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">

                    </CommandGroup>
                    <CommandSeparator />
                  </CommandList>
                </Command>
                <div className='flex flex-row justify-between'>
                  <div className='flex flex-col items-start'>
                    <span className='text-2xl font-bold'>{locations.length + 183}</span>
                    <span className='text-sm opacity-75'>High Schools</span>
                  </div>
                  <div className='flex flex-col items-start'>
                    <span className='text-2xl font-bold'>{locations.length + 57}</span>
                    <span className='text-sm opacity-75'>Middle Schools</span>
                  </div>
                  <div className='flex flex-col items-start'>
                    <span className='text-2xl font-bold'>{locations.length + 38}</span>
                    <span className='text-sm opacity-75'>Colleges</span>
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  {locations && locations.map((item:any,index:number)=>(
                    <MapPositionCard
                      key={index}
                      onSelect={()=>{setSelectedLocation(item)}} 
                      onDeselect={()=>{setSelectedLocation(null)}}
                      location={item}
                      selectedLocation={selectedLocation}
                    />       
                  ))} 
                </div>
            </DashboardSidebarContent>
        </DashboardSidebar>

        <DashboardContent>
          <MapContainer 
            center={[29.76790572283977, -95.36153769473093]} 
            zoom={10}
            style={{ height: "100vh", width: "100%" }}
          >
            <TileLayer
              attribution={osm.maptiler.attribution}
              url={osm.maptiler.url}
              maxZoom={18} // Maximum zoom level supported by OpenStreetMap
              minZoom={0} // Minimum zoom level supported by OpenStreetMap
              errorTileUrl="https://www.example.com/error-tile.png" // URL of an error tile to display if tile loading fails
              noWrap={true} // Prevents the map from wrapping around the world horizontally
            />
                {locations && locations.map((item:any,index:number)=>(
                  <Marker 
                  key={index}
                    position={item.geocode} 
                    eventHandlers={{
                      click: () => {setSelectedLocation(item)},
                    }}
                  >
                    <Popup>
                      <MarkerPopupContent location={item}/>
                    </Popup>
                  </Marker>
                ))}
            <LocationMarker />
          </MapContainer>
        </DashboardContent>

        <DashboardPopup>
          {selectedLocation != null && 
            <MapPositionPopupCard 
              onClickOut={()=>setSelectedLocation(null)} 
              location={selectedLocation}
            />
          }
        </DashboardPopup>
        
      </Dashboard>
    )
}
