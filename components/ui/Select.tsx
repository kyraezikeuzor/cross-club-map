'use client'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { LatLngTuple } from 'leaflet';
import { LocationDto } from '@/types'

import lodash from 'lodash'

export const Select = (    
    {children, location, selectedLocation, onSelect, onDeselect, selectedClassName}:
    {children?:React.ReactNode, location: LocationDto, selectedLocation: LocationDto | null, onSelect: any, onDeselect?: any, selectedClassName:string}
) => {
     
    const [click, setClick] = useState(false)
    
    useEffect(()=>{
        const handleSelect = () => {
            
            if (selectedLocation == null || lodash.isEqual(selectedLocation, location) == false) {
                onSelect()
                //console.log(`Selected ${selectedLocation?.school}`)
            } else if (lodash.isEqual(selectedLocation, location) == true) {
                onDeselect()
                console.log(`Deselected ${selectedLocation.name}`)
            }
        }
        handleSelect()
    },[click])

    return (
        <div 
        className={` w-full h-full rounded-xl p-1
            ${lodash.isEqual(selectedLocation, location) == true && selectedClassName}
            ${lodash.isEqual(selectedLocation, location) == false && 'border-2 border-gray-300'}`
        } 
        onClick={()=>setClick(!click)}
        >
            {children}
        </div>
    )
}