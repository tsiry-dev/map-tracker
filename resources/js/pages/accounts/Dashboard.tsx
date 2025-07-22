import AccountLayout from '@/layouts/AccountLayout'
import React from 'react'

export default function Dashboard() {
  return <AccountLayout>
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  </AccountLayout>
}
