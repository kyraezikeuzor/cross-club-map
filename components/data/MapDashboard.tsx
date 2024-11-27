'use client'
import React, { useState, useEffect } from 'react'
import { LocationDto, GeocodedLocationDto } from '@/types'

import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import MapContainer from '@/components/data/MapContainer'

import { locations } from '@/data/locations'
import { osm } from '@/data/providers'

import {
  NodeCard,
  NodePopupCard,
  NodeImage,
  MarkerPopupContent,
} from '../ui/MapToolkit'

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

import { SearchBar } from "@/components/ui/SearchBar"

import { 
  getGeocode,
  getCurrentLocalTimeWithTimezone
 } from '@/lib/utils'

export default function Map() {

    const [selectedLocation, setSelectedLocation] = useState<LocationDto | null>(null)
    const [geocodedLocations, setGeocodedLocations] = useState<GeocodedLocationDto[]>([]);

    useEffect(() => {
      const fetchGeocodes = async () => {
        const geocodedData = await Promise.all(
          locations.map(async (item) => {
            const geocode = await getGeocode(item.address);
            return { ...item, geocode };
          })
        );
        setGeocodedLocations(geocodedData);
      };
  
      fetchGeocodes();
    }, [locations]);

    const LocationMarker = ({selectedLocation}:{selectedLocation:LocationDto | null}) => {
      const map = useMap();

      const flyToMarker = (coordinates:[number,number], zoom:number) => {
        if (coordinates && typeof coordinates[0] !== 'undefined') {
          map.flyTo(coordinates, zoom, {
            animate: true,
            duration: 0.5,
          });
        }
      };
    
      useEffect(() => {
        const flyToMarkerGeocode = async () => {
          if (selectedLocation) {
            const selectedGeocode = await getGeocode(selectedLocation.address)
            if (selectedGeocode && typeof selectedGeocode[0] !== 'undefined') {
              flyToMarker(selectedGeocode,11)
            }
          }  
        }
        flyToMarkerGeocode()
      }, [selectedLocation, map]);
    
      return null;
    };


    return (
      <Dashboard>

        <DashboardNavbar>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col justify-betweeen'>
              <div className='flex flex-row items-center justify-start gap-2'>
                <img src='red-cross-logo.png' className='w-5 h-5'/>
                <span className='text-base font-semibold flex'>Map | Regional Red Cross Clubs</span>
              </div>
              <div className='text-sm text-gray-500 font-normal'>
                
              </div>
            </div>
            <div className='flex flex-row items-center gap-5 font-normal text-sm'>
              <span>{getCurrentLocalTimeWithTimezone()}</span>
              <div className='text-sm border border-gray-200 py-1 px-2 rounded-lg'>
                TEXAS GULF COAST REGION
              </div>
            </div>
          </div>
        </DashboardNavbar>

        <DashboardSidebar>
            <DashboardSidebarHeader>
              <DashboardSidebarTitle>
                Search Red Cross Affiliated Locations
              </DashboardSidebarTitle>
            </DashboardSidebarHeader>
            <DashboardSidebarContent className='flex flex-col gap-2'>
                <SearchBar/>
                
                <div className='flex flex-row justify-between'>
                  <div className='flex flex-col items-center'>
                    <span className='text-2xl font-bold'>{locations.length + 57}</span>
                    <span className='text-sm opacity-75'>Red Cross Centers</span>
                  </div>
                  <div className='flex flex-col items-center'>
                    <span className='text-2xl font-bold'>{locations.length + 38}</span>
                    <span className='text-sm opacity-75'>Red Cross Clubs</span>
                  </div>
                </div>

                <div className='hidden flex flex-col gap-1 overflow-y-scroll'>
                  {locations && locations.map((item:any,index:number)=>(
                    <NodeCard
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
          <MapContainer locations={locations}/>
        </DashboardContent>

        <DashboardPopup>
          {selectedLocation != null && 
            <NodePopupCard 
              onClickOut={()=>setSelectedLocation(null)} 
              location={selectedLocation}
            />
          }
        </DashboardPopup>
        
      </Dashboard>
    )
}
