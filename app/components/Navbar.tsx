import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <section className='flex h-[82px] w-full fixed top-0 left-0 items-center justify-between px-4 md:px-[64px] z-20'>
        {/* LOGO */}
        <h3 className='text-white font-extrabold tracking-widest text-[14px]'>©WEBDEVKAMS</h3>

        {/* MENU LINKS */}
        <ul className='text-white flex items-center gap-[24px]'>
            <Link href={'#about'}>ABOUT</Link>
            <Link href={'/works'}>WORKS</Link>
            <Link href={'/contact'}>CONTACT</Link>
        </ul>
    </section>
  )
}

export default Navbar
