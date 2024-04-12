import Image from "next/image";
import Map from '@/components/App'

export default function Home() {
  return (
    <main className="w-[100%] h-[100vh] relative">
      <Map/>
      <div className='bg-green-600 fixed z-50 bottom-0 left-0'>
        red coss
      </div>
    </main>
  );
}
