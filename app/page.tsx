import { locations } from '@/data/locations'
import { SearchBar } from '@/components/ui/SearchBar'
import { Menu, X, Map, University, Users } from 'lucide-react';
import LocationList from '@/components/data/LocationList'
import MapContainer from '@/components/data/MapContainer'

export default function Home() {
  return (
    <main className="flex flex-col gap-10 bg-[--clr-base] px-[8vw] py-[10vh] w-[100%] h-[100vh] relative">
      
      <header className='text-center flex flex-col gap-2'>
        <h1 className='text-4xl font-extrabold tracking-tight'>Explore Texas Gulf Coast  <span className='text-red-'>Red Cross</span> Resources</h1>  
        <p className='opacity-75'>
        From hosting in-person hackathons to virtual workshops, Hack Club is a place to become more technical and immerse yourself.
        </p>
      </header>
      
      <section className='flex flex-col gap-5'>
        <section className='flex flex-row gap-2 items-center justify-center'>
          <div className='rounded-xl h-fit w-[350px] shadow-md'>
              <img 
              className='rounded-t-lg h-[150px] w-full object-cover'
              src='https://volunteerconnection.redcross.org/orig/photogallery/540/thumbnails/20ba15352fef3f912ef56698edaa54f0.jpg'
              />
              <div className='rounded-b-lg bg-[--clr-blue-base] text-white p-3'>
                <span className='flex flex-row gap-1 text-lg font-semibold'><University className='w-5'/> Red Cross Centers</span>
                <p className='opacity-90 text-sm'>With community organizations in their communities. Learn more about our events below!</p>
              </div>
          </div>
          <div className='rounded-xl h-fit w-[350px] shadow-md'>
              <img 
              className='rounded-t-lg h-[150px] w-full object-cover'
              src='https://volunteerconnection.redcross.org/orig/photogallery/540/thumbnails/20ba15352fef3f912ef56698edaa54f0.jpg'
              />
              <div className='rounded-b-lg bg-[--clr-peach-dark] text-white p-3'>
                <span className='flex flex-row gap-1 text-lg font-semibold'><Users className='w-5'/> Red Cross Clubs</span>
                <p className='opacity-90 text-sm'>With community organizations in their communities. Learn more about our events below!</p>
              </div>
          </div>
          <div className='rounded-xl h-fit w-[350px] shadow-md'>
              <img 
              className='rounded-t-lg h-[150px] w-full object-cover'
              src='./red-cross-map.jpg'
              />
              <div className='rounded-b-lg bg-[--clr-green-dark] text-white p-3'>
                <span className='flex flex-row gap-1 text-lg font-semibold'><Map className='w-5'/> Red Cross Map</span>
                <p className='opacity-90 text-sm'>With community organizations in their communities. Learn more about our events below!</p>
              </div>
          </div>
          <div className='rounded-xl h-fit w-[350px] shadow-md'>
              <img 
              className='rounded-t-lg h-[150px] w-full object-cover'
              src='https://volunteerconnection.redcross.org/orig/photogallery/540/thumbnails/20ba15352fef3f912ef56698edaa54f0.jpg'
              />
              <div className='rounded-b-lg bg-[--clr-pink-dark] text-white p-3'>
                <span className='flex flex-row gap-1 text-lg font-semibold'><University className='w-5'/> Disaster Map</span>
                <p className='opacity-90 text-sm'>With community organizations in their communities. Learn more about our events below!</p>
              </div>
          </div>
          <div className='rounded-xl h-fit w-[350px] shadow-md'>
              <img 
              className='rounded-t-lg h-[150px] w-full object-cover'
              src='https://volunteerconnection.redcross.org/orig/photogallery/540/thumbnails/20ba15352fef3f912ef56698edaa54f0.jpg'
              />
              <div className='rounded-b-lg bg-[--clr-pink-dark] text-white p-3'>
                <span className='flex flex-row gap-1 text-lg font-semibold'><University className='w-5'/> Disaster Map</span>
                <p className='opacity-90 text-sm'>With community organizations in their communities. Learn more about our events below!</p>
              </div>
          </div>
        </section>
      </section>

      <section className='flex flex-col gap-5'>
        <h2 className='text-center text-3xl font-extrabold tracking-tight'>Search Centers, Clubs, & More</h2>
        <MapContainer locations={locations}/>
        <LocationList/>
      </section>

    </main>
  );
}
