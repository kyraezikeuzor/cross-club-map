'use client'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { LatLngTuple } from 'leaflet';
import { LocationDto } from '@/types'

import lodash from 'lodash'
import axios from 'axios';

import { Skeleton } from "@/components/ui/Skeleton"
import { Select } from '@/components/ui/Select'

import { getGeocode } from '@/lib/utils'

import { X, MapPin } from 'lucide-react'


export const MarkerPopupContent = (
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

export const MapPositionCard = (
    {location, selectedLocation, onSelect, onDeselect}:
    {location: LocationDto, selectedLocation: LocationDto | null, onSelect: any, onDeselect?: any}
) => {
    
    return (
        <Select 
            location={location}
            selectedLocation={selectedLocation}
            onSelect={onSelect}
            onDeselect={onDeselect}
            selectedClassName='border-[3px] border-blue-400 rounded-xl shadow-sm'
        >
            <div className='flex flex-row items-center gap-2 border-2 border-gray-200 rounded-lg p-3 cursor-pointer shadow-xs'>
                <div>
                    <MapPin className='w-5 h-5 text-yellow-400'/> 
                </div>
                <div className='flex flex-col space-y-1' >
                    <span className='flex flex-row gap-1 items-center text-base font-medium'>
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
                    <span className='text-xs'>
                        {location.county}
                    </span>
                </div>
            </div>
        </Select>
    )
}

export const MapPositionPopupCard = (
    {location, onClickOut}:
    {location: LocationDto, onClickOut?: any}
) => {


    return (
        <div className='w-1/2 lg:w-1/4 ease-in-out bg-white py-2 absolute z-[99999] top-20 right-20 rounded-xl shadow-2xl border border-gray-200'>
            <div className='relative flex flex-col space-y-2 '>
                <span onClick={()=>onClickOut()} className='absolute top-1 right-2 bg-gray-100 w-8 h-8 rounded-full p-2 flex flex-col items-center cursor-pointer'>
                    <X className='text-gray-600'/>
                </span>
                
                <span className='px-3'>Details</span>
                
                <hr className='w-full h-1'/>

                <div className='flex flex-row flex-wrap space-x-2 items-center px-3'>
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
                    <MapPositionImage
                    address={location.address}
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
                        <span className='font-semibold text-base leading-5'>Golden Gate Bridge, San Francisco</span>
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
        </div>
    )
}

export const MapPositionImage = (
    {address}:{address:string}
) => {
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {

        const fetchPhotoUrl = async () => {
          try {
            setLoading(true);

            const geocodeFetchUrl = `/api/geocode?address=${address}`
            const geocodeFetchResponse = await axios.get(geocodeFetchUrl)
            const latitude = geocodeFetchResponse.data.lat
            const longitude = geocodeFetchResponse.data.lng

            const placeSearchUrl = `/api/nearbySearch?types=school&geocode=${latitude},${longitude}`
            const placeSearchResponse = await axios.get(placeSearchUrl) 

            // placeSearchResponse.data.results[0].photos will never return an empty array, photos will just not exist
            if (placeSearchResponse.data.results[0].photos) {
                const place = placeSearchResponse.data.results[0];
                const photos = place.photos;

                console.log('IT IS A SCHOOL')
      
                if (photos && photos.length > 0) {
                  const photoReference = photos[0].photo_reference;
                  const photoFetchUrl = `/api/placePhoto?photo_reference=${photoReference}`
                  const photoResponse = await axios.get(photoFetchUrl);
                  const { imageBuffer, mimeType } = photoResponse.data;
                  
                  // Create a base64 image URL
                  const base64ImageUrl = `data:${mimeType};base64,${imageBuffer}`;
                  setPhotoUrl(base64ImageUrl);
  
                } else {
                  setError('No photos available for this location.');
                }
            } else if (placeSearchResponse.data.results[0].photos == undefined) {
                const placeSearchUrlBackup = `/api/nearbySearch?types=locality,political&geocode=${latitude},${longitude}`
                const placeSearchResponseBackup = await axios.get(placeSearchUrlBackup)

                console.log('IT IS not a SCHOOL')

                const place = placeSearchResponseBackup.data.results[0];
                const photos = place.photos;
      
                if (photos && photos.length > 0) {
                  const photoReference = photos[0].photo_reference;
                  const photoFetchUrl = `/api/placePhoto?photo_reference=${photoReference}`
                  const photoResponse = await axios.get(photoFetchUrl);
                  const { imageBuffer, mimeType } = photoResponse.data;
                  
                  // Create a base64 image URL
                  const base64ImageUrl = `data:${mimeType};base64,${imageBuffer}`;
                  setPhotoUrl(base64ImageUrl);
  
                } else {
                  setError('No photos available for this location.');
                }

            }

          } catch (err: any) {
            console.error('Error fetching photo:', err, err.message);
            setError(`No photos available for this locaton.`);
          } finally {
            setLoading(false);
          }
        };
    
        fetchPhotoUrl();
      }, [address]);
  
    if (loading) {
      return <Skeleton className="h-[250px] w-full rounded-lg" />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        {photoUrl ? 
            <img src={photoUrl} alt="Location" className='h-[250px] w-full rounded-lg' />  :
            <Skeleton className="h-full w-full rounded-lg" />
        }
      </div>
    );
};