import { Link } from '@inertiajs/react'
import React from 'react'
import { text } from 'stream/consumers'
import  styles from './Nav.module.scss'
import Logo from './Logo'

export default function Nav() {
  return <nav
     className='flex items-center justify-between h-[5rem] px-8
                border-1 border-orange-200 bg-gray-50 rounded-2xl'>
    <Logo size='text-sm' />

      <ul className='flex gap-4'>
          <Link href={route('login')} className={`${styles['nav-link']}`} >Login</Link>
          <Link href={route('register')} className={`${styles['nav-link']}`} >Register</Link>
      </ul>
  </nav>
}

