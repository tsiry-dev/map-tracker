import Layout from '@/layouts/Layout';
import { Link } from '@inertiajs/react';
import React from 'react'

type HomeProps = {
    title: string;
    description: string;
}

export default function Home({ title, description }: HomeProps) {
  return <Layout>
       <header className='grid grid-cols-1 lg:grid-cols-2 gap-3 bg-cover bg-center mt-12'>
            <div className='flex-1 '>
                 <h1 className='text-4xl mt-15 text-center lg:text-left'>
                    <span className='font-sm text-gray-500'>Store your favorite in</span>
                    <div className='mt-8'>
                      <span className='text-6xl font-bold bg-primary text-white p-3'>Map Tracker</span>
                    </div>
                 </h1>

                <div className='mt-15 text-center lg:text-left'>
                   <Link href={route('login')} className='btn-primary'>Explore</Link>
                </div>
            </div>
            <div className='flex-1 mt-15 lg:mt-0 h-[300px]'>
                <img
                    className='w-full h-full object-cover rounded-2xl'
                    src="https://i.pinimg.com/736x/97/1d/4f/971d4f4a8f6d012bc30516e1e7b2cc6f.jpg"
                    alt=""
                />
            </div>
       </header>
  </Layout>
}


