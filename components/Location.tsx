'use client'
import React, { useState, useEffect } from 'react'
import { LatLngTuple } from 'leaflet';
import { LocationDto } from '@/types'
import { 
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents
  } from "react-leaflet";
import lodash from 'lodash'
import Leaflet from "leaflet";
import { useMap } from 'react-leaflet'

export const LocationMapController = (
    {location}:{location:LocationDto}
) => {
  
    return (
<div></div>
    )
}

export const LocationSelect = (    
    {children, location, selectedLocation, onSelect, onDeselect, selectedClassName}:
    {children?:React.ReactNode, location: LocationDto, selectedLocation: LocationDto | null, onSelect: any, onDeselect?: any, selectedClassName:string}
) => {
     
    const [click, setClick] = useState(false)
    
    useEffect(()=>{
        const handleSelect = () => {
            console.log('FDJSAKFJHAKS')
            if (selectedLocation == null || lodash.isEqual(selectedLocation, location) == false) {
                onSelect()
            } else if (lodash.isEqual(selectedLocation, location) == true) {
                onDeselect()
                console.log('I am happy')
            }
        }
        handleSelect()
    },[click])

    return (
        <div 
        className={`w-full h-full ${lodash.isEqual(selectedLocation, location) == true && selectedClassName}`} 
        onClick={()=>setClick(!click)}
        >
            {children}
        </div>
    )
}

export const LocationTab = (
    {location, selectedLocation, onSelect, onDeselect}:
    {location: LocationDto, selectedLocation: LocationDto | null, onSelect: any, onDeselect?: any}
) => {
    
    return (
        <LocationSelect 
            location={location}
            selectedLocation={selectedLocation}
            onSelect={onSelect}
            onDeselect={onDeselect}
            selectedClassName='border-2 border-blue-400 p-1 rounded-xl'
        >
            <div className='flex flex-col space-y-1 border border-grey-500 rounded-lg shadow-sm p-3'>
                <span className='text-base font-medium'>{location.school}</span>
                <span 
                    className={
                    `${location.level === 'College' ? 'bg-purple-100' : 
                        location.level === 'High School' ? 'bg-green-100' : 
                        location.level === 'Middle School' ? 'bg-yellow-100' : ''} 
                    text-xs font-medium bg-blue-100 w-fit py-[1px] px-4 rounded-full`
                    }
                >
                    {location.level}
                </span>
                <span className='text-sm'>{location.county}</span>
            </div>
        </LocationSelect>
    )
}

export const LocationCard = (
    {location, onSelect}:
    {location:LocationDto, onSelect?: any}
) => {
    return (
        <div className='w-1/2 lg:w-1/4 flex flex-col space-y-2 ease-in-out bg-white absolute z-[99999] top-20 right-20 rounded-xl shadow-xl py-3 border-2 border-gray-200'>
            <span className='px-3'>Details</span>
            
            <hr className='w-full h-1'/>

            <div className='flex flex-row space-x-2 items-center px-3'>
                <span className='text-lg font-semibold'>
                    {location.school}
                </span>
                <span
                    className={
                        `${location.level === 'College' ? 'bg-purple-100' : 
                        location.level === 'High School' ? 'bg-green-100' : 
                        location.level === 'Middle School' ? 'bg-yellow-100' : ''} 
                        text-xs font-medium bg-blue-100 w-fit py-[1px] px-4 rounded-full`
                    }
                >
                    {location.level}
                </span>
            </div>
            <div className='px-3'>
                <img 
                src='https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/83/94.jpg'
                className='rounded-sm'
                />
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='w-1/2 flex flex-col gap-1 px-3'>
                    <span className='text-gray-500 text-sm'>Contact Details</span>
                    <div className='flex flex-col  text-sm'>
                        <span>{location.email}</span>
                        <span>{location.phone}</span>
                    </div>
                </div>
                <hr className='h-16 w-[2px] bg-gray-200'/>
                <div className='w-1/2 flex flex-col gap-1 px-3'>
                    <span className='text-gray-500 text-sm'>Location</span>
                    <span className='font-bold text-base leading-5'>Golden Gate Bridge, San Francisco</span>
                </div>
            </div>
            <hr className='w-full h-1'/>
            <div className='flex flex-col gap-1 px-3'>
                <span className='text-gray-500 text-sm'>Sponsor Details</span>
                <div className='w-1/2 flex flex-col text-sm'>
                    <span>{location.sponsor.name}</span>
                    <span>{location.sponsor.email}</span>
                    <span>{location.sponsor.phone}</span>
                </div>
            </div>
        </div>
    )
}

export const PopupContent = (
    {location}:{location:LocationDto}
) => {
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col gap-1'>
                <span className="text-sm font-semibold">{location.school}</span>
                <div className='flex flex-col '>
                    <span className='text-sm'>Location: {location.phone}</span>
                </div>
            </div>
        </div>
    )
}