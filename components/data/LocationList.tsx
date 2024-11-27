'use client'
import { locations } from '@/data/locations'
import { counties } from '@/data/counties'
import {SearchBar} from '@/components/ui/SearchBar'
import {Input} from '@/components/ui/Input'
import {Label} from '@/components/ui/label'
import {Checkbox} from '@/components/ui/Checkbox'
import {NestedCheckbox} from '@/components/ui/NestedCheckbox'

export default function LocationList() {

    return (
        <section className='flex flex-col gap-5 items-center'>
            
            <div className='w-2/3'>
                <SearchBar/>
            </div>

            <section className='w-full grid grid-cols-[2fr_5fr] gap-3'>
                <section className='border-[3px] border-[--clr-grey-light] rounded-lg p-3'>
                    <div className='w-full flex flex-row justify-center items-center gap-3'>
                        <Checkbox variant='rounded'>
                            Red Cross Centers
                        </Checkbox>
                        <Checkbox variant='rounded'>
                            Red Cross Clubs
                        </Checkbox>
                    </div>
                </section>
                <section className='w-full flex flex-col gap-1'>
                    {locations && locations.map((location:any,index:number)=>(
                        <div className='flex flex-row items-center gap-2 border-[3px] border-[--clr-grey-light] rounded-lg p-3 cursor-pointer shadow-xs'>
                            <div className='flex flex-col space-y-1' >
                                <span className='flex flex-row gap-1 items-center text-base font-medium'>
                                    {location.name}
                                    <span 
                                        className={
                                        `${location.category === 'Red Cross Club' ? 'bg-red-100' : 
                                            location.category === 'Red Cross Center' ? 'bg-yellow-100' : 
                                            location.category === 'Blood Donation Center' ? 'bg-blue-100' : ''} 
                                        text-xs font-medium bg-gray-100 w-fit py-[1px] px-2 rounded-full`
                                        }
                                    >
                                        {location.category}
                                    </span>
                                    <span 
                                        className={
                                        `${location.level === 'College' ? 'bg-purple-100' : 
                                            location.level === 'High School' ? 'bg-green-100' : 
                                            location.level === 'Middle School' ? 'bg-yellow-100' : ''} 
                                        text-xs font-medium bg-blue-100 w-fit py-[1px] px-2 rounded-full`
                                        }
                                    >
                                        {location.level}
                                    </span>
                                </span>
                                
                                <span className='text-xs'>
                                    {location.address}
                                </span>
                            </div>
                        </div>     
                    ))} 
                </section>
            </section>

        </section>
    )
}