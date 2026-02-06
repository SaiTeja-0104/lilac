"use client"

import React, { useEffect, useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setIsHidden(false)
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (isOpen) {
        setLastScrollY(currentScrollY)
        return
      }

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen, lastScrollY])

  return (
    <>
      <nav
        className={`bg-[color:var(--color-bg)]/50 backdrop-blur-md fixed top-0 left-0 right-0 z-40 transform transition-transform duration-300 ${
          isHidden && !isOpen ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className='flex items-center justify-between sm:px-18 px-6 py-6'>
          <button
            type='button'
            className='sm:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--color-accent)] hover:bg-[var(--color-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]'
            aria-label='Toggle navigation'
            aria-expanded={isOpen}
            aria-controls='primary-navigation-mobile'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='sr-only'>{isOpen ? 'Close main menu' : 'Open main menu'}</span>
            {isOpen ? (
              <svg className='h-6 w-6' viewBox='0 0 24 24' aria-hidden='true'>
                <path
                  d='M6 6l12 12M18 6l-12 12'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            ) : (
              <svg className='h-6 w-6' viewBox='0 0 24 24' aria-hidden='true'>
                <path
                  d='M4 7h16M4 12h16M4 17h16'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            )}
          </button>

          <div className='text-3xl sm:text-4xl font-medium text-[var(--color-accent)] sm:mx-0 mx-auto'>
            Lilac Template
          </div>

          <ul className='hidden sm:flex gap-8 text-lg'>
            <li className='text-[var(--color-accent)] cursor-pointer'>Blog</li>
            <li className='text-[var(--color-accent)] cursor-pointer'>Contact</li>
          </ul>
        </div>
      </nav>

      <div
        className={`${isOpen ? 'flex' : 'hidden'} sm:hidden fixed inset-0 z-50 bg-[color:var(--color-bg)] items-center justify-center`}
        id='primary-navigation-mobile'
      >
        <button
          type='button'
          className='absolute top-6 left-6 inline-flex items-center justify-center rounded-md p-2 text-[var(--color-accent)] hover:bg-[var(--color-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]'
          aria-label='Close navigation'
          onClick={() => setIsOpen(false)}
        >
          <svg className='h-6 w-6' viewBox='0 0 24 24' aria-hidden='true'>
            <path
              d='M6 6l12 12M18 6l-12 12'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>
        <ul className='flex flex-col gap-6 text-2xl text-center'>
          <li className='text-[var(--color-accent)] cursor-pointer'>Blog</li>
          <li className='text-[var(--color-accent)] cursor-pointer'>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Nav
