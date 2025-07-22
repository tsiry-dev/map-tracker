import React from 'react'
import styles from './AccountLayout.module.scss'
import Logo from '@/components/app/Logo';

type AccountLayoutProps = {
    children?: React.ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className={`${styles.account} h-[100vh]`}>
        <aside className={`${styles['account-aside']}`}>
            <div className='text-center m-3 flex justify-center'>
                <Logo />
            </div>
        </aside>

       <main>
          {children}
       </main>
    </div>
  )
}
