'use client'
import {MapContainer,TileLayer,Marker,Popup,} from "react-leaflet";
import {CLUBS} from '@/data/clubs'
import { Icon, DivIcon, point } from "leaflet";
import Leaflet from "leaflet";

export default function Map() {

    const icon: Leaflet.DivIcon = new Leaflet.DivIcon({
      html: `<img src="./red-cross-logo-7.png"/>`,
      className: "w-[10px]"
    });

    return (
        <main className="d w-[100%] h-[100vh] z-40">

          <MapContainer 
          center={[29.76790572283977, -95.36153769473093]} 
          zoom={10}
          style={{ height: "100%", width: "100%" }}>
            
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={15} // Maximum zoom level supported by OpenStreetMap
            minZoom={0} // Minimum zoom level supported by OpenStreetMap
            errorTileUrl="https://www.example.com/error-tile.png" // URL of an error tile to display if tile loading fails
            noWrap={true} // Prevents the map from wrapping around the world horizontally
            />

            {CLUBS.map((item:any,index:number)=>(
                <Marker
                key={index}
                position={item.geocode}
                icon={icon}
              >
                <Popup className="w-fit h-fit">
                  <div className='flex flex-col gap-2'>
                    <span className="text-base font-extrabold">{item.school}</span>
                    <div className='flex flex-col '>
                      <span className='text-sm'>Phone: {item.phone}</span>
                      <span className='text-sm'>Email: {item.email}</span>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}

          </MapContainer>

      </main>
    )
}