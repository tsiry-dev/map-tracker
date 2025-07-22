import React from 'react'

import { Provider, useSelector } from 'react-redux';

import { RootState, store } from '@/stores/store';

import styles from './AccountLayout.module.scss'
import Logo from '@/components/app/Logo';
import { Link } from '@inertiajs/react';
import NewMarker from '@/components/app/marker/NewMarker';

type AccountLayoutProps = {
    children?: React.ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {


  return (
    <Provider store={store}>
        <div className={`${styles.account}`}>
            <aside className={`${styles['account-aside']}`}>
                <div className='text-center m-3 flex justify-center'>
                    <Logo />
                </div>


                <div className='bg-white p-4 mt-3 m-2 rounded-sm'>
                    <h2 className='text-sm'>Clicker sur la carte pour obtenir l'information et ajouter votre nouveau marquer</h2>
                </div>

                <NewMarker />

            </aside>

        <main className='flex-1'>
            {children}
        </main>
        </div>
    </Provider>
  )
}
