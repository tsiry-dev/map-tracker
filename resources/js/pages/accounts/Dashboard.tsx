import Map from '@/components/app/Map'
import AccountLayout from '@/layouts/AccountLayout'
import React from 'react'

export default function Dashboard() {
  return <AccountLayout>
    <div className='w-full p-3'>
       <Map />
    </div>
  </AccountLayout>
}
