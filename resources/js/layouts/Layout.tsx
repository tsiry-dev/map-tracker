import Nav from '@/components/app/Nav';
import React, { ReactNode } from 'react'

type LayoutProps = {
    children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className='w-[95%]  md:max-w-[80rem] mx-auto mt-10 bg-white p-3 rounded-3xl'>
      <Nav />
      <main>
          {children}
      </main>
  </div>
}
