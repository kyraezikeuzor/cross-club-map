'use client'
import React, { useState, useEffect } from 'react'
import { LocationDto, GeocodedLocationDto } from '@/types'

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

export default function Map({locations}:{locations:LocationDto[]}) {

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
          {geocodedLocations.map((item, index) => (
            <Marker
              key={index}
              position={item.geocode}
              eventHandlers={{
                click: () => {
                  setSelectedLocation(item);
                },
              }}
            >
              <Popup>
                <MarkerPopupContent location={item} />
              </Popup>
            </Marker>
          ))}
        <LocationMarker selectedLocation={selectedLocation} />
      </MapContainer>
    )
}