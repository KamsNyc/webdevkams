'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = scrolling ? 'scrolled-navbar' : '';

  return (
    <section
      className={`flex h-[62px] w-full fixed top-0 left-0 items-center justify-between px-4 md:px-[64px] z-20 ${navbarClass}`}
    >
      {/* LOGO */}
      <h3 className='text-white font-extrabold tracking-widest text-[14px]'>©WEBDEVKAMS</h3>

      {/* MENU LINKS */}
      <ul className='text-white flex items-center gap-[24px]'>
        <Link href={'#about'}>ABOUT</Link>
        <Link href={'#works'}>WORKS</Link>
        <Link href={'#testimonials'}>TESTIMONIALS</Link>
        <Link href={'#contact'}>CONTACT</Link>
      </ul>

      <style jsx>{`
        .scrolled-navbar {
          background-color: #000000;
        }
      `}</style>
    </section>
  );
}

export default Navbar;