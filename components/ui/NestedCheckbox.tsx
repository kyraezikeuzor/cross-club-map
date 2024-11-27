'use client'
import React, {useState, useEffect} from 'react'
import {ChevronLeft, ChevronDown} from 'lucide-react'

type NestedCheckboxProps = {
    header: React.ReactNode;
    content: React.ReactNode;
}

export const NestedCheckbox = ({header, content}:NestedCheckboxProps) => {

    const [click, setClick] = useState(true)

    const handleAccordionClick = () => {
        setClick(!click)
    }

    useEffect(()=>{
        const data = window.localStorage.getItem('SEDGE_APP_ACCORDION');
        if (data != null) setClick(JSON.parse(data))
    },[])


    useEffect(()=>{
        window.localStorage.setItem('SEDGE_APP_ACCORDION', JSON.stringify(click))
    }, [click])

    return (

        <div className='bg-[--clr-base] rounded-xl border-[3px] px-[10px] py-2 border-[--clr-base-accent]'>
            <div className='relative cursor-pointer' onClick={handleAccordionClick}>
                {header}
                {
                    click ?
                    <ChevronLeft className='absolute top-0 right-0'/>
                    : <ChevronDown className='absolute top-0 right-0'/>
                }
            </div>
            <div className={click == true ? 'hidden' : ''}>
                {content}
            </div>
        </div>
    )
}
