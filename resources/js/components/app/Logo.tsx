import { Link } from '@inertiajs/react'
import { MapPinPlus } from 'lucide-react'

type LogoProps = {
    size?: string;
}

export default function Logo({ size = 'text-lg' }: LogoProps) {
  return (
    <Link href={route('home')} className={`${size} font-bold max-w-[12rem] text-white flex items-center justify-center bg-primary p-2 rounded-2xl cursor-pointer`}>
        <span>
           Map Tracker
        </span>
        <MapPinPlus />
    </Link>
  )
}
