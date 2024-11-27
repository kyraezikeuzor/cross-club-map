import {Plus,Compass} from 'lucide-react'

export default function Logo() {

    return (
        <div className='flex flex-row gap-2 items-center'>
           <div className='flex flex-col items-center justify-center bg-red-500 w-6 h-6 rounded-md'>
                <Compass className='w-5 text-white font-semibold'/>
            </div> 
            <span className='font-semibold'>CrossKit</span>
        </div>
    )
}